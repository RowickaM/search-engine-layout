import React from 'react';
import styles from './line.module.css';

const Line = props => {
    return (
        <React.Fragment>
            <div className={styles.line} style={{
                height: props.height,
                top: props.top && props.top,
                bottom: props.bottom && props.bottom,
                left: props.left && props.left,
                right: props.right && props.right
            }}/>
        </React.Fragment>
    );
};

export default Line;