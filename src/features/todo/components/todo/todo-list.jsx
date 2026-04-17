// src/features/todo/components/todo-list/todo-list.jsx

import { TodoItem } from "../todo/todo-item"

export const TodoList = ({ todos, onDelete, onToggle }) => {

  // Si no hay tareas muestra un mensaje
  if (todos.length === 0) {
    return(
      <div className=" rounded-xl  min-h-100 flex flex-col gap-3 justify-center items-center">
        
        <p className="text-white text-xl "> No tasks found ;)</p>
        <p className="text-white ">Add your first task to get started!</p>
      </div>
      
    ) 
      
  }

  return (
    <div className="flex flex-col gap-2">
      {/* Recorre el array y renderiza un TodoItem por cada tarea */}
      {todos.map((todos) => (
        <TodoItem
          key={todos.id}
          todo={todos}
          onDelete={onDelete}
          onToggle={onToggle}

        />
      ))}
    </div>
  )
}