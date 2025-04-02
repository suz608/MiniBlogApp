<script setup lang="ts">
import flower from '@/assets/img/flowers.jpg';

</script>

<template>
    <div class="mt-[7%] flex flex-col-2 justify-between items-center w-[100%]">
        <img class="w-[45%] h-auto" :src="flower" alt="flowers" />
        <!-- right part of hero section -->
        <div name="text" class="w-[40%] h-[100%] flex flex-col items-center">
            <h1 class="font-thin text-md md:text-3xl lg:text-6xl drop-shadow-md lg:leading-20">Ink Your Thoughts, Live Your Story.</h1>
            <a class="mt-1 md:mt-6 text-xs md:text-2xl lg:text-2xl font-[100] lg:mt-[7vh] lg:leading-relaxed lg:tracking-wide">At DailyThoughts, we believe that every thought, every experience, 
                and every moment deserves to be captured. 
            </a>
            <RouterLink
                to="/about-us"
                class="text-xs md:text-l lg:text-xl justify-center items-center font-light mt-2 md:mt-[7vh] shadow-md border bg-black text-white rounded-full hover:bg-neutral-400 transition duration-200 inline-flex px-3 py-1 md:px-4 md:py-2">
                Read More
            </RouterLink>
        </div>
    </div>
</template>