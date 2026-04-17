import { useState } from "react";

export const useTodo = () => {
  const [todos, setTodos] = useState([]);

  // Agrega una nueva tarea
  const addTodo = (title, category, priority) => {
    const newTodo = {
      id: Date.now(),
      title,
      category,
      priority,
      completed: false
    };
    setTodos([...todos, newTodo]);
  };

  // Elimina una tarea por su id
  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  // Completa o descompleta una tarea
  const toggleTodo = (id) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  // Edita el título de una tarea
  const editTodo = (id, newTitle) => {
    setTodos(todos.map((todo) =>
      todo.id === id ? { ...todo, title: newTitle } : todo
    ));
  };

  return { todos, addTodo, deleteTodo, toggleTodo, editTodo };
};