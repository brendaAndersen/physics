import { Outlet } from "react-router-dom";
import { Atom } from "lucide-react";

export function AuthLayout() {
  return (
    <div className="grid min-h-screen grid-cols-2">
      <div className="border-foreground/5 bg-muted text-muted text-muted-foreground flex h-full flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg font-medium">
          <Atom className="h-5 w-5" />
          <span className="font-semibold">science.physics</span>
        </div>
        <footer className="text-sm">
          Physics &copy; science.physics - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
    </div>
  );
}
