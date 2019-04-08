import React from 'react';

export const ResBox = props => {
    const { styles } = props;
    return (
        <div className={styles.nearby}>
            <img
                alt=''
                className={styles.divImg}
                src='/images/css/Madchef.jpg'
            />
            <h5 style={{ textTransform: 'capitalize' }}>{props.name}</h5>
            <h6 style={{ textTransform: 'capitalize' }}>{props.address}</h6>
        </div>
    );
};
