import React from 'react'

import { Icon } from '@iconify/react';
import lockDuplicate from '@iconify/icons-dashicons/lock-duplicate';
import doorOpenFill from '@iconify/icons-bi/door-open-fill';
import cleanIcon from '@iconify/icons-carbon/clean';



export default function InfoPoppers() {
    return (
        <section className="infoPoppersWrapper">
            <h3 className="infoPoppersH3">Välkommen till Förråds Hotel Bjästa!</h3>
            <div className="infoPoppersContainer">
                <div className="infoPoppersBox">
                    <div className="infoPoppersEllipse">
                        <Icon className="infoPoppersIcon" icon={lockDuplicate} />
                    </div>
                    <p className="infoPoppersP">Säkert!</p>
                    <p className="infoPoppersP">Byggnaden är utrustad med kameror och rörelse aktiverade ljus samt insynsskyddad.</p>
                </div>
                <div className="infoPoppersBox">
                    <div className="infoPoppersEllipse">
                        <Icon className="infoPoppersIcon" icon={doorOpenFill} />
                    </div>
                    <p className="infoPoppersP">Tillgängligt!</p>
                    <p className="infoPoppersP">Tillgång till förråd 365 dagar om året kl 7-22 passage med egen kod.</p>
                </div>
                <div className="infoPoppersBox">
                    <div className="infoPoppersEllipse">
                        <Icon className="infoPoppersIcon" icon={cleanIcon} />
                    </div>
                    <p className="infoPoppersP">Fräscht!</p>
                    <p className="infoPoppersP">Varm förråd som är hela och rena och samt är byggnaden isolerad!</p>
                </div>
            </div>
        </section>
    )
}
