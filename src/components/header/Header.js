import React from 'react';
import style from './header.module.css';

const Header = props => {

    const found = props.isClicked ? <p>Wyszukano: XXXX</p>: '';

    return (
        <div className={`${style.head}${props.isClicked ? ' '+style.search: ''}`}>
            <div className={style.header}>
                <h1>search article</h1>
                <div className={style.heart}/>
            </div>
            {found}
        </div>
    );
};

export default Header;