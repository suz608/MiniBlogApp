<script setup lang="ts">
import Header from '@/components/Header.vue';
import BottomCpn from '@/components/BottomCpn.vue';
import BackButton from '@/components/BackButton.vue';
import NavBar from '@/components/NavBar.vue';

</script>

<template>
    <Header/><br/>
    <NavBar/>
    <div class="container mt-10 mx-auto p-4 flex flex-col text-xl font-thin ml-[20vh] shadow-md leading-loose">
        <a>Email: dailyinklings@mail.com</a>
        <a>Phone: XXX-XXXX-XXXX</a>
    </div>
    <BottomCpn/>
</template>