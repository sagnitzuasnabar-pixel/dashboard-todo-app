import { createHashRouter } from "react-router";
//Rutas de mi app
import { Home } from "../app/home/home";
import { AboutMe } from "../app/about-me/about-me";
import { DashboardLayout } from "../common/layouts/dashboard-layout";
import { Todo } from "../app/todo/todo";
import { Completed } from "../app/todo/completed";
import { Priority } from "../app/todo/priority";

export const router = createHashRouter([
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
        path: "todo/completed",
        Component: Completed,
      },
      {
        path: "todo/priority",
        Component: Priority,
      },
    ],
  },
]);