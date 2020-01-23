import React from 'react';
import style from './articleItem.module.css';

const ArticleItem = props => {
    const hoverAction = window.innerWidth <= 1366 ? '': props.hover;
    const articleClass = window.innerWidth <= 1366 || props.show ? `${style.article} ${style.show}` :  `${style.article} hide`;

    return (
        <div data-id={props.id} className={articleClass} onMouseEnter={hoverAction} onMouseLeave={hoverAction} >
            <p data-id={props.id} className={style.title}>{props.title}</p>
            <div data-id={props.id} className={style.desc}>
                <p>{props.desc}</p>
            </div>
            <p data-id={props.id} className={style.number}>{props.number}</p>
            <div data-id={props.id} className={`${style.triangle} ${style.down}`}/>
            <div data-id={props.id} className={`${style.triangle} ${style.up}`}/>
        </div>

    );
};




export default ArticleItem;