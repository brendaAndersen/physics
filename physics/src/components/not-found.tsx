export function NotFound(){
    return (
    <div className="flex items-center justify-center h-96 text-lg gap-4">
    {/* <div className="grid place-items-center h-72"> */}
        <img src="../public/images/not-found.png" className="w-20 h-20 animate-bounce ease-[cubic-bezier(0.95,0.05,0.795,0.035)] transition  delay-1000" alt="" />
        <p>Not Found - 404</p>
    </div>)
}