<script setup lang="ts">
import Header from '@/components/Header.vue';
import { reactive } from 'vue';
import api from '@/services/api';
import { useRouter } from 'vue-router'; // Import useRouter for redirection
import { useToast } from 'vue-toastification';

const router = useRouter(); 
const toast = useToast();
const postId = localStorage.getItem('postId');
const postText = localStorage.getItem('postText');

const post = reactive({
  text: '', 
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
    toast.error('You must be logged in to create a post.');
    return;
  }

  try {
    // Prepare the updated data
    const updatedPost = {
      text: post.text.trim(),  // Ensure text is not empty
    };

    // Make the PUT request to update a post
    const response = await api.put(`/api/posts/${postId}`, updatedPost, {
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
        v-if="typeof postText === 'string' "
        id="textfield"
        name="textfield"
        class="border-dashed border-2 text-xl w-[80vh] py-2 px-3 placeholder:text-[rgb(150,147,147)]"
        rows="6"
        :placeholder="postText"
        v-model="post.text"
    ></textarea>
    <textarea
        v-else
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