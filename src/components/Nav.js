import React from 'react'
// Import icons
import  {Icon}  from '@iconify/react';
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
        window.scrollTo(0, 2655)
    })
    const scrollWinInfo = ( () => {
        window.scrollTo(0, 3140)
    })
    const scrollWinContact = ( () => {
        window.scrollTo(0, 3800)})


    return (
        <nav className="navWrapper">
            <div className='navBox1'>
                <Icon className='navLogo' icon={boxSeam} />
                <p className="ownerName">Förråds Hotel Bjästa</p>
                <span className='navPipe'></span>
            </div>
            <div className='navBox2'>
                <ul className='navUl'>
                    {/* Denna li har en dropdownlista när man hovrar. */}
                    <li onClick={handleToggleChange} className='navStorage'>Boka Förråd
                   
                    </li>
                    <li onClick={scrollWinQuestions}>Vanliga Frågor</li>
                    <li onClick={scrollWinInfo}>Info</li>
                </ul>
            </div>
            <div className='navBox3'>
                <span className='navPipe'></span>
                
                <p onClick={scrollWinContact} className='navMailAdress'> <Icon className='navSnableA' icon={emailIcon} />forradshotelbjasta@hotmail.com</p>
            </div>
            
        </nav>
    )
}