import React from 'react';
import styles from './stripes.module.css';
import Line from "./line/Line";

const Stripes = props => {
    let lines=[];
    if(props.places === "top-left"){
        let height = 320;
        for (let i=0; i < props.count; i++){
            lines.push(<Line
                key={i}
                height={`${height}px`}
                top="-153px"
               />);
            height+=100;
        }
    }else if (props.places === "bottom-right"){
        let height = 320;
        for (let i=0; i < props.count; i++) {
            lines.push(<Line
                key={i}
                height={`${height}px`}
                bottom="-153px"
                right="0"
            />);
            height += 100;
        }
    }

    return (
        <div className={styles.stripes}>
            {lines}
        </div>
    );
};

export default Stripes;