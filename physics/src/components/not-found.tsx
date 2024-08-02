import { Link } from "react-router-dom";

export function NotFound(){
    return (
    // <div className="flex items-center justify-center h-96 text-lg gap-4">
    // {/* <div className="grid place-items-center h-72"> */}
    //     <img src="../public/images/not-found.png" className="w-20 h-20 animate-bounce ease-in transition  delay-1000" alt="" />
    //     <p>Not Found - 404</p>
    // </div>
    <div className="flex h-screen flex-col items-center justify-center gap-5">
        <h1 className="text-4xl font-bold">Not Found - 404</h1>
        <p className="text-accent-foreground font-medium">
            Voltar para <Link to="/">
            <b className="text-[#319ed6] underline">
                Dashboard
            </b>
            </Link>
        </p>
        <img src="../public/images/not-found.png" className="w-20 h-20 animate-bounce ease-in transition  delay-1000" alt="" />
    </div>
    )
}