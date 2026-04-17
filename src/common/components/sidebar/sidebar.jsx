import { Link } from "react-router";
import homeIcon  from '../../../assets/home_FFFFFF.svg';
import todoListIcon from '../../../assets/todo-list_FFFFFF.svg';
import personIcon from '../../../assets/person_FFFFFF.svg';
export function Sidebar() {
  return (
    <aside className="w-full lg:w-80 lg:min-h-screen bg-sky-950/85 backdrop-blur-xl border-sky-800/40 border-b lg:border-r lg:border-b-0">
      <div className="flex h-full flex-col px-5 py-6 lg:px-6">
        <div className="mt-8">
          <h2 className="text-xs font-semibold uppercase text-slate-500">
            Navigation
          </h2>

          <nav className="mt-4 flex flex-col gap-4">

            <Link className="flex items-center gap-2" to="/">
              Home
              <img src={homeIcon} className="size-7" />
            </Link>

            <Link className="flex items-center gap-2" to="about-me">
              About Me
              <img src={personIcon} className="size-7" />
            </Link>

            <h2 className="text-xs font-semibold uppercase text-slate-500 mt-2">
              Todo-Module
            </h2>

            <div className="flex flex-col gap-3 pl-4">
              <Link className="flex items-center gap-2" to="todo">
                Todo
                <img src={todoListIcon} className="size-7 " />
              </Link>
              <Link  to="priority">
                Priority
              </Link>
              <Link  to="completed">
                Completed
              </Link>
            </div>

          </nav>
        </div>
      </div>
    </aside>
  );
}