<script setup lang="ts">
import flower from '@/assets/img/flowers.jpg';
</script>

<template>
    <div class="w-[80%] ml-[10%] mt-[7%] flex justify-between">
        <img class="h-auto w-[45%]" :src="flower" alt="flowers" />
        <div name="text" class=" mt-[5%] w-[40%] flex flex-col items-center">
            <h1 class="font-thin sm:text-4xl lg:text-6xl drop-shadow-md leading-20">Ink Your Thoughts, Live Your Story.</h1>
            <a class="font-light text-2xl mt-[5vh] leading-relaxed">At DailyInklings, we believe that every thought, every experience, 
                and every moment deserves to be captured. 
            </a>
        <button class="font-light mt-[7vh] px-6 py-3 shadow-md text-xl border bg-black text-white rounded-full hover:bg-neutral-400 transition duration-200">
            Read More
        </button>
        </div>
    </div>
</template>