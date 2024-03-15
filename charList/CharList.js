import './CharList.css';
import '../style/button.css';
import MarvelService from '../../services/MarvelService';
import {Component} from 'react';
import Spinner from '../spinner/Spinner';
import Error from '../error/Error';

import PropTypes from 'prop-types';

class CharList extends Component {
    state = {
        charList: [],
        loading: true,
        error: false,
        newItemLoading: false,
        selected: false,
        offset: 1538
    }

    marvelService = new MarvelService();

    componentDidMount() {
        this.onRequest();
    }
    
    onRequest = (offset) => {
        this.onCharListLoading();
        this.marvelService.getAllCharacters(offset)
        .then(this.onCharListLoaded)
        .catch(this.onError)
    }

    onCharListLoading = () => {
        this.setState({
            newItemLoading: true
        })
    }

    onCharListLoaded = (newCharList) => {
        let ended = false;
        if (newCharList.length < 9) {
            ended = true;
        }

        this.setState(({offset, charList}) => ({
            charList: [...charList, ...newCharList], 
            loading: false,
            newItemLoading: false,
            offset: offset + 9,
            charEnded: ended
        }))
    }

    onError = () => {
        this.setState({
            loading: false,
            error: true
        })
    }

    itemsRefs = [];

    setRef = (ref) => {
        this.itemsRefs.push(ref);
    }

    focusOnItem = (id) => {
        if (this.itemsRefs[id]) {
            this.itemsRefs.forEach(item => item.classList.remove('char__item_selected'));
            this.itemsRefs[id].classList.add('char__item_selected');
            this.itemsRefs[id].focus();
        }
    }

    renderItem(arr) {
        const items = arr.map((item) => {

            let imgStyle = {'objectFit' : 'cover'};
            if (item.thumbnail === 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available.jpg' || 'http://i.annihil.us/u/prod/marvel/i/mg/f/60/4c002e0305708.gif') {
                imgStyle = {'objectFit' : 'contain'};
            }

            return (
                <li 
                    className="char__item"
                    tabIndex={0}
                    ref={this.setRef}
                    key={item.id}
                    onClick={(i) => {
                        this.props.onCharSelected(item.id);
                        this.focusOnItem(i); 
                    }}>
                        <img src={item.thumbnail} alt={item.name} style={imgStyle}/>
                        <div className="char__name">{item.name}</div>
                </li>
            )
        })

        return (
            <ul className="char__grid">
                {items}
            </ul>
        )
    }

    render () {
        const {charList, loading, error, offset, newItemLoading, charEnded} = this.state;
        const charItems = this.renderItem(charList);
        const errorMessage = error ? <Error/> : null;
        const spinner = loading ? <Spinner/> : null;
        const content = !(loading || error) ? charItems : null;

        return (
            <div className="char__list">
                {errorMessage}
                {spinner}
                {content}
                <button 
                className="button button__main button__long"
                disabled={newItemLoading}
                style={{'display': charEnded ? 'none' : 'block'}}

                onClick={() => this.onRequest(offset)} >
                    <div className="inner">load more</div>
                </button>
            </div>
        )
    }
}

CharList.propTypes = {
    onCharSelected: PropTypes.func.isRequired
}

export default CharList;