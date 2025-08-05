import RedisClient from '../config/redis.config.js'; // import the Redis client instance
import Post from '../models/postModel.js';
import asyncHandler from 'express-async-handler';

// @desc    Get posts
// @route   GET /api/posts
// @access  Private
export const getPosts = asyncHandler(async (req, res) => {
  const userId = req.user.id;

  // Check if posts are cached in Redis
  const cachedPosts = await RedisClient.getClient().get(`posts:${userId}`);

  if (cachedPosts) {
    // If cached data exists, return it
    return res.status(200).json(JSON.parse(cachedPosts));
  }

  // If no cached data, fetch from the database
  const posts = await Post.find({ user: userId });

  // Cache the posts in Redis for future requests
  await RedisClient.getClient().setex(`posts:${userId}`, 3600, JSON.stringify(posts)); // Cache for 1 hour

  res.status(200).json(posts);
});

// @desc    Set Post
// @route   POST /api/posts
// @access  Private
export const setPost = asyncHandler(async (req, res) => {
  if (!req.body.text) {
    res.status(400);
    throw new Error('Please add a text field');
  }

  const newPost = await Post.create({
    text: req.body.text,
    user: req.user.id,
  });

  // Invalidate the Redis cache for the user
  await RedisClient.getClient().del(`posts:${req.user.id}`);

  res.status(200).json(newPost);
});

// @desc    Delete Post
// @route   DELETE /api/posts/:id
// @access  Private
export const deletePost = asyncHandler(async (req, res) => {
  const post = await Post.findOneAndDelete({ _id: req.params.id });

  if (!post) {
    return res.status(400).json({ message: 'Post not found' });
  }

  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure it is the right user who deletes the post
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  // Invalidate the Redis cache for the user
  await RedisClient.getClient().del(`posts:${req.user.id}`);

  res.status(200).json({ message: 'Post deleted successfully' });
});

// @desc    Update Post
// @route   PUT /api/posts/:id
// @access  Private
export const updatePost = asyncHandler(async (req, res) => {
  const post = await Post.findById(req.params.id);

  if (!post) {
    res.status(400);
    throw new Error('Post not found');
  }

  if (!req.user) {
    res.status(401);
    throw new Error('User not found');
  }

  // Make sure the logged-in user matches the post user
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  // Update the post with the new data
  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  // Invalidate the Redis cache for the user
  await RedisClient.getClient().del(`posts:${req.user.id}`);

  // Respond with the updated post
  res.status(200).json(updatedPost);
});
