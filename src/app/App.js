import { Component } from "react";
import AppHeader from "../components/appHeader/AppHeader";
import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

import decoration from '../../src/resources/img/vision.png';

import ErrorBoundary from "../components/errorBoundary/ErrorBoundary";

class App extends Component {
    
      state = {
        selectedChar: null
    }

    onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

    render () {
    return (
      <div className="App">
        <AppHeader/>
          <main>
            <ErrorBoundary>
              <RandomChar/>
            </ErrorBoundary>
                  <div className="char__content">
                    <ErrorBoundary>
                       <CharList onCharSelected={this.onCharSelected}/>
                    </ErrorBoundary>
              
                      <ErrorBoundary>
                        <CharInfo id={this.state.selectedChar}/>
                      </ErrorBoundary>
                  </div>

            <img className="bg-decoration" 
                 style={{ position: 'relative', marginRight: '270px', marginBottom: '1500px' }}
                 src={decoration} 
                 alt="vision"/>
        </main>
      </div>
    )
  }
}

export default App;
