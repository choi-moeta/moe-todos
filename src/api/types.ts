
export type Provider = 'discord' | 'github'

export type TodoStatus = 'open' | 'done' | 'drop'

export type Todo = {
  id: string
  status: TodoStatus
  text: string
  createTime: string
  endTime: string
}
