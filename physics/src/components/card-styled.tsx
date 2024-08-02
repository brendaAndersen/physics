import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";

// type CardStyledProps = {
//     titles: string[],
//     descriptions: string[]
// }
const titles = ["Mecânica", "Termologia", "Ondulatória", "Óptica", "Eletromagnetismo", "Física Moderna"];
const descriptions = ["A Mecânica Clássica se refere às três principais formulações da mecânica pré-relativística: a mecânica newtoniana, mecânica lagrangeana e a mecânica hamiltoniana. Estuda o movimento, as variações de energia e as forças que a tuam sobre um corpo.", 
  "Área da Física que estuda diversos fenômenos e sistemas físicos complexos em que podem ocorrer trocas de calor, transformações de energia e variações de temperatura.",
  "Ramo da Física que tem como objeto de estudo as ondas e oscilações. A ondulatória classifica as ondas segundo a natureza, direção e dimensão de propagação. A ondulatória estuda os diferentes tipos de ondas, como as ondas sonoras, as luminosas e as ondas na água.",
  "Área da física que busca compreender um grande número de fenômenos relacionados à luz. Em vista disso, ela pode ser compreendida como um caso particular da ondulatória, que estuda o comportamento das ondas de todo o espectro eletromagnético e não somente da luz visível.",
  "A eletricidade é a parte da Física que estuda fenômenos associados às cargas elétricas. Os estudos na área são divididos em: eletrostática, eletrodinâmica e eletromagnetismo",
  "Física Moderna é a denominação dada ao conjunto de teorias surgidas no começo do século XX, principiando com a Mecânica Quântica e a Teoria da Relatividade e as alterações no entendimento científico daí decorrente."
]

export const CardStyled = () => {
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 desktop:grid-cols-3 gap-6 cursor-pointer">
            { titles.map((title, index) => {
                return (
                    <Link to={title.normalize("NFD").replace(/[^a-zA-Z\s]/g, "").toLowerCase()}>
                        <Card key={index} className="absolutetransform small:h-[350px] small:w-[300px] rounded-xl shadow-xl transition duration-300 hover:scale-105
                        border-[#319ed6]  text-slate-500 w-[500px] lg:h-[330px] lg:w-[300px] md:h-min-[600px] text-justify">
                            <CardHeader className="">
                                <CardTitle className="text-[#319ed6]">{title}</CardTitle>
                            </CardHeader>
                            <CardContent>
                                {descriptions[index]}
                            </CardContent>
                        </Card>
                    </Link>
                )})
            }
        </div>
    )
}