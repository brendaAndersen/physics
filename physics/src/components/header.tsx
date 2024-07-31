import { Atom } from "lucide-react";
import { Link } from "react-router-dom";

export function Header () {
    return (
        <div className="flex flex-rows gap-5 h-16 w-full border-b p-6 text-[#319ed6]">
            <Link className="" to="/">
                <Atom className="h-5 w-5" />
            </Link>
            <span className="font-semibold">science.physis</span>
        </div>
    )
}