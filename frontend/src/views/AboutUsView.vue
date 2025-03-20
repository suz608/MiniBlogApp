<script setup lang="ts">
import Header from '@/components/Header.vue';
import BackButton from '@/components/BackButton.vue';
import BottomCpn from '@/components/BottomCpn.vue';
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <Header/>
    <!-- <div class="flex justify-end mr-[10%] mb-3">
        <BackButton/>
    </div> -->
    <NavBar/>
    <div class="container mt-10 mx-auto p-4">
      <h1 class="text-3xl font-bold text-center mb-6">Welcome to DailyInklings</h1>
      <p class="text-xl leading-relaxed text-gray-700 mt-4">
        At <span class="font-semibold">DailyInklings</span>, we believe that <strong>every thought</strong>, 
        <strong>every experience</strong>, and <strong>every moment</strong> deserves to be captured and preserved. 
        In a world that moves at such a rapid pace, it's easy to overlook the little things that make life extraordinary—
        the fleeting moments that shape us and the thoughts that inspire us. Whether it's a quiet reflection, a burst of creativity, 
        or a life-changing event, we see value in each experience and recognize its potential to leave a lasting impact.
      </p>
      <p class="text-xl leading-relaxed text-gray-700 mt-4">
        We understand that life can be overwhelming, and sometimes the most profound ideas come at the most unexpected times. 
        That’s why we are committed to providing a platform where you can jot down your innermost thoughts, reflect on your daily experiences, 
        and preserve the moments that define your journey. At DailyInklings, we believe that by capturing the seemingly small, 
        we can unlock the profound, and that <strong>every story</strong>, no matter how brief, holds the power to inspire, connect, and transform.
      </p>
      <p class="text-xl leading-relaxed text-gray-700 mt-4">
        So, take a moment. Reflect. Write. Because <strong>every thought counts</strong>, and <strong>every moment matters</strong>.
      </p>
    </div>
    <BottomCpn/>
  </template>