import React from "react";
import './SpeedAnalysis.css'

export default function SpeedAnalysis({totalCharsTyped, timeElapsed}){
    const wordsPerMinute = ((totalCharsTyped / 5)/(timeElapsed / 60)).toFixed(2);
    

    return(
        <div className="Speed-Tracker">
            <h2>Typing <span>Analysis</span></h2>
            <div className="items">
           <div> <p>Characters<p className="tracker">{totalCharsTyped}</p></p></div>
            <div>
            <p>WPM<p className="tracker">{wordsPerMinute}</p></p>
            </div>
            </div>
        </div>
    )
}