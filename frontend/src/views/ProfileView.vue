<script setup lang="ts">
import Header from '@/components/Header.vue';
import NavBar from '@/components/NavBar.vue';
import axios from 'axios';
import type { User } from '@/types/index';
import { reactive, onMounted, computed } from 'vue';
import cat from '@/assets/img/cat.jpg';
import BottomCpn from '@/components/BottomCpn.vue';

const token = localStorage.getItem('userToken');

const state = reactive({
  currentUser: {
    name: '',
    email: '',
    createdAt: '', // createdAt can now be optional
  } as User,
  isLoading: true,
  userPosts: [] as any[], 
});

// Function to calculate the number of days since user registered
const calculateDaysSinceRegistration = (createdAt: string) => {
  if (!createdAt) {
    return 0; // If there's no createdAt date, return 0 days
  }

  const today = new Date();
  const createdDate = new Date(createdAt);
  const diffTime = today.getTime() - createdDate.getTime();
  const diffDays = Math.ceil(diffTime / (1000 * 3600 * 24)); // Convert milliseconds to days
  return diffDays;
};

// Fetch current user data on mounted
onMounted(async () => {
  try {
    const response = await axios.get('http://localhost:3000/api/users/me', {
      headers: { Authorization: `Bearer ${token}` },
    });
    state.currentUser = response.data;

    const postsResponse = await axios.get('http://localhost:3000/api/posts/', {
      headers: { Authorization: `Bearer ${token}` },
    });
    state.userPosts = postsResponse.data; 

  } catch (error) {
    console.error('Error fetching user data', error);
  } finally {
    state.isLoading = false;
  }
});

// Computed property to calculate the days since registration
const days = computed(() => {
  if(state.currentUser.createdAt){
    return calculateDaysSinceRegistration(state.currentUser.createdAt);
  }
  return 0;
});

// Computed property to get the number of posts
const numberOfPosts = computed(() => {
  return state.userPosts.length;
});

</script>

<template>
  <Header /><br />
  <NavBar />
  
  <!-- Display loading spinner while data is being fetched -->
  <div v-if="state.isLoading" class="text-center">
    <p>Loading user data...</p>
  </div>
  
  <!-- Display user data once fetched -->
  <div v-else >
    <div class="container w-[60%] ml-[20%] mt-[5%] grid grid-cols-2 content-end">
      <div class="flex flex-col justify-end">
        <h2 class="text-6xl italic font-monos font-thin">{{ state.currentUser.name }}</h2>
        <p class="mt-3 py-2.5 text-md font-monos font-thin">Email: {{ state.currentUser.email }}</p>
        <p v-if="days<2" class="py-2.5 text-md font-monos font-thin">User for {{ days }} day</p>
        <p v-else class="py-2.5 text-md font-monos font-thin">User for {{ days }} days</p>
        <p class="py-2.5 text-md font-monos font-thin">{{ numberOfPosts }} Posts</p>
      </div>
      <img :src="cat" alt="random pic" class="w-150"/>
    </div>
  </div>
  <BottomCpn/>
</template>