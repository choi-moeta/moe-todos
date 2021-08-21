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
  <main
    class="
      lowercase
      text-gray-700 dark:text-gray-200
      max-w-screen-sm w-full
      mx-auto px-8
    "
  >
    <moe-header />
    <router-view />
  </main>
</template>
