<script setup lang="ts">
</script>

<template>
     <div class="flex justify-end">
        <span> <!-- Use span so that 'Log' and 'in' are in the same line -->
            <RouterLink
                to="/login"
                class="sm:text-xl md:text-2xl lg:text-3xl rounded-4xl shadow-md bg-neutral-800 px-6 pb-2 pt-2.5 leading-normal text-neutral-50 shadow-dark-3 transition duration-150 ease-in-out hover:bg-neutral-700 hover:shadow-dark-2 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Log In
            </RouterLink>
            <RouterLink
                to="/sign-up"
                class="mx-4 sm:text-xl md:text-2xl lg:text-3xl rounded-4xl shadow-md bg-white px-6 pb-2 pt-2.5 leading-normal text-black shadow-dark-3 transition duration-150 ease-in-out hover:bg-white hover:shadow-neutral-500 focus:bg-neutral-700 focus:shadow-dark-2 focus:outline-none focus:ring-0 active:bg-neutral-900 active:shadow-dark-2 motion-reduce:transition-none dark:shadow-black/30 dark:hover:shadow-dark-strong dark:focus:shadow-dark-strong dark:active:shadow-dark-strong">
                Sign up
            </RouterLink>
        </span>
    </div>
</template>