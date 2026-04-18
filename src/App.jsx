//Inicialización de mi App

import { RouterProvider } from "react-router/dom"; 
import { router } from './router/router';
import { TodoProvider } from "./features/todo/context/todo-context";
import { UserProvider } from "./common/components/context/user-context";

export function App() {
  return (
    <UserProvider>
      <TodoProvider>
        <RouterProvider router={router} />
      </TodoProvider>      
    </UserProvider>
  );
}


