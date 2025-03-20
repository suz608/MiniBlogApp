<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import type { Post } from '@/types';  
import axios from 'axios';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'; // Keep only one spinner
import { useToast } from 'vue-toastification';

const toast =useToast();

const token = localStorage.getItem('userToken');

const state = reactive({
  posts: [] as Post[],  // Use Post[] as type for posts array
  isLoading: true,
});

// Function to format date into a human-readable format
const formatDate = (timestamp: string): string => {
  const date = new Date(timestamp);
  const options: Intl.DateTimeFormatOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true,
  };
  return date.toLocaleString('en-US', options);
};

// Delete post function
const deletePost = async (postId: string) => {
  try {
    // Correct URL by interpolating the postId into the URL path
    const res = await axios.delete(`http://localhost:3000/api/posts/${postId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Remove post from the state after deletion
    state.posts = state.posts.filter((post: any) => post.id !== postId);
    toast.success('Deleted successfully!');
  } catch (error) {
    console.error('Error deleting post', error);
    toast.error('Failed to delete.');
  }
};


// Fetch posts on mounted
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/posts/', {
      headers: { Authorization: `Bearer ${token}` },
    });

    // Explicitly type the post in the map function as Post
    state.posts = response.data.map((post: any) => ({
      ...post,
      text: post.text,
      id: post._id,  // Change '_id' to 'id' based on backend response
      updatedAt: post.updatedAt ? formatDate(post.updatedAt) : 'Not Available',
    }));

    // Put newest to top
    state.posts.reverse();
  } catch (error) {
    console.error('Error fetching posts', error);
  } finally {
    state.isLoading = false;
  }
});
</script>

<template>
  <div class="container mx-auto">
    <!-- Show the PulseLoader while data is being fetched -->
    <div v-if="state.isLoading" class="flex justify-center items-center h-64">
      <PulseLoader size="15" color="#4F46E5" />
    </div>

    <!-- Display message if no posts are available -->
    <div v-else-if="state.posts.length === 0" class="text-center text-lg text-gray-600 mt-8">
      <p>Oops, you have not posted anything yet.</p>
      <router-link to="/new-post" class="text-blue-500 hover:text-blue-700 mt-2 block">Create a new inkling</router-link>
    </div>

    <!-- Display posts once loading is complete -->
    <div v-else >
        <div class="flex justify-end mt-[10vh] mr-[10vh]">
            <RouterLink
                    to="/new-post"
                    class="w-auto rounded-4xl font-thin shadow-md bg-white px-6 pb-2 pt-2.5 sm:text-xl md:text-2xl lg:text-3xl text-black shadow-dark-3 transition duration-150 ease-in-out hover:bg-white hover:shadow-neutral-500 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                <i class="pi pi-plus"></i>  Create New
            </RouterLink>
        </div>
      <ul class="flex flex-col items-center mt-8">
        <li v-for="post in state.posts" :key="post.id" class="w-[120vh]">
          <div class="border border-dashed p-3">
            <p class="text-gray-500 text-sm">{{ post.updatedAt }}</p>
            <div class="flex justify-end">
                <button 
                v-if="post.id"
                type="button" 
                class="px-1.5 py-1 w-auto shadow-md text-sm bg-black text-white rounded-full hover:bg-neutral-400 transition duration-200" 
                @click="deletePost(post.id)">
                <i class="pi pi-times fill-white"></i>
                </button>
            </div>
            <p class="font-semibold text-xl">{{ post.text }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
