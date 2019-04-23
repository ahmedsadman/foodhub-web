import React from 'react';
import styles from '../../views/components/Spinner.module.css';

const getSpinnerStyle = (size) => {
    const border = size === 'large' ? '10px solid #f3f3f3' : '5px solid #f3f3f3';
    const borderTop = size === 'large' ? '10px solid #e67e22' : '5px solid #e67e22';
    const _size = size === 'large' ? 60 : 20;

    return {
        border,
        borderTop,
        width: _size,
        height: _size
    };
};

export const Spinner = (props) => {
    return <div className={styles.loader} style={getSpinnerStyle(props.size)}></div>;
};
