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
        <!-- Set the size and margin of the logo based on viewport -->
        <RouterLink class="flex flex-shrink-0" to="/">
            <img class="h-[30vh] w-auto" :src="logo" alt="Daily Inklings" />
        </RouterLink>
        <div class="mt-[6vh]">
            <LogSignButton v-if="!userLoggedIn"/>
            <Hello v-else/>
        </div>
    </div>
</template>