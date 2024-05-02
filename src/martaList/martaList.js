import React from "react";
import './martaList.css';
import { flowers, stress, armCare } from '../recourses/indextc';

function MartaList() {
    return(
        <>
            <div className="info-banner">
                <h1>Ugly Me</h1>
                <div className="line"></div>  
                <h3>Part 3: And me</h3>      
            </div>  

            <div className="martas">
                <ul className="list">
                  <img className="block-marta" src={flowers} alt="marta" />
                  <img className="block-marta" src={stress} alt="marta" />
                  <img className="block-marta" src={armCare} alt="marta" />
                </ul>
            </div>
        </>
    )
}

export default MartaList;