import React from 'react'

export default function Questions() {
    return (
        <article className="questionsWrapper">
            <ul className="questionsUl">
                <li>Öppettider?</li>
                <li>Försäkringar?</li>
                <li>Minsta hyrtid?</li>
            </ul>
            <ul className="questionsUl">
                <li>Alla dagar 7-22.</li>
                <li>Egen hemförsäkring gäller.</li>
                <li>1 månad.</li>
            </ul>

            <h3 className="questionsH3">Vanliga Frågor</h3>

            <ul className="questionsUl">
                <li>Moms?</li>
                <li>Vad kan jag ej?</li>
                <li>Uppsägning?</li>
            </ul>
            <ul className="questionsUl">
                <li>För privatpersoner är det momsbefriat.</li>
                <li>Brandfarligt gods, kraftigt luktande gods såsom: kemikaler, råvaror m.m.</li>
                <li>Uppsägning senast 2 veckor innan påbörjad månad.</li>
            </ul>
        </article>
    )
}