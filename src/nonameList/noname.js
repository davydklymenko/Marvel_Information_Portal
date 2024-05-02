import React from "react";
import './noname.css';
import { people, ukap } from '../recourses/indextc';

function NoNameList() {
    return(
        <>
            <div className="info-banner">
                <h1>Ugly People</h1>
                <div className="line"></div>  
                <h3>Part 2: No name</h3>      
            </div>  

            <div className="nonames">
                <ul className="list">
                  <img className="block-noname" src={people} alt="people" />
                  <img className="block-noname" src={ukap} alt="people" />
                </ul>
            </div>
        </>
    )
}

export default NoNameList;