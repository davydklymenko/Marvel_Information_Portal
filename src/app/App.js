import React, { useState } from "react";
import AppHeader from "../components/appHeader/AppHeader";
import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";
import ComicsList from "../components/comicsList/ComicsList";
import AppBanner from "../components/appBanner/AppBanner";

import decoration from '../../src/resources/img/vision.png';

import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

const App = () => {
    
  const [selectedChar, setChar] = useState(null);

  const onCharSelected = (id) => {
      setChar(id);
  }

  return (
      <div className="app">
          <AppHeader/>
          <main>
                <AppBanner/>
                    <ComicsList/>
              {/* <ErrorBoundary>
                  <RandomChar/>
              </ErrorBoundary>
              <div className="char__content">
                  <ErrorBoundary>
                      <CharList onCharSelected={onCharSelected}/>
                  </ErrorBoundary>
                  <ErrorBoundary>
                      <CharInfo charId={selectedChar}/>
                  </ErrorBoundary>
              </div> */}
              <img className="bg-decoration" src={decoration} alt="vision"/> 
          </main>
      </div>
  )
}

export default App;