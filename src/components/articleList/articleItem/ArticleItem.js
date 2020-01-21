import React from 'react';
import style from './articleItem.module.css';

const ArticleItem = props => {
    const articleClass = props.show ? `${style.article} ${style.show}` :  `${style.article} hide`;

    return (
        <div data-id={props.id} className={articleClass} onMouseEnter={props.hover} onMouseLeave={props.hover}>
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