<script setup lang="ts">
import { ref } from 'vue';
import Header from '@/components/Header.vue';
import BottomCpn from '@/components/BottomCpn.vue';
import api from '@/services/api';
import { useRouter } from 'vue-router';
import store from '@/store/index.ts'
import axios from 'axios';

// Form state
const username = ref('');
const email = ref('');
const password = ref('');
const confirmPassword = ref('');
const errorMessage = ref('');
const successMessage = ref('');
const router = useRouter(); // To navigate after successful registration

// Handle form submission
const handleSubmit = async () => {
  try {
    // Reset messages
    errorMessage.value = '';
    successMessage.value = '';

    // Validate form fields
    if (!username.value || !email.value || !password.value || !confirmPassword.value) {
      errorMessage.value = 'All fields are required!';
      return;
    }

    // Check if the passwords match
    if (password.value !== confirmPassword.value) {
      errorMessage.value = 'Passwords do not match!';
      return;
    }

    // Prepare data to be sent
    const userData = {
      name: username.value,
      email: email.value,
      password: password.value,
    };

    // Make POST request to backend API
    const response = await api.post('/api/users/', userData);

    // Handle success response
    const { token, name } = response.data;
    localStorage.setItem('userToken', token); // Store token in localStorage
    localStorage.setItem('userName', name); // Store name in localStorage

    // Dispatch Vuex action to set userLoggedIn to true
    store.dispatch('login');  // This will commit 'setUserLoggedIn' mutation with true

    // Success response
    successMessage.value = 'Registration successful! Redirecting...';

    // Redirect user after successful registration
    setTimeout(() => {
      router.push('/'); // Redirect to homepage
    }, 2000); // Delay for 2 seconds

  } catch (error: unknown) { // Explicitly declare 'error' as 'unknown'
    if (axios.isAxiosError(error)) {  // Check if 'error' is an AxiosError
      // Handle error response from server
      if (error.response) {
        if (error.response.status === 400) {
          errorMessage.value = error.response.data.message || 'Email is already registered.';
        } else {
          errorMessage.value = error.response.data.message || 'An error occurred. Please try again.';
        }
      } else {
        errorMessage.value = 'Network or server error. Please try again later.';
      }
    } else {
      // Handle unknown errors (not Axios errors)
      errorMessage.value = 'An unexpected error occurred. Please try again.';
    }
  }
};
</script>

<template>
  <Header />

  <div class="max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-lg">
    <h2 class="text-2xl font-bold text-center mb-6">Sign Up</h2>

    <!-- Show validation errors if any -->
    <div v-if="errorMessage" class="mb-4 text-red-500">
      {{ errorMessage }}
    </div>

    <!-- Show success message if registration is successful -->
    <div v-if="successMessage" class="mb-4 text-green-500">
      {{ successMessage }}
    </div>

    <!-- Registration Form -->
    <form @submit.prevent="handleSubmit">
      <div class="mb-4">
        <label for="username" class="block text-sm font-medium text-gray-700">Username</label>
        <input 
          type="text" 
          id="username" 
          v-model="username" 
          placeholder="Enter your username" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
          required
        />
      </div>

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

      <!-- Confirm Password -->
      <div class="mb-4">
        <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Confirm Password</label>
        <input 
          type="password" 
          id="confirmPassword" 
          v-model="confirmPassword" 
          placeholder="Confirm your password" 
          class="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" 
          required
        />
      </div>

      <!-- Sign Up Button -->
      <div class="mb-4 flex justify-center">
        <button 
          type="submit" 
          class="text-black border rounded-full px-5 py-3 text-xl hover:text-neutral-400 hover: shadow-md w-auto">
          Sign up
        </button>
      </div>
    </form>
  </div>

  <BottomCpn />
</template>
