import React from 'react'
import Medium from "../img/mellan.png";

// Import redux
import { useDispatch, useSelector} from 'react-redux';
import { toggleAction, valueAction } from '../action/action';


export default function MediumSection() {

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
        <section className="mediumSectionWrapper">

            <div className="mediumSectionContainer">
                {/* bild beroende storlek på förråd, small-medium-big */}
                <img className="mediumSectionImgSide" src={Medium} alt="mediumstorage"/>
            {/* texten ska sättas beroende vilket storlek på förråden */}
                <p className="mediumSectionP">7 m2 från 799kr/månad</p>
                <button onClick={handleToggleChange} value="7 m2 från 799kr/månad" className="btn2">Boka Förråd</button>
            </div>

            <div className="mediumSectionContainer">
            {/* texten ska sättas beroende vilket storlek på förråden */}
                <h3 className="mediumSectionH3">Medium</h3>
                {/* bild beroende storlek på förråd, small-medium-big */}
                <img className="mediumSectionImgCenter" src={Medium} alt="mediumstorage"/>
            {/* texten ska sättas beroende vilket storlek på förråden */}
                <p className="mediumSectionP">8 m2 från 899kr/månad</p>
                <button onClick={handleToggleChange} value="8 m2 från 899kr/månad"  className="btn2">Boka Förråd</button>
            </div>
            
            <div className="mediumSectionContainer">
                
                {/* bild beroende storlek på förråd, small-medium-big */}
            <img className="mediumSectionImgSide" src={Medium} alt="mediumstorage"/>
            {/* texten ska sättas beroende vilket storlek på förråden */}
                <p className="mediumSectionP">10 m2 från 1099kr/månad</p>
                <button onClick={handleToggleChange} value="10 m2 från 1099kr/månad"  className="btn2">Boka Förråd</button>
            </div>
            
        </section>
    )
}
