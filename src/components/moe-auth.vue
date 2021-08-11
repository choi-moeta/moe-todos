<script setup lang="ts">
import { authDiscord } from '$/api'

function onAuthDiscord() {
  authDiscord()
}
</script>

<template>
  <button @click="onAuthDiscord">
    Auth with discord
  </button>
</template>
