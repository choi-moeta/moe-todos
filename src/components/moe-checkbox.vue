<script setup lang="ts">
import type { PropType } from 'vue'
import type { TodoStatus } from '$/api'

const props = defineProps({
  status: {
    type: String as PropType<TodoStatus>,
    default: 'open',
  },
})

const emit = defineEmits<{
  (event: 'change', status: TodoStatus): void
}>()

function onLeftClick() {
  if (props.status !== 'done')
    emit('change', 'done')
  else
    emit('change', 'open')
}

function onMiddleClick() {
  if (props.status !== 'drop')
    emit('change', 'drop')
}
</script>

<template>
  <div
    class="
      group
      w-5 h-5
      border-2
      rounded
      cursor-pointer
      flex gap-4 items-center justify-center
  "
    :class="{
      'border-gray-500 border-opacity-75': status === 'open',
      'text-green-500 border-green-500 border-opacity-50': status === 'done',
      'text-red-500 border-red-500 border-opacity-50': status === 'drop',
    }"
    @click.left="onLeftClick"
    @click.middle="onMiddleClick"
  >
    <template v-if="status === 'done' || status === 'open'">
      <carbon:checkmark
        class="group-hover:(block) absolute ml-0.5 w-5 h-5"
        :class="{
          'hidden': status === 'open'
        }"
      />
    </template>
    <template v-if="status === 'drop'">
      <carbon:close class="absolute w-5 h-5" />
    </template>
  </div>
</template>
