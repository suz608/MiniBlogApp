<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import api from '../services/api'; 
import Header from '@/components/Header.vue';
import BottomCpn from '@/components/BottomCpn.vue';
import store from '@/store/index.ts'
import BackButton from '@/components/BackButton.vue';

// Form state
const email = ref('');
const password = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter();

// Handle form submission
const handleSubmit = async () => {
  try {
    // Reset messages
    errorMessage.value = '';
    successMessage.value = '';

    // Validate form fields
    if (!email.value || !password.value) {
      errorMessage.value = 'Please enter both email and password!';
      return;
    }

    // Prepare data to be sent
    const userData = {
      email: email.value,
      password: password.value,
    };

    const response = await api.post('/api/users/login', userData);
    console.log(response);

    // Handle success response
    const { token, name } = response.data;
    localStorage.setItem('userToken', token); // Store token in localStorage
    localStorage.setItem('userName', name); // Store name in localStorage

    // Dispatch Vuex action to set userLoggedIn to true
    store.dispatch('login');  // This will commit 'setUserLoggedIn' mutation with true

    successMessage.value = 'Login successful! Redirecting...';

    // Redirect to profile page after successfully logging in
    setTimeout(() => {
      router.push('/profile'); // Redirect to a dashboard or home page
    }, 2000); // Delay for 2 seconds to show success message

  } catch (error: any) {
    // Handle error response
    errorMessage.value = 'Invalid credentials. Please try again.';
  }
};
</script>

<template>
  <Header />
  <div class="flex justify-end mb-3">
    <BackButton/>
  </div>
  
  <div class="max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-lg mt-10">
    <h2 class="text-2xl font-bold text-center mb-6">Log In</h2>

    <!-- Show error message if login fails -->
    <div v-if="errorMessage" class="mb-4 text-red-500">
      <p>{{ errorMessage }}</p>
    </div>

    <!-- Show success message if login is successful -->
    <div v-if="successMessage" class="mb-4 text-green-500">
      <p>{{ successMessage }}</p>
    </div>

    <!-- Login Form -->
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          placeholder="Enter your email" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
          required
        />
      </div>

      <div class="mb-4">
        <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          placeholder="Enter your password" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
          required
        />
      </div>

      <div class="mb-4 flex justify-center">
        <button 
          type="submit" 
          class="text-black border rounded-full px-5 py-3 text-xl hover:text-neutral-400 hover:shadow-md w-auto">
          Log In
        </button>
      </div>
    </form>

    <!-- Option to go to sign up page if user doesn't have an account -->
    <div class="text-center mt-4">
      <p>Don't have an account? <router-link to="/sign-up" class="text-blue-500">Sign up</router-link></p>
    </div>
  </div>

  <BottomCpn />
</template>

