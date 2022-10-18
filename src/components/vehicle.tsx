import { IVehicle } from "./VehiclesList";
import '../styles/vehicle.sass'
import { Link } from 'react-router-dom'

interface Props {
    vehicle: IVehicle
}

export function VehicleComponent(props: Props) {
    const { vehicle } = props;
    const features = vehicle.features.map(element => {
        return <p>{element}</p>
    })
    return (
        <div className="vehicle">
            <div className="vehicle-header">
                <p className="model">{vehicle.model}</p>
                <p className="price">${vehicle.price}</p>
                <p>Avalaible for delivery in {vehicle.avalaibleOn}</p>
            </div>
            <div className="vehicle-image">
                <img src={vehicle.images[0]} alt="" />
            </div>
            <div className="vehicle-features">
                <button><Link className="link" to='/detail'>View Details</Link></button>
                <div className="speed-details">
                    <p><b>{vehicle.time}</b>s<br/>0-60 mph</p>
                    <span></span>
                    <p><b>{vehicle.speed}</b>mph <br/> Top speed</p>
                    <span></span>
                    <p><b>{vehicle.epa}</b>mi<br/>range (EPA est.)</p>
                </div>
                <div className="features">
                    {features}
                </div>
            </div>
        </div>
    );
}