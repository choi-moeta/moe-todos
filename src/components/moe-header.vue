<script setup lang="ts">
import { isDark, toggleDark } from '$/logic'
</script>

<template>
  <nav
    class="
      py-4
      flex items-center gap-4
    "
  >
    <moe-profile class="ml-auto" />

    <button class="flex hover:text-orange-500" title="toggle theme" @click="toggleDark">
      <carbon-moon v-if="isDark" />
      <carbon-sun v-else />
    </button>

    <a
      class="flex hover:text-orange-500"
      rel="noreferrer"
      href="https://github.com/choi-moeta/moe-todos"
      target="_blank"
      title="source on github"
    >
      <carbon-logo-github />
    </a>
  </nav>
</template>
