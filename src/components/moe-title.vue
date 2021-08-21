<script setup lang="ts">
import type { PropType } from 'vue'

const props = defineProps({
  level: {
    type: Number as PropType<1 | 2 | 3 | 4 | 5 | 6>,
    default: 1,
  },
})

const el = computed(() => `h${props.level}`)
</script>

<template>
  <component :is="el" class="my-0 text-black dark:text-white">
    <slot></slot>
  </component>
</template>
