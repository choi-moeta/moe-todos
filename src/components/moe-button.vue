<script setup lang="ts">
import { PropType } from 'vue'

defineProps({
  type: {
    type: String as PropType<'primary' | 'ghost'>,
    default: 'primary',
  },
})
</script>

<template>
  <button
    class="
      px-4 py-1.5
      lowercase
      rounded
    "
    :class="{
      'bg-orange-500 text-white hover:(bg-orange-400)': type == 'primary',
      'hover:bg-gray-100 dark:hover:bg-gray-800': type == 'ghost',
    }"
  >
    <slot />
  </button>
</template>
