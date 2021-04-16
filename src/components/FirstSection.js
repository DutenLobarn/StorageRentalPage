import React from 'react'
// Import images
import Small from "../img/liten.png";
import Medium from "../img/mellan.png";
import Big from "../img/stor.png";

// Import redux
import { useDispatch, useSelector} from 'react-redux';
import { toggleAction, valueAction } from '../action/action';       

export default function FirstSection() {

    // redux useSelector
    const toggleReducer = useSelector(state => state.toggleReducer);

    // redux dispatch
    const dispatch = useDispatch();

    // functioner dispatch
    function handleToggleChange(e) {
        dispatch(toggleAction(!toggleReducer))
        dispatch(valueAction(e.target.value))
    }; 
    
    return (
        <section className="firstSectionWrapper">
            
            <div className="firstSectionContainer">
                <h3 className="firstSectionH3">Liten</h3>
                <img className="firstSectionImgSmall" src={Small} alt="smallstorage"/>
                <p className="firstSectionP">4 m2 från 499kr/månad</p>
                <button onClick={handleToggleChange} value="4 m2 från 499kr/månad" className="btn2">Boka Förråd</button>
            </div>
            <div className="firstSectionContainer">
                <h3 className="firstSectionH3">Medium</h3>
                <img className="firstSectionImgMedium" src={Medium} alt="mediumstorage"/>
                <p className="firstSectionP">8 m2 från 899kr/månad</p>
                <button onClick={handleToggleChange} value="8 m2 från 899kr/månad" className="btn2">Boka Förråd</button>
            </div>
            <div className="firstSectionContainer">
                <h3 className="firstSectionH3">Stor</h3>
                <img className="firstSectionImgBig" src={Big} alt="storstorage"/>
                <p className="firstSectionP">12 m2 från 1299kr/månad</p>
                <button onClick={handleToggleChange} value="12 m2 från 1299kr/månad" className="btn2">Boka Förråd</button>
            </div>
            
        </section>
    )
}
