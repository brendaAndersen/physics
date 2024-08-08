import { Hammer } from "lucide-react"

export function WaveMotion(){
    return <div className="flex items-center justify-center h-screen gap-5">
        <Hammer  />
        <h1>Em desenvolvimento</h1> 
    </div>
}
export function ContentWaveMotion(){
    return <div className="flex flex-row gap-5">
        <div className="w-5 h-5">
            <Hammer  />
        </div>
        <h1>Em desenvolvimento</h1> 
    </div>
}
