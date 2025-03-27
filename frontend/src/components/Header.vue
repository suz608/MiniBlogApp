<script setup lang="ts">
import { RouterLink } from 'vue-router';
import logo from '@/assets/img/logo.jpg';
import LogSignButton from './LogSignButton.vue';
import Hello from './Hello.vue';
import { useStore } from 'vuex';
import { computed } from "vue";

const store = useStore();
const userLoggedIn = computed(() => store.getters.isUserLoggedIn);

</script>

<template>
    <div class="flex justify-between mt-[5vh] sm:h-20 md:h-35 lg:h-50">
        <RouterLink class="flex" to="/">
            <img class="h-[100%] w-auto aspect-[2.97/2]" :src="logo" alt="Daily Inklings" />
        </RouterLink>
        <div class="mt-[6vh]">
            <!-- If user is not logged in, show log in & Sign up button -->
            <LogSignButton v-if="!userLoggedIn"/>
            <!-- If user is logged in, show Hello component -->
            <Hello v-else/>
        </div>
    </div>
</template>