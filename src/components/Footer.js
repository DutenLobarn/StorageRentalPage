import React from 'react'
// Import icons
import Icon  from '@iconify/react';
import boxSeam from '@iconify/icons-bi/box-seam';
import houseIcon from '@iconify/icons-si-glyph/house';
import baselineFacebook from '@iconify/icons-ic/baseline-facebook';
import emailIcon from '@iconify/icons-entypo/email';
// Import redux
import { useDispatch, useSelector} from 'react-redux';
import { toggleAction } from '../action/action'; 



export default function Footer() {
    // redux useSelector
    const toggleReducer = useSelector(state => state.toggleReducer);

    // redux dispatch
    const dispatch = useDispatch();

    // functioner dispatch
    function handleToggleChange(e) {dispatch(toggleAction(!toggleReducer))};

    const scrollWinOurStorage = ( () => {
        window.scrollTo(0, 600)
    })
    const scrollWinQuestions = ( () => {
        window.scrollTo(0, 1925)
    })
    const scrollWinInfo = ( () => {
        window.scrollTo(0, 2240)
    })

    return (
        <footer className="footerWrapper">

            <div className="footerBox">
                <p onClick={handleToggleChange} className="footerP">Boka Förråd</p>
                <p onClick={scrollWinOurStorage} className="footerP">Våra Förråd</p>
                <p onClick={scrollWinQuestions} className="footerP">Vanliga Frågor</p>
                <p onClick={scrollWinInfo} className="footerP">Info</p>
            </div>

            <div  className="footerBox">
                <h3 className="footerH3">Kontakta Oss</h3>
                <Icon className='footerSnabel' icon={emailIcon} />
                <input 
                    className="footerInput" 
                    type='text' 
                    placeholder="Namn*">
                </input>
                <input 
                    className="footerInput" 
                    type='text' 
                    placeholder="MejlAdress*">
                </input>
                <textarea 
                    className="footerTextArea"
                    type='text' 
                    placeholder="Meddelande*">
                </textarea>
                <button className="btn">Skicka Mejl</button>
                <p className="footerCopywright">Copywright Lindströms Förråds Uthyrnings AB   2021</p>
            </div>

            <div className="footerBox">
                {/* <div className="footerContainerRight"> */}
                    <a href="http://localhost:3000/" className="footerBoxRight">
                        <Icon className='footerLogo' icon={boxSeam} />
                        <p className="footerP">Lindströms Förråds Uthyrning</p>
                    </a>

                    <a href="https://www.google.se/maps/place/Orkesterv%C3%A4gen+19,+893+30+Bj%C3%A4sta/@63.2040748,18.5043895,17z/data=!3m1!4b1!4m5!3m4!1s0x467b540cafc2a55f:0xe0d83c8d7b27c6b8!8m2!3d63.2040724!4d18.5065782" target="_blank" rel="noreferrer" className="footerBoxRight">
                        <Icon className='footerLogo' icon={houseIcon} />
                        <p className="footerP">Orkestervägen 19, 893 30 Bjästa</p>
                    </a>

                    <a href="https://www.facebook.com/" target="_blank" rel="noreferrer" className="footerBoxRight">
                        <Icon className='footerLogo' icon={baselineFacebook} />
                        <p className="footerP">lindstromsfarrad</p>
                    </a>
                {/* </div> */}
            </div>

        </footer>
    )
}