import '../styles/inventario.sass'
import { Filter } from '../components/filter'
import { VehiclesList } from '../components/VehiclesList'

export function Inventario() {
    return (
        <div>
            <div className='header-container'>
                <h1>Inventario</h1>
                <div>
                    <label>Fecha de reserva: </label><input type="date" value="16-10-2022" />
                </div>
            </div>
            <div className="alquiler">
                <Filter></Filter>
                <VehiclesList></VehiclesList>
            </div>
        </div>
    )
}