<script lang="ts" setup>
import { useRouter } from 'vue-router'
import { useLoggedIn } from '$/api'

const isLoggedIn = useLoggedIn()
const router = useRouter()
// waiting while supabase updates user
watch(isLoggedIn, val => val && router.push('/'), { immediate: true })
</script>

<template><div></div></template>
