import { Outlet } from "react-router-dom";
import { Atom } from "lucide-react";

export function AuthLayout() {
    
  return (
    <div className="grid min-h-screen grid-cols-2 text-[#319ed6] antialiased">
      <div className="border-foreground/5 bg-[#0f172a] text-muted-foreground flex h-full flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center gap-3 text-lg font-medium">
          <Atom className="h-5 w-5" />
          <span className="font-semibold">science.physis</span>
        </div>
        
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
        <footer className="text-sm">
          physis &copy; science.physis - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="relative flex flex-col items-center justify-center bg-backgroundImage">
      </div>
    </div>
  );
}
