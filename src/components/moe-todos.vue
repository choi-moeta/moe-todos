<script setup lang="ts">import { useAsyncState } from '@vueuse/core'
import {
  createTodo,
  fetchTodos,
  updateTodoStatus,
  TodoStatus,
  Todo,
} from '$/api'

const todos = ref<Todo[] | null>(null)
const isLoading = ref(true)

onMounted(async() => {
  todos.value = await fetchTodos()
  isLoading.value = false
})

async function onChangeStatus(id: string, status: TodoStatus) {
  await updateTodoStatus(id, status)
  todos.value = await fetchTodos()
}

async function onCreate(text: string) {
  await createTodo(text)
  todos.value = await fetchTodos()
}

const filteredTodos = computed(() => {
  if (!todos.value) return []

  const openTodos = todos.value
    .filter(el => el.status === 'open')
    .sort((a, b) => Number(new Date(a.createTime)) - Number(new Date(b.createTime)))

  const doneTodos = todos.value
    .filter(el => el.status !== 'open')
    .sort((a, b) => Number(new Date(a.endTime)) - Number(new Date(b.endTime)))
    .reverse()

  return [...openTodos, ...doneTodos]
})
</script>

<template>
  <div class="flex flex-col gap-2">
    <template v-if="!isLoading">
      <template v-for="todo of filteredTodos" :key="todo.id">
        <moe-todo
          v-bind="todo"
          @change-status="onChangeStatus(todo.id, $event)"
        ></moe-todo>
      </template>
      <moe-todo-create @create="onCreate" />
    </template>
    <template v-else>
      loading hehe.
    </template>
  </div>
</template>
