import { Outlet } from "react-router";
import {Sidebar} from "../components/sidebar/sidebar";

export function DashboardLayout() {
  return (
    <div className="min-h-screen bg-sky-950 text-slate-100 overflow-x-hidden">
      <div className="flex min-h-screen flex-col lg:flex-row">
        <Sidebar />

        <main className="flex-1">
          <div className="mx-auto flex min-h-screen w-full max-w-7xl flex-col p-4 lg:p-8">
            <section className="mt-6 flex-1 rounded-2xl border border-slate-900/40 bg-sky-900/60 p-4 shadow-2xl shadow-slate-950/30 sm:p-6 lg:p-8">
              <Outlet />
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}