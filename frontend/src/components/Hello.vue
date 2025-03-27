<script setup lang="ts">
import store from '@/store/index.ts'
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const currentUser = ref(localStorage.getItem('userName') || 'Guest');

// Handle user logout
const handleLogout = () => {
  // Remove token from localStorage
  localStorage.removeItem('userToken');
  
  // Commit Vuex mutation to update userLoggedIn state
  store.dispatch('logout');
  
  // Redirect user to home page
  router.push('/');
};

// State to toggle the dropdown visibility
const isDropdownOpen = ref(false);

// Toggle dropdown visibility
const toggleDropdown = () => {
  isDropdownOpen.value = !isDropdownOpen.value;
};
</script>

<template>
    <div class="text-xl flex justify-end items-center">
      <h2>Hello,  {{ currentUser }}</h2>
  
      <!-- Profile and Log Out dropdown -->
      <div class="relative">
        <!-- Dropdown toggle button -->
        <button @click="toggleDropdown" 
          class="flex items-center text-black px-4 py-2 text-xl hover:text-neutral-400">
          <i class="pi pi-angle-down ml-2"></i>
        </button>
  
        <!-- Dropdown menu -->
        <div 
          v-if="isDropdownOpen" 
          class="absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg border"
        >
          <RouterLink 
            to="/profile"
            class="flex justify-center px-4 py-2 text-black hover:bg-gray-100 rounded-t-lg"
          >
            Profile
          </RouterLink>
          <button 
            @click="handleLogout"
            class="flex justify-center w-full px-4 py-2 text-black hover:bg-gray-100 rounded-b-lg"
          >
            Log Out
          </button>
        </div>

      </div>
    </div>
</template>
  
