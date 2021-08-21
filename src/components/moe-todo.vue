<script setup lang="ts">
import type { PropType } from 'vue'
import type { TodoStatus } from '$/api'

const props = defineProps({
  status: {
    type: String as PropType<TodoStatus>,
    default: 'open',
  },
  text: {
    type: String,
    default: 'hehe mpty',
  },
})

const emit = defineEmits<{
  (event: 'change-status', status: TodoStatus): void
}>()

function onChange(status: TodoStatus) {
  emit('change-status', status)
}

</script>

<template>
  <div class="flex gap-2">
    <moe-checkbox
      class="flex-shrink-0 mt-1.25"
      :status="status"
      @change="onChange"
    ></moe-checkbox>
    <moe-text>
      {{ text }}
    </moe-text>
  </div>
</template>
