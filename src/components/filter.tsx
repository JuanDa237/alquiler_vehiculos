import '../styles/filter.sass'

export function Filter() {
    return (
        <div className="filtro">
            <div className='container'>
                <p>City</p>
                <input type="text" value='Medellín' />
            </div>
            <div className='container'>
                <p>Search within</p>
                <select name="" id="">
                    <option value="200">200 miles</option>
                </select>
            </div>
            <div className='models'>
                <div>
                    <p>Models</p>
                    <span><input type="radio" /><label>Model S</label></span>
                    <span><input type="radio" /><label>Model SF</label></span>
                    <span><input type="radio" /><label>Model R</label></span>
                    <span><input type="radio" /><label>Model 3</label></span>
                </div>

                <div>
                    <p>Inventory type</p>
                    <span><input type="radio" /><label>New</label></span>
                    <span><input type="radio" /><label>Used</label></span>
                </div>
            </div>

            <div className='paint'>
                <p>Exterior paint</p>
                <div>
                    <div className='circle white' />
                    <div className='circle black' />
                    <div className='circle blue' />
                    <div className='circle red' />
                    <div className='circle gray' />
                </div>
            </div>

            <div className='paint'>
                <p>Interior color</p>
                <div className='circle black' />
            </div>

            <div className='wheels'>
                <p>Wheels</p>
                <span><input type="checkbox" /><label>18" wheels</label></span>
                <span><input type="checkbox" /><label>19" wheels</label></span>
                <span><input type="checkbox" /><label>20" wheels</label></span>
            </div>
        </div>
    )
}