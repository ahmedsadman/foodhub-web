import React from 'react';

export const Card = (props) => {
    return (
        <div style={styles.container}>
            {props.children}
        </div>
    )
};

const styles = {
    container: {
        height: 'auto',
        border: '1px solid rgb(209, 209, 209)',
        padding: '20px 15px',
        boxShadow: '2px 2px 1px #c9c9c9'
    }
}