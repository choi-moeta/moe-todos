<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { logOut, useLoggedIn } from '$/api'

const isLoggedIn = useLoggedIn()
const router = useRouter()
const route = useRoute()

async function onLogOut() {
  await logOut()
  router.push('/auth')
}

const showLogIn = computed(() => {
  if (route.name == undefined || route.name == 'auth')
    return false
  return true
})
</script>

<template>
  <div>
    <template v-if="isLoggedIn">
      <button class="font-semibold cursor-pointer hover:text-orange-500" @click="onLogOut">
        выйти
      </button>
    </template>
    <template v-else-if="showLogIn">
      <a href="/auth" class="font-semibold cursor-pointer hover:text-orange-500">
        войти
      </a>
    </template>
  </div>
</template>
