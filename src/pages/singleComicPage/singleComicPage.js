import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

import useMarvelService from '../../services/MarvelService';
import Page404 from '../404/404';
import Spinner from '../../components/spinner/Spinner';
import PropTypes from 'prop-types';

import '../../components/style/button.css';
import '../../components/style/style.css';

import './singleComicPage.css';

const SingleComicPage = () => {
    const { comicId } = useParams();
    const [ comic, setComic ] = useState(null); 

    const { loading, error, getComic, clearError } = useMarvelService();

    useEffect(() => {
        updateComic()
    }, [comicId])

    const updateComic = () => {
        clearError();
        getComic(comicId)
        .then(onComicLoaded);
    }

    const onComicLoaded = (comic) => {
        setComic(comic);
    }

    const errorMessage = error ? <Page404/> : null;
    const spinner = loading ? <Spinner/> : null;
    const content = !(loading || error || !comic) ? <View comic={comic}/> : null;

    return (
        <>
            {errorMessage}
            {spinner}
            {content}
        </>
    )
}

const View = ({comic}) => {
    const { title, description, pageCount, language, thumbnail, price } = comic;

    return(
        <div className="single-comic">
            <img src={thumbnail} alt={title} className="single-comic__img"/>
            <div className="single-comic__info">
                <h2 className="single-comic__name">{title}</h2>
                <p className="single-comic__descr">{description}</p>
                <p className="single-comic__descr">{pageCount}</p>
                <p className="single-comic__descr">Language: {language}</p>
                <div className="single-comic__price">{price}</div>
            </div>
            <Link to="/comics" className="single-comic__back">Back to all</Link>
        </div>
    )
}

SingleComicPage.propTypes = {
    comicId: PropTypes.number
}

View.propTypes = {
    comic: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        thumbnail: PropTypes.string.isRequired,
        pageCount: PropTypes.string.isRequired,
        language: PropTypes.string.isRequired, 
        price: PropTypes.string.isRequired
    }).isRequired
};

export default SingleComicPage;