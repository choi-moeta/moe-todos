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

const innerStatus = ref(props.status)
watch(() => props.status, status => innerStatus.value = status)

const statuses: TodoStatus[] = ['open', 'done', 'drop']
let timer: NodeJS.Timeout
let clicks = 0
const delay = 500
function onLeftClick() {
  clicks++

  clearTimeout(timer)
  timer = setTimeout(() => {
    emit('change', statuses[(statuses.indexOf(props.status) + clicks) % statuses.length])
    clicks = 0
  }, delay)

  // update locally
  innerStatus.value = statuses[(statuses.indexOf(innerStatus.value) + 1) % statuses.length]
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
      'border-gray-500 border-opacity-75': innerStatus === 'open',
      'text-green-500 border-green-500 border-opacity-50': innerStatus === 'done',
      'text-red-500 border-red-500 border-opacity-50': innerStatus === 'drop',
    }"
    @click.left="onLeftClick"
  >
    <template v-if="innerStatus === 'done' || innerStatus === 'open'">
      <carbon:checkmark
        class="group-hover:(block) absolute ml-0.5 w-5 h-5"
        :class="{
          'hidden': innerStatus === 'open'
        }"
      />
    </template>
    <template v-if="innerStatus === 'drop'">
      <carbon:close class="absolute w-5 h-5" />
    </template>
  </div>
</template>
