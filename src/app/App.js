import AppHeader from "../components/appHeader/AppHeader";
import RandomChar from "../components/randomChar/RandomChar";
import CharList from "../components/charList/CharList";
import CharInfo from "../components/charInfo/CharInfo";

import decoration from '../../src/resources/img/vision.png';

function App() {
  return (
    <div className="App">
      <AppHeader/>
      <RandomChar/>
                <div className="char__content">
                    <CharList/>
                    <CharInfo/>
                </div>
          <img className="bg-decoration" src={decoration} alt="vision"/>
    </div>
  );
}

export default App;
