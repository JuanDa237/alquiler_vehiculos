import '../styles/inventario.sass'
import { Filter } from '../components/filter'
import { VehiclesList } from '../components/VehiclesList'

export function Inventario() {
    return (
        <div>
            <div>
                <h1>Inventario</h1>
                <select>
                    <option value="">Precio: menor a mayor</option>
                    <option value="">Precio: mayor a menor</option>
                    <option value="">Kilometraje: mayor a menor</option>
                    <option value="">Kilometraje: menor a mayor</option>
                    <option value="">Año: mayor a menor</option>
                    <option value="">Año: menor a mayor</option>
                    <option value="">Distance: más cercana</option>
                </select>
            </div>
            <div className="alquiler">
                <Filter></Filter>
                <VehiclesList></VehiclesList>
            </div>
        </div>
    )
}