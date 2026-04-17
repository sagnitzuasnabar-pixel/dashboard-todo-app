import { useTodoContext } from "../context/todo-context"
import { TodoList } from "../components/todo/todo-list"

export function CompletedPage() {
  const { todos, deleteTodo, toggleTodo } = useTodoContext()
  
  const completedTodos = todos.filter((todo) => todo.completed)

  return (
    <div className="flex flex-col gap-6 p-6">
      <h1 className="text-2xl font-bold text-white">Completed</h1>
      <TodoList
        todos={completedTodos}
        onDelete={deleteTodo}
        onToggle={toggleTodo}
      />
    </div>
  )
}