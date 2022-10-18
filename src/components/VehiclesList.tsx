import '../styles/vehiclesList.sass'
import { VehicleComponent } from './vehicle'

export interface IVehicle{
    id: string
    brand: string
    model: string
    price: number
    kilometers: number
    color: string
    speed: number
    time: number
    epa: number
    images: string[]
    features: string[]
    avalaibleOn: string
}

const vehicles: IVehicle[] = [
    {
        id: '1',
        brand: 'Tesla',
        model: '2022 modelo S',
        price: 970000,
        kilometers: 6000,
        speed: 270,
        time: 5.8,
        color: 'red',
        epa: 268,
        avalaibleOn: 'Medellín, Antioquia',
        images: ['https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=m3&options=$APF2,$APBS,$DV2W,$IBW1,$PPMR,$PRM30,$SC04,$MDL3,$W40B,$MT322,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&'],
        features: [
            'Red multi-coat paint',
            '18" Aero wheels',
            'black and white partial premium interior',
            'Front and Rear heated Seats'
        ]
    },
    {
        id: '1',
        brand: 'Tesla',
        model: '2022 modelo sf',
        price: 970000,
        kilometers: 6000,
        speed: 270,
        time: 5.8,
        color: 'white',
        epa: 297,
        avalaibleOn: 'Barranquilla',
        images: ['https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=m3&options=$APF2,$APBS,$DV2W,$IBW1,$PPMR,$PRM30,$SC04,$MDL3,$W40B,$MT322,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&'],
        features: [
            'Red multi-coat paint',
            '18" Aero wheels',
            'black and white partial premium interior',
            'Front and Rear heated Seats'
        ]
    },
    {
        id: '1',
        brand: 'Tesla',
        model: '2022 modelo 3',
        price: 970000,
        kilometers: 6000,
        speed: 270,
        time: 5.8,
        epa: 305,
        color: 'yellow',
        avalaibleOn: 'Cali',
        images: ['https://static-assets.tesla.com/configurator/compositor?&bkba_opt=2&view=STUD_3QTR&size=1400&model=m3&options=$APF2,$APBS,$DV2W,$IBW1,$PPMR,$PRM30,$SC04,$MDL3,$W40B,$MT322,$CPF0,$RSF1,$CW03&crop=1400,850,300,130&'],
        features: [
            'Red multi-coat paint',
            '18" Aero wheels',
            'black and white partial premium interior',
            'Front and Rear heated Seats'
        ]
    }
]

export function VehiclesList(){
    
    const vehiclesComponents = vehicles.map(element => {
        return <VehicleComponent  vehicle={element}></VehicleComponent>
    })

    return (
        <div className="vehicles-list">
            {vehiclesComponents}
        </div>
    )


}