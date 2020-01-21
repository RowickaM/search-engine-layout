import React from 'react';
import style from './inputSearch.module.css';

const InputSearch = props => {

    const textButton = props.isClicked ? 'wyszukaj':'Zacznij wyszukiwać';
    const input = props.isClicked && <input type='text' placeholder={'wpisz tekst'}/>;
    return (
        <div className={style['input-search']}>
            {input}
            <button
                className={`${style.button}${props.isClicked ? ' '+style['button-search']: ''}`}
                onClick={props.click}>
                <p>{textButton}</p>
            </button>
        </div>
    );
};

export default InputSearch;