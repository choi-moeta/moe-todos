<script setup lang="ts">
</script>

<template>
  <div class=" mt-24">
    <moe-title>Вход ✌️</moe-title>
    <moe-text class="mt-2">
      Выбери один из сервисов. 🤙🤙
    </moe-text>
    <div class="mt-4 flex flex-col sm:flex-row gap-3">
      <moe-button-auth provider="discord" class="w-full" />
      <moe-button-auth provider="github" class="w-full" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  onlyGuest: true
</route>
