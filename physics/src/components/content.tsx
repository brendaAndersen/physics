import { Link } from "react-router-dom"
import { titles } from "./card-styled.tsx"

const mechanicsDescriptions = [
    "A mecânica clássica é uma parte da física que estuda o movimento dos corpos no universo, abrangendo tudo que conhecemos. Podemos dividí-la em:",
    "Cinemática","Dinâmica", "Estática"
]

export function Content(){
    return (
        <>
         <div className="p-5 gap-4 grid">
            <p className="font-medium text-justify">
                {mechanicsDescriptions[0]}
            </p>
            <div className="grid grid-cols-3 text-center">
                {
                    titles.map((title) => {
                        return <>
                        <Link className="underline hover:no-underline underline-offset-4 hover:bg-[#319ed6] hover:text-slate-800 rounded-sm" to={title.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase()}>
                            {mechanicsDescriptions[1]}
                        </Link>
                        <Link className="underline hover:no-underline underline-offset-4 hover:bg-[#319ed6] hover:text-slate-800 rounded-sm" to={title.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase()}>
                            {mechanicsDescriptions[2]}    
                        </Link>
                        <Link className="underline hover:no-underline underline-offset-4 hover:bg-[#319ed6] hover:text-slate-800 rounded-sm" to={title.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase()}>
                            {mechanicsDescriptions[3]}
                        </Link>
                        </>
                    })
                }
            </div>
        </div>
        </>
    )
}