import { Component } from "react";
import AppHeader from "../components/appHeader/AppHeader";
import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

import decoration from '../../src/resources/img/vision.png';

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
        <RandomChar/>
                  <div className="char__content">
                    <CharList onCharSelected={this.onCharSelected}/>
                    <CharInfo id={this.state.selectedChar}/>
                  </div>
            <img className="bg-decoration" src={decoration} alt="vision"/>
      </div>
    )
  }
}

export default App;
