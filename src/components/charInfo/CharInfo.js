import React, { useState, useEffect, memo } from 'react'; 
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import useMarvelService from '../../services/MarvelService';
import Error from '../error/Error';
import Spinner from '../spinner/Spinner';
import Skeleton from '../skeleton/Skeleton';
import '../style/button.css';
import '../style/style.css';
import './CharInfo.css';

import PropTypes from 'prop-types';

const CharInfo = memo = (props) => {

    const [char, setChar] = useState(null);

    const {loading, error, getCharacter, clearError} = useMarvelService();

    useEffect(() => {
        updateChar()
    }, [props.charId])

    const updateChar = () => {
        const {charId} = props;
        if (!charId) {
            return;
        }

        clearError();
        getCharacter(charId)
        .then(onCharLoaded);
    }

    const onCharLoaded = (char) => {
        setChar(char);
    }

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

const View = ({ char }) => {
    const duration = 400;

    if (!char) {
        return null;
    }

    const { name, description, thumbnail, homepage, wiki, comics, id } = char;

    let imgStyle = { 'objectFit': 'cover' };
    if (thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg') {
        imgStyle = { 'objectFit': 'contain' };
    }

    const comicsLimit = comics ? comics.slice(0, 9) : [];

    return (
        <TransitionGroup>
            <CSSTransition
                key={id || name}
                timeout={duration}
                classNames="select"
            >
                <div> {}
                    <div className="char__basics">
                        <img src={thumbnail} alt={name} style={imgStyle} />
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
                    <ul className="char__comics-list">
                        {
                            comicsLimit.length > 0 ? (
                                comicsLimit.map((comic, id) => <li key={id} className="char__comics-item">{comic}</li>)
                            ) : <p>No comics available for this character.</p>
                        }
                    </ul>
                </div>
            </CSSTransition>
        </TransitionGroup>
    );
}

CharInfo.propTypes = {
    charId: PropTypes.number,
}

View.propTypes = {
    char: PropTypes.shape({
        name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        homepage: PropTypes.string.isRequired,
        wiki: PropTypes.string.isRequired, 
        comics: PropTypes.array.isRequired,
        id: PropTypes.array.isRequired
    }).isRequired
};

export default CharInfo;