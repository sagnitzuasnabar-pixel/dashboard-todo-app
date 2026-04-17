import { useState } from "react"
import { useTodoContext } from "../context/todo-context"
import { TodoInput } from "../components/todo/todo-input"
import { TodoList } from "../components/todo/todo-list"

export const TodoPage = () => {
  const { todos, addTodo, deleteTodo, toggleTodo } = useTodoContext()
  const [filter, setFilter] = useState("todo")

  const getFilteredTodos = () => {
    if (filter === "completed") return todos.filter((todo) => todo.completed)
    if (filter === "priority") return todos.filter((todo) => todo.priority === "high")
    return todos
  }

    return (
        <div className="flex flex-col gap-6 p-6">
        
          <div className="flex flex-col gap-2">
            <h1 className="text-2xl font-bold text-white">My Todo App</h1>
            <p className="text-slate-400 text-sm">
            {todos.filter(todo => todo.completed).length} completed • {todos.length} total tasks
            </p>
          </div>

          <div className="max-w-190">
            <TodoInput onAdd={addTodo} />
          </div>
          
          <TodoList
            todos={getFilteredTodos()}
            onDelete={deleteTodo}
            onToggle={toggleTodo}
          />

        </div>
    )

}