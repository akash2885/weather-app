import React from "react";
import './style.css'

const Bottom = () => {
    return  (
        <div className={'footer'}>
            <div>
            <p className={'bold'}>58°F</p>
            <p>Feels like</p>
            </div>
            <div>
            <p className={'bold'}>20%</p>
            <p>Humidity</p>
            </div>
            <div>
            <p className={'bold'}>12 MPH</p>
            <p>Wind</p>
            </div>

        </div>
    )
}

export default Bottom