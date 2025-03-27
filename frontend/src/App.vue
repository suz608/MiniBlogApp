<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
    <!-- Set a 10% border to all contents of this app -->
    <div class="w-[80%] ml-[10%]">
        <router-view></router-view> 
    </div>
</template>
