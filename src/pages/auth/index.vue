<script setup lang="ts">
import { useRouter } from 'vue-router'
import { isLoggedIn } from '$/api'

const router = useRouter()
if (isLoggedIn())
  router.push('/')
</script>

<template>
  <moe-auth></moe-auth>
</template>
