import { Component } from 'react';
import MarvelService from '../../services/MarvelService';
import Error from '../error/Error';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';
import '../style/button.css';
import '../style/style.css';

import './CharInfo.css';

class CharInfo extends Component {
    state = {
        char: null,
        loading: false,
        error: false
    }

    marvelService = new MarvelService();


    updateChar = () => {
        const {id} = this.props;
        if (!id) {
            return;
        }
        this.onCharLoading();
        this.marvelService
            .getCharacter(id)
            .then(this.onCharLoaded)
            .catch(this.onError);
    }

    componentDidMount() {
        this.updateChar();
    }

    componentDidUpdate(prevProps) {
        if (this.props.id !== prevProps.id) {
            this.updateChar();
        }
    }

    onCharLoaded = (char) => {
        this.setState({
            char, 
            loading: false
        })
    }

    onCharLoading = () => {
        this.setState({
            loading: true
        })
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }


    render () {
        const {char, loading, error} = this.state;

        const skeleton = char || loading || error ? null : <Skeleton/>;
        const errorMessage = error ? <Error/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error || !char) ? <View char={char}/> : null;

        return (
            <div className="char__info"> 
                {skeleton}
                {errorMessage}
                {spinner}
                {content}
            </div>
        )
    }
}

const View = ({char}) => {
    const {name, description, thumbnail, homepage, wiki, comics} = char;

    let imgStyle = {'objectFit' : 'cover'};
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' || 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif') {
        imgStyle = {'objectFit' : 'contain'};
    }

    let comicsLimit = comics.slice(0, 9);

    return (
        <>
        <div className="char__basics">
            <img src={thumbnail} alt={name} style={imgStyle}/>
                <div>
                    <div className="char__info-name">{name}</div>
                        <div className="char__btns">
                            <a href={homepage} className="button button__main">
                                <div className="inner">homepage</div>
                            </a>
                            <a href={wiki} className="button button__secondary">
                                <div className="inner">Wiki</div>
                            </a>
                        </div>
                    </div>
                </div>
                <div className="char__descr">
                    {description}
                </div>
                <div className="char__comics">Comics:</div>
                {
                     comicsLimit.length > 0 ? (
                <ul className="char__comics-list">
                    {comicsLimit.map((comic, i) => <li key={i} className="char__comics-item">{comic}</li>)}
                </ul>
                
            ) : <p>No comics available for this character.</p>
        }
        </>
    )
}

export default CharInfo;