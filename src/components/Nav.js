import React from 'react'
import { Icon, InlineIcon } from '@iconify/react';
import boxSeam from '@iconify/icons-bi/box-seam';
import bxsDownArrow from '@iconify/icons-bx/bxs-down-arrow';


export default function Nav() {
    return (
        <nav>
            <Icon icon={boxSeam} />
            <p>Lindströms Förråds Uthyrning</p>
            <span>|</span>
            <ul>
                <li>Våra Förråd</li>
                {/* <Icon icon={bxsDownArrow} /> */}
                <span>
                    <select>
                        <option value="4 m2 från 499kr/månad">4 m2 från 499kr/månad</option>
                        <option value="5 m2 från 599kr/månad">5 m2 från 599kr/månad</option>
                        <option value="6 m2 från 699kr/månad">6 m2 från 699kr/månad</option>
                        <option value="7 m2 från 799kr/månad">7 m2 från 799kr/månad</option>
                        <option value="8 m2 från 899kr/månad">8 m2 från 899kr/månad</option>
                        <option value="10 m2 från 1099kr/månad">10 m2 från 1099kr/månad</option>
                        <option value="11 m2 från 1199kr/månad">11 m2 från 1199kr/månad</option>
                        <option value="12 m2 från 1299kr/månad">12 m2 från 1299kr/månad</option>
                    </select>
                </span>
                <li></li>
                <li></li>
            </ul>
        </nav>
    )
}
