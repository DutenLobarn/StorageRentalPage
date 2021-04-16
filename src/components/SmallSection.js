import React from 'react'
import Small from "../img/liten.png";

// Import redux
import { useDispatch, useSelector} from 'react-redux';
import { toggleAction, valueAction } from '../action/action';      



export default function SmallSection() {
    
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
        <section className="smallSectionWrapper">

            <div className="smallSectionContainer">
                {/* bild beroende storlek på förråd, small-medium-big */}
                <img className="smallSectionImgSide" src={Small} alt="smallstorage"/>
            {/* texten ska sättas beroende vilket storlek på förråden */}
                <p className="smallSectionP">4 m2 från 499kr/månad</p>
                <button onClick={handleToggleChange} value="4 m2 från 499kr/månad" className="btn2">Boka Förråd</button>
            </div>

            <div className="smallSectionContainer">
            {/* texten ska sättas beroende vilket storlek på förråden */}
                <h3 className="smallSectionH3">Liten</h3>
                {/* bild beroende storlek på förråd, small-medium-big */}
                <img className="smallSectionImgSmall" src={Small} alt="smallstorage"/>
            {/* texten ska sättas beroende vilket storlek på förråden */}
                <p className="smallSectionP">5 m2 från 599kr/månad</p>
                <button onClick={handleToggleChange} value="5 m2 från 599kr/månad" className="btn2">Boka Förråd</button>
            </div>
            
            <div className="smallSectionContainer">
                
                {/* bild beroende storlek på förråd, small-medium-big */}
            <img className="smallSectionImgSide" src={Small} alt="smallstorage"/>
            {/* texten ska sättas beroende vilket storlek på förråden */}
                <p className="smallSectionP">6 m2 från 699kr/månad</p>
                <button onClick={handleToggleChange} value="6 m2 från 699kr/månad" className="btn2">Boka Förråd</button>
            </div>
            
        </section>
    )
}