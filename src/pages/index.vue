<script setup lang="ts">
</script>

<template>
  <div class="w-full flex justify-center">
    <div class="w-full max-w-screen-sm">
      <moe-title>
        задачи
      </moe-title>
      <moe-todos class="w-full text-lg mt-4" />
    </div>
  </div>
</template>

<route lang="yaml">
meta:
  onlyUser: true
</route>
