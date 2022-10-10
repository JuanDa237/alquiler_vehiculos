import '../styles/vehiclesList.sass'

export interface vehicle{
    id: string
    name: string
    model: number
    price: number
}

export function VehiclesList(){
    const vehicles = [

    ]
    return (
        <div className="vehicles-list">
            Lista
        </div>
    )
}