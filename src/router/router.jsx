import { createBrowserRouter } from "react-router";
//Rutas de mi app
import { Home } from "../app/home/home";
import { AboutMe } from "../app/about-me/about-me";
import { DashboardLayout } from "../common/layouts/dashboard-layout";
import { Todo } from "../app/todo/todo";
import { Completed } from "../app/todo/completed";
import { Priority } from "../app/todo/priority";
export const router = createBrowserRouter([
  {
    path: "/",
    Component: DashboardLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "about-me",
        Component: AboutMe,
      },
      {
        path: "todo",
        Component: Todo,
      },
      {
        path: "completed",
        Component: Completed,
      },
      {
        path: "priority",
        Component: Priority,
      },
    ],
  },
]);