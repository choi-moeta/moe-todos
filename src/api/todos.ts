import { supabase } from './supabase'
import { getUser } from './auth'
import type { Todo, TodoStatus } from '$/api/types'

const TodosTable = import.meta.env.VITE_SUPABASE_TABLE_NAME as string

export async function fetchTodos() {
  const user = getUser()

  if (user) {
    const { data } = await supabase
      .from<Todo>(TodosTable)
      .select('*')
      .match({ userId: user.id })
    return data
  }

  return null
}

export async function createTodo(text: string) {
  const user = getUser()

  if (user) {
    const { data } = await supabase
      .from(TodosTable)
      .insert([{ userId: user.id, text }])
    return data
  }

  return null
}

export async function updateTodoStatus(id: string, status: TodoStatus) {
  const user = getUser()

  if (user) {
    const { data } = await supabase
      .from<Todo>(TodosTable)
      .update({ status })
      .match({ userId: user.id, id })
    return data
  }

  return null
}
