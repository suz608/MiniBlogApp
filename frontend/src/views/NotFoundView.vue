<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <section class="text-center flex flex-col justify-center items-center h-96">
    <i class="pi pi-exclamation-triangle text-neutral-400 text-8xl mb-5"></i>
    <h1 class="text-6xl font-bold mb-4">404 Not Found</h1>
    <br/>
    <p class="text-3xl mb-5 font-light">This page does not exist</p>
    <br/>
    <RouterLink
        to="/"
        class="text-black border shadow-md rounded-full px-5 py-3 text-xl hover:text-neutral-400 flex items-center"
      >
      <i class="pi pi-arrow-left mr-3"></i>
        Back to Homepage
      </RouterLink>
  </section>
</template>