import React from 'react';
import { Link } from 'react-router-dom';

const ReviewBox = props => {
    const { styles, item } = props;
    const avgRating =
        (item.food + item.service + item.environment + item.price) / 4;

    return (
        <div className={styles.reviewBlock}>
            <div className={styles.top}>
                <div className={styles.intro}>
                    <i
                        className='fa fa-user-circle'
                        style={{
                            fontSize: 30,
                            display: 'inline-block',
                            marginRight: 10
                        }}
                    />
                    <div>
                        <h3 className={styles.orange}>
                            {item.userId.username}
                        </h3>
                    </div>
                </div>
            </div>

            <div className={styles.comment}>
                <h6>{avgRating.toFixed(1)}</h6>
                {item.comment}
            </div>
        </div>
    );
};

export default ReviewBox;
