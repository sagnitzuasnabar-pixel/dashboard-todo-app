// src/features/todo/context/todo-context.jsx

import { createContext, useContext } from "react"
import { useTodo } from "../hooks/useTodo"

const TodoContext = createContext()

export const TodoProvider = ({ children }) => {
  const todo = useTodo()

  return (
    <TodoContext.Provider value={todo}>
      {children}
    </TodoContext.Provider>
  )
}

export const useTodoContext = () => {
	return useContext(TodoContext)
}    