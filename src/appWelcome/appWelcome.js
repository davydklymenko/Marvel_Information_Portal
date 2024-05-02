import React from "react";
import './appWelcome.css';
import laugh from '../recourses/marta/laugh.png';

function AppWelcome() {
    return(
        <>
            <h1>
                Welcome!
            </h1>

            <div className="welcome">
                <div className="photo-welcome">
                    <div className="block"></div>
                    <img src={laugh} alt="flowers-marta" />
                </div>

                <p className="info-bohonko">
                Hi!
                I’m Marta Bohonko. I prepared
                a faces which for you don't
                like. I'm hope you read this.
                SO, CLICK ON THE TOP CATEGORIES AND LOOK UGLY
                FACES!
                </p>
            </div>
        </>
    )
}

export default AppWelcome;