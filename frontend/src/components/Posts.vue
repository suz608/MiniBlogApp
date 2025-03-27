<script setup lang="ts">
import { reactive, onMounted} from 'vue';
import type { Post } from '@/types';  
import axios from 'axios';
import api from '@/services/api';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue'; // Keep only one spinner
import { useToast } from 'vue-toastification';
import { useRouter } from 'vue-router';

const limit: number = 5;  // Number of posts per page
const router = useRouter();
const toast = useToast();
const token = localStorage.getItem('userToken');

const state = reactive({
  posts: [] as Post[],  // Store the posts
  isLoading: true,
  currentPage: 1, // Track the current page
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
    const res = await api.delete(`/api/posts/${postId}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    state.posts = state.posts.filter((post: any) => post.id !== postId);
    toast.success('Deleted successfully!');
  } catch (error) {
    console.error('Error deleting post', error);
    toast.error('Failed to delete.');
  }
};

// Edit post function
const handleUpdate = async (postId: string, postText: string) => {
  localStorage.setItem('postId', postId);
  localStorage.setItem('postText', postText);
  router.push('/edit-post');
};

// Fetch posts on mounted
onMounted(async () => {
  try {
    const response = await api.get('/api/posts/', {
      headers: { Authorization: `Bearer ${token}` },
    });

    state.posts = response.data.map((post: any) => ({
      ...post,
      text: post.text,
      id: post._id,  // Change '_id' to 'id' based on backend response
      updatedAt: post.updatedAt ? formatDate(post.updatedAt) : 'Not Available',
    }));

    // Put newest posts on top
    state.posts.reverse();
  } catch (error) {
    console.error('Error fetching posts', error);
  } finally {
    state.isLoading = false;
  }
});

// Method to go to the next page
const nextPage = () => {
  if ((state.currentPage * limit) < state.posts.length) {
    state.currentPage++;
  }
};

// Method to go to the previous page
const prevPage = () => {
  if (state.currentPage > 1) {
    state.currentPage--;
  }
};

// Method to go to a specific page
const goToPage = (page: number) => {
  state.currentPage = page;
};

// Method to calculate the current posts to display based on the page
const getCurrentPagePosts = () => {
  const startIndex = (state.currentPage - 1) * limit;
  const endIndex = startIndex + limit;
  return state.posts.slice(startIndex, endIndex);
};

// Method to generate page numbers
const getPageNumbers = () => {
  const totalPages = Math.ceil(state.posts.length / limit);
  return Array.from({ length: totalPages }, (_, i) => i + 1);
};
</script>

<template>
  <div class="container w-[100%]">
    <!-- Show the PulseLoader while data is being fetched -->
    <div v-if="state.isLoading" class="flex justify-center items-center h-64">
      <PulseLoader size="15" color="#4F46E5" />
    </div>

    <!-- Display message if no posts are available -->
    <div v-else-if="state.posts.length === 0" class="text-center text-lg text-gray-600 mt-8">
      <p>Oops, you have not posted anything yet.</p>
      <router-link to="/new-post" class="text-blue-500 hover:text-blue-700 mt-2 block">Create a new post</router-link>
    </div>

    <!-- Display posts once loading is complete -->
    <div v-else>
      <!-- Create more button -->
      <div class="flex justify-end mt-[10vh]">
        <RouterLink
          to="/new-post"
          class="w-auto rounded-4xl font-thin shadow-md bg-white px-6 pb-2 pt-2.5 sm:text-xl md:text-2xl lg:text-3xl text-black shadow-dark-3 transition duration-150 ease-in-out hover:bg-white hover:shadow-neutral-500 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong"
        >
          <i class="pi pi-plus"></i> Create New
        </RouterLink>
      </div>
      
      <!-- Post list -->
      <ul class="flex flex-col items-center mt-8">
        <li v-for="post in getCurrentPagePosts()" :key="post.id" class="w-[100%]">
          <!-- Wrapper of each post -->
          <div class="border border-dashed p-4">
            <p class="text-gray-500 text-sm">{{ post.updatedAt }}</p>
            <div class="flex justify-end gap-2">
              <!-- Edit button -->
              <button 
                v-if="post.id"
                type="button" 
                class="px-1.5 py-1 w-auto shadow-md text-sm bg-black text-white rounded-full hover:bg-neutral-400 transition duration-200" 
                @click="handleUpdate(post.id, post.text)">
                <i class="pi pi-pencil"></i>
              </button>
              <!-- delete button -->
              <button
                v-if="post.id"
                type="button"
                class="px-1.5 py-1 w-auto shadow-md text-sm bg-black text-white rounded-full hover:bg-neutral-400 transition duration-200"
                @click="deletePost(post.id)"
              >
                <i class="pi pi-times fill-white"></i>
              </button>
            </div>
            <p class="font-light sm: text-sm md:text-md lg:text-xl w-[90%]">{{ post.text }}</p>
          </div>
        </li>
      </ul>

      <!-- Pagination Controls -->
      <div class="flex justify-center mt-6">
        <!-- Previous button -->
        <button
          v-if="state.currentPage > 1"
          @click="prevPage"
          class="px-4 py-2 bg-white text-black border rounded-full mr-2 hover:bg-black hover:text-white"
        >
          Previous
        </button>

        <!-- Page numbers -->
        <div class="flex items-center space-x-2">
          <button
            v-for="page in getPageNumbers()"
            :key="page"
            @click="goToPage(page)"
            :class="[
              'px-4 py-2 text-black rounded-md hover:bg-neutral-300 hover:text-white',
              state.currentPage === page ? 'bg-neutral-200' : 'bg-white '
            ]"
          >
            {{ page }}
          </button>
        </div>

        <!-- Next button -->
        <button
          v-if="state.currentPage * limit < state.posts.length"
          @click="nextPage"
          class="px-4 py-2 bg-white text-black border rounded-full ml-2 hover:bg-black hover:text-white"
        >
          Next
        </button>
      </div>
    </div>
  </div>
</template>
