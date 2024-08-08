import { Outlet } from "react-router-dom";
import { Atom } from "lucide-react";

export function AuthLayout() {
    
  return (
    <div className="grid small:grid-rows min-h-screen lg:grid-cols-2 text-[#319ed6] antialiased">
      <div className="border-foreground/5 bg-[#0f172a] text-muted-foreground flex h-screen flex-col justify-between border-r p-10">
        <div className="text-foreground flex items-center lg:w-40 small:w-32 gap-3 text-lg font-medium">
          <Atom className="h-5 lg:w-5 text-[#319ed6]" />
          <span className="small:text-sm md:text-base lg:text-base lg:font-semibold text-[#319ed6]">science.physis</span>
        </div>
        
      <div className="relative flex flex-col items-center justify-center">
        <Outlet />
      </div>
        <footer className="lg:text-sm md:text-sm small:text-xs">
          physis &copy; science.physis - {new Date().getFullYear()}
        </footer>
      </div>
      <div className="lg:visible tablet:visible md:visible small:invisible relative flex flex-col items-center justify-center bg-no-repeat bg-backgroundImage">
      </div>
    </div>
  );
}
