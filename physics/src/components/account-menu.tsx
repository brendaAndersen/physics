import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@radix-ui/react-dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { Link } from "react-router-dom";

export function Account(){
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild className="text-[#319ed6]">
                <Button variant="outline" className="flex items-center gap-2 hover:text-[#319ed6]">
                    Menu
                    <ChevronDown className="h-4 w-4"/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="dark:bg-[#030712] w-56 rounded-md bg-white p-6 relative shadow-black shadow-md border border-text-[#319ed6]">
                <DropdownMenuLabel className="flex flex-col">
                    <span>Brenda Andersen</span>
                    <span className="text-xs font-normal text-muted-foreground">brenda_andersen@protonmail.com</span>
                </DropdownMenuLabel> 
                <DropdownMenuSeparator />
                <DropdownMenuItem className="flex flex-col-2 gap-2 items-end hover:text-[#70c3ec] pt-2">
                    <Building className="w-4 h-4 align-bottom" />
                    <span className="">Seu universo</span>
                </DropdownMenuItem>
                <Link to="/sign-in">
                    <DropdownMenuItem className="text-rose-500 dark:text-rose-400 flex flex-col-2 gap-2 items-end hover:text-rose-400 pt-2">
                        <LogOut className="h-4 w-4" />
                        <span className="">Sair</span>
                    </DropdownMenuItem>
                </Link>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}