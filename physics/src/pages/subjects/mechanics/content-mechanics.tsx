import { Link } from "react-router-dom"
import { titles } from "../../../components/card-styled"

export function ContentMechanics(){
    return (
        <>
        <div className="p-5 gap-4 grid">
           <p className="font-medium text-justify">
                A mecânica clássica é uma parte da física que estuda o movimento dos corpos no universo, abrangendo tudo que conhecemos. Podemos dividí-la em:
           </p>
           <div className="grid grid-cols-3 text-center">
                <Link className="underline hover:no-underline underline-offset-4 hover:bg-[#319ed6] hover:text-slate-800 rounded-sm" to={titles[0].normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase()}>
                    Cinemática
                </Link>
                <Link className="underline hover:no-underline underline-offset-4 hover:bg-[#319ed6] hover:text-slate-800 rounded-sm" to={titles[0].normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase()}>
                    Dinâmica   
                </Link>
                <Link className="underline hover:no-underline underline-offset-4 hover:bg-[#319ed6] hover:text-slate-800 rounded-sm" to={titles[0].normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase()}>
                    Estática
                </Link>
           </div>
       </div>
       </>
    )
}