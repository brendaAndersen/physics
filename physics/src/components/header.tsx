import { Atom } from "lucide-react";
import { Link } from "react-router-dom";
import { Account } from "./account-menu";

export function Header () {
    return (
        <div className="border-b">
            <div className="flex flex-rows gap-5 h-16 w-full border-b p-6 text-[#319ed6]">
                <Link className="" to="/">
                    <Atom className="h-5 w-5 text-[#319ed6]" />
                </Link>
                <span className="font-semibold text-[#319ed6]">science.physis</span>
                <div className="ml-auto flex items-center gap-2">
                    <Account />
                </div>
            </div>
        </div>
    )
}