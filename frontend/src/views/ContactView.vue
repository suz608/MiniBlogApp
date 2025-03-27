<script setup lang="ts">
import Header from '@/components/Header.vue';
import BottomCpn from '@/components/BottomCpn.vue';
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <Header/><br/>
    <NavBar/>
    <div class="items-center">
        <div class="flex flex-col justify-center mt-[10%] mx-auto ml-[15%] w-[70%] p-4 sm:text-sm md:text-md lg:text-xl font-thin shadow-md leading-loose">
            <a>Email: dailyinklings@mail.com</a>
            <a>Phone: XXX-XXXX-XXXX</a>
        </div>
    </div>
    <BottomCpn/>
</template>