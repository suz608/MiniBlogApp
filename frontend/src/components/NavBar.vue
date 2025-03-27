<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath: string) => {
  const route = useRoute();
  return route.path === routePath;
};
</script>

<template>
  <nav class="flex justify-between w-[90%] ml-[5%] lg:mt-2">
        <RouterLink
          to="/"
          :class="[
            isActiveLink('/') ? 'shadow-md' : 'bg-white text-black hover:bg-neutral-700 hover:shadow-dark-2 hover:text-white',
            'sm:text-xl md:text-2xl lg:text-3xl', 
            'px-6 pb-2 pt-2.5 rounded-md font-thin',
          ]"
        >
          Home
        </RouterLink>
        <RouterLink
          to="/my-posts"
          :class="[
            isActiveLink('/my-posts') ? 'shadow-md' : 'bg-white text-black hover:bg-neutral-700 hover:shadow-dark-2 hover:text-white',
            'sm:text-xl md:text-2xl lg:text-3xl',  
            'px-3 py-2 rounded-md font-thin'
          ]"
        >
          My Posts
        </RouterLink>
        <RouterLink
          to="/about-us"
          :class="[
            isActiveLink('/about-us') ? 'shadow-md' : 'bg-white text-black hover:bg-neutral-700 hover:shadow-dark-2 hover:text-white',
            'sm:text-xl md:text-2xl lg:text-3xl',  
            'px-3 py-2 rounded-md font-thin'
          ]"
        >
          About Us
        </RouterLink>
        <RouterLink
          to="/contact"
          :class="[
            isActiveLink('/contact') ? 'shadow-md ' : 'bg-white text-black hover:bg-neutral-700 hover:shadow-dark-2 hover:text-white',
            'sm:text-xl md:text-2xl lg:text-3xl', 
            'px-3 py-2 rounded-md font-thin'
          ]"
        >
          Contact
        </RouterLink>
  </nav>
</template>
