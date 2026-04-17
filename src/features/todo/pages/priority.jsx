import { useTodoContext } from "../context/todo-context"
import { TodoList } from "../components/todo/todo-list"

export function PriorityPage() {
  const { todos, deleteTodo, toggleTodo } = useTodoContext()
  
  const highPriorityTodos = todos.filter((todo) => todo.priority === "high")

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold text-white">Priority</h1>
      <TodoList
        todos={highPriorityTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
    </div>
  )
}