<script setup lang="ts">
import Header from '@/components/Header.vue';
import BackButton from '@/components/BackButton.vue';
import { reactive } from 'vue';
import axios from 'axios'; // Import axios to make HTTP requests
import { useRouter } from 'vue-router'; // Import useRouter for redirection
import { useToast } from 'vue-toastification';

const router = useRouter(); // Initialize the Vue Router

const toast =useToast();

const post = reactive({
  text: '',  // Non-empty text field for the post
});

// Handle reset button click to clear the textarea
const resetText = () => {
  post.text = '';  // Set the textfield to empty string
}

// Handle submit of the form
const handleSubmit = async () => {
  if (!post.text.trim()) {
    alert('Please enter some text for the post.'); // Show alert if text is empty
    return;
  }

  const token = localStorage.getItem('userToken'); // Get token from local storage

  // Ensure the token is available before sending the request
  if (!token) {
    alert('You must be logged in to create a post.');
    return;
  }

  try {
    // Prepare the new post data
    const newPost = {
      text: post.text.trim(),  // Ensure text is not empty
    };

    // Make the POST request to create a new post
    const response = await axios.post('http://localhost:3000/api/posts/', newPost, {
      headers: {
        Authorization: `Bearer ${token}`,  // Include the token in the headers
      },
    });

    // If the post is created successfully, redirect to posts list
    toast.success('Success!', {
    timeout: 2000,  // Toast will disappear after 2 seconds (2000ms)
    });
    router.push('/my-inklings');  // Navigate to the homepage or posts listing
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred.');
  }
}
</script>

<template>
  <Header /><br />

  <div class="grid grid-cols-1 place-items-center mt-7">
    <form @submit.prevent="handleSubmit">
      <textarea
        id="textfield"
        name="textfield"
        class="border-dashed border-2 text-xl w-[80vh] py-2 px-3 placeholder:text-[rgb(150,147,147)]"
        rows="6"
        placeholder="Write down your thoughts here..."
        v-model="post.text"
      ></textarea>

      <div name="action-buttons" class="flex justify-evenly mt-6">

        <RouterLink
            to="/my-inklings"
            class="text-white bg-black border shadow-md rounded-full px-5 py-3 text-xl hover:text-neutral-400 flex items-center"
        >
            <i class="pi pi-arrow-left fill-white mr-2"></i> Back
        </RouterLink>
        <!-- Reset Button -->
        <button type="button" class="px-6 py-3 shadow-md text-xl border bg-black text-white rounded-full hover:bg-neutral-400 transition duration-200" @click="resetText">
          <i class="pi pi-refresh fill-white"></i> Reset
        </button>

        <!-- Submit Button -->
        <button type="submit" class="px-6 py-3 shadow-md text-xl border bg-black text-white rounded-full hover:bg-neutral-400 transition duration-200">
          <i class="pi pi-check fill-white"></i> Submit
        </button>
      </div>
    </form>
  </div>
</template>