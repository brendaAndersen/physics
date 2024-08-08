import { Helmet } from "react-helmet-async";

export function Mechanics () {
    return (
        <>
          <Helmet title="Mecânica" />

            <div className="flex relative blur-sm bg-slate-950 bg-scroll bg-center bg-cover bg-mechanics items-center justify-center h-[700px]">
            </div>
            <h1 id="title" className="absolute flex items-center justify-center top-[200px] left-[500px] text-[4rem] text-teal-300 font-bold">Mecânica</h1>
       
            <div>
                <h1 
                    id="title"
                    className="flex px-20 text-[2rem] text-teal-300 font-bold pt-5"
                >
                    Cinemática
                </h1>
                <p className="p-20 font-medium text-justify">
                    As grandezas fundamentais do SI (sistema Internacional) são uma forma de padronizar as unidades, visto que a falta deste padrão pode ocasionar diversos problemas. Um exemplo famoso é o do Planador de Gimli que, em 1983, um voo da companhia Air Canada ficou sem combustível quando voava sobre o povoado de Gimli, visto que o Canadá havia adotado o sistema métrico decimal em 1970, e o avião havia sido o primeiro da empresa a usar as medidas métricas. O indicador de combustível a bordo do avião não estava funcionando, por isso a tripulação usou um tubo para medir quanto combustível estavam colocando durante o reabastecimento.
                    O procedimento deu errado quando as medidas de volume foram convertidas em medidas de peso e houve uma confusão entre libras e quilos. O avião acabou decolando com a metade da quantidade de combustível que deveria ter.
                </p>
            </div>
        </>
    )
}