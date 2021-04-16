import React from 'react'
// Import icons
import  Icon  from '@iconify/react';
import boxSeam from '@iconify/icons-bi/box-seam';
import emailIcon from '@iconify/icons-entypo/email';
// Import redux
import { useDispatch, useSelector} from 'react-redux';
import { toggleAction } from '../action/action';       

export default function Nav() {
     // redux useSelector
    const toggleReducer = useSelector(state => state.toggleReducer);

    // redux dispatch
    const dispatch = useDispatch();

    // functioner dispatch
    function handleToggleChange(e) {dispatch(toggleAction(!toggleReducer))};

    // functioner change window positions
    const scrollWinQuestions = ( () => {
        window.scrollTo(0, 1925)
    })
    const scrollWinInfo = ( () => {
        window.scrollTo(0, 2240)
    })
    const scrollWinContact = ( () => {
        window.scrollTo(0, 2300)
    })
    const scrollWinContact2 = ( () => {
        window.scrollTo(0, 2300)
    })
    const scrollWinContact3 = ( () => {
        window.scrollTo(0, 2300)
    })


    return (
        <nav className="navWrapper">
            <div className='navBox1'>
                <Icon className='navLogo' icon={boxSeam} />
                <p className="ownerName">Lindströms Förråds Uthyrning</p>
                <span className='navPipe'></span>
            </div>
            <div className='navBox2'>
                <ul className='navUl'>
                    {/* Denna li har en dropdownlista när man hovrar. */}
                    <li onClick={handleToggleChange} className='navStorage'>Boka Förråd
                        {/* <span className='navDropdown'>
                            <select 
                            multiple={true}
                            onChange={handleToggleChange}>
                                <option selected value="Välj Förråd">Välj Förråd</option>
                                <option value="4 m2 från 499kr/månad">4 m2 från 499kr/månad</option>
                                <option value="5 m2 från 599kr/månad">5 m2 från 599kr/månad</option>
                                <option value="6 m2 från 699kr/månad">6 m2 från 699kr/månad</option>
                                <option value="7 m2 från 799kr/månad">7 m2 från 799kr/månad</option>
                                <option value="8 m2 från 899kr/månad">8 m2 från 899kr/månad</option>
                                <option value="10 m2 från 1099kr/månad">10 m2 från 1099kr/månad</option>
                                <option value="11 m2 från 1199kr/månad">11 m2 från 1199kr/månad</option>
                                <option value="12 m2 från 1299kr/månad">12 m2 från 1299kr/månad</option>
                            </select> */}
                        {/* </span> */}
                    </li>
                    <li onClick={scrollWinQuestions}>Vanliga Frågor</li>
                    <li onClick={scrollWinInfo}>Info</li>
                    <li onClick={scrollWinContact}>Kontakta Oss</li>
                </ul>
            </div>
            <div className='navBox3'>
                <span className='navPipe'></span>
                <Icon onClick={scrollWinContact2} className='navSnableA' icon={emailIcon} />
                <p onClick={scrollWinContact3} className='navMailAdress'> lindstromsforråd@gmail.com </p>
            </div>
            
        </nav>
    )
}