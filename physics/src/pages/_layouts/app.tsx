import { Outlet } from "react-router-dom";
import { Header } from "../../components/header";

export function AppLayout() {
  return (
    <div className="flex min-h-screen w-screen flex-col antialiased text-slate-400">
      {/* bg-[#0f172a] */}
      <Header />

      <div className="flex flex-1 flex-col gap-4 p-8 pt-6">
        <Outlet />
      </div>
    </div>
  );
}
