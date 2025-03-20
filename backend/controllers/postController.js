import asyncHandler from 'express-async-handler';
import Post from '../models/postModel.js';
import User from '../models/userModel.js';

// @desc    Get posts
// @route   GET /api/posts
// @access  Private
export const getPosts = asyncHandler(async (req, res) => {
  const posts = await Post.find({ user: req.user.id });
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

  res.status(200).json(newPost);
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

  // Make sure the logged in user matches the post user
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  res.status(200).json(updatedPost);
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

  // Make sure it is the right user who delete the post
  if (post.user.toString() !== req.user.id) {
    res.status(401);
    throw new Error('User not authorized');
  }

  res.status(200).json({ message: 'Post deleted successfully' });

});
