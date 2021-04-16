import React from 'react'
// Import redux
import { useDispatch, useSelector} from 'react-redux';
import { toggleAction, valueAction } from '../action/action';   

export default function Booking() {

    // redux useSelector
    const toggleReducer = useSelector(state => state.toggleReducer);
    const valueReducer = useSelector(state => state.valueReducer);
    
    // redux dispatch
    const dispatch = useDispatch();
    
    // functioner dispatch
    function handleToggleChange() {dispatch(toggleAction(!toggleReducer))};
    function handleValueChange(e) {dispatch(valueAction(e.target.value))};
    
    // This variabel to help for the intervall input
    let monthPrice = valueReducer.substring(0,2);
    parseInt(monthPrice++);

    // Set defaultValue to input type=date
    let today = new Date(Date.now());
    let todayFormated = today.toISOString().split('T')[0];

    return (
    <div className="cover">

        <form className="bookingWrapper">
            <p 
            onClick={handleToggleChange} 
            className="bookingClose">x</p>

            <h2 className="bookingH2">BOKA FÖRRÅD</h2>    

            <span className="bookingSquareM">
                <select onChange={handleValueChange}>
                    <option defaultValue={valueReducer}>{valueReducer}*</option>
                    <option value="4 m2 från 499kr/månad">4 m2 från 499kr/månad*</option>
                    <option value="5 m2 från 599kr/månad">5 m2 från 599kr/månad*</option>
                    <option value="6 m2 från 699kr/månad">6 m2 från 699kr/månad*</option>
                    <option value="7 m2 från 799kr/månad">7 m2 från 799kr/månad*</option>
                    <option value="8 m2 från 899kr/månad">8 m2 från 899kr/månad*</option>
                    <option value="10 m2 från 1099kr/månad">10 m2 från 1099kr/månad*</option>
                    <option value="11 m2 från 1199kr/månad">11 m2 från 1199kr/månad*</option>
                    <option value="12 m2 från 1299kr/månad">12 m2 från 1299kr/månad*</option>
                </select>
            </span>

            <span className='bookingIntervall'>
                <select>
                    <option>Intervall:*</option>
                    <option value={`Månadsvis ${monthPrice}99kr/månad`}>Månadsvis {monthPrice}99kr/månad*</option>
                    <option value={`Månadsvis ${monthPrice}kr/månad`}>3 månader: {monthPrice}59kr/månad*</option>
                    <option value={`Månadsvis ${monthPrice--}kr/månad`}>6 månader - tillsvidare: {monthPrice}99kr/månad*</option>
                </select>
            </span>

            <label className="bookingStartDate">
                Önskat Startdatum:
                <input 
                    type='date'
                    defaultValue={todayFormated}
                    >
                </input>
            </label>

            <textarea 
                className="bookingMessage"
                type='text' 
                placeholder="Meddelande*">
            </textarea>

            <button type='button' className="btn">SKICKA FÖRFRÅGAN</button>
        </form>
    </div>
    )
}
