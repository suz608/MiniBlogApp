<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '@/assets/img/logo.png';
import LogSignButton from './LogSignButton.vue';
import Hello from './Hello.vue';
import { useStore } from 'vuex';
import { computed } from "vue";

const store = useStore();
const userLoggedIn = computed(() => store.getters.isUserLoggedIn);

</script>

<template>
    <div class="flex justify-between ml-[10vh] mr-[10vh] mt-[5vh]">
        <RouterLink class="flex flex-shrink-0" to="/">
            <img class="h-[30vh] w-auto" :src="logo" alt="Daily Inklings" />
        </RouterLink>
        <div class="mt-[6vh]">
            <!-- If user is not logged in, show log in & Sign up button -->
            <LogSignButton v-if="!userLoggedIn"/>
            <!-- If user is logged in, show Hello component -->
            <Hello v-else/>
        </div>
    </div>
</template>