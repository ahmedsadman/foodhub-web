import React from 'react';

const FeatureLabel = props => {
    const { styles, feature } = props;
    return (
        <div className={feature ? styles.orange : styles.ash}>
            {props.label}
            <i
                className={
                    feature ? 'fa fa-check-circle' : 'fa fa-times-circle'
                }
            />
            <br />
            <br />
        </div>
    );
};

export default FeatureLabel;
