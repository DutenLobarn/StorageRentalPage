import React from 'react'
// Import icons
import  Icon  from '@iconify/react';
import boxSeam from '@iconify/icons-bi/box-seam';
import arrowDownCircleFill from '@iconify/icons-bi/arrow-down-circle-fill';



export default function Hero() {
    return (
        <div className="heroWrapper">
            <div className="heroContentContainer">

                <Icon className='heroLogo' icon={boxSeam} />
                <h1 className="heroH1">VARMT FÖRRÅDSHOTELL I CENTRALA BJÄSTA<br/>  DET FINNS OLIKA BEHOV AV FÖRRÅD<br/>VI FYLLER DEM ALLA!!</h1>
                <h2 className="heroH2">Våra Förråd</h2>
                <Icon className="heroArrow" icon={arrowDownCircleFill} />

            </div>
        </div>
    )
}
