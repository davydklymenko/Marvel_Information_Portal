import React, { useState } from "react";
import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";
import decoration from '../../src/resources/img/vision.png';

import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

const MainPage = () => {
    
    const [selectedChar, setChar] = useState(null);

    const onCharSelected = (id) => {
        setChar(id);
    }

    return (
        <>
            <ErrorBoundary>
                  <RandomChar/>
                </ErrorBoundary>
                <div className="char__content">
                  <ErrorBoundary>
                    <CharList onCharSelected={onCharSelected}/>
                  </ErrorBoundary>
                  <ErrorBoundary>
                    <CharInfo charId={selectedChar}/>
                  </ErrorBoundary>    
                </div> 
            <img className="bg-decoration" src={decoration} alt="vision"/>
        </>
    )
}

export default MainPage;