<script setup lang="ts">
import { useHead } from '@vueuse/head'

useHead({
  title: 'simple todo',
  meta: [
    { name: 'description', content: 'my simple todo' },
  ],
})
</script>

<template>
  <main class="px-4 py-10 text-center text-gray-700 dark:text-gray-200">
    <router-view />
    <Footer />
  </main>
</template>
