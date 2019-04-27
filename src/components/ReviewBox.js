import React from 'react';
import { Link } from 'react-router-dom';

const ReviewBox = props => {
    const { styles } = props;

    return (
        <div>
            <div className={styles.top}>
                <div className={styles.intro}>
                    <img
                        className={styles.proPic}
                        src='/images/css/Tarik.jpg'
                        alt=''
                    />
                    <div>
                        <h3 className={styles.orange}>Dewan Tarikul Mannan</h3>
                    </div>
                </div>
            </div>

            <div className={styles.comment}>
                <h6>4.8</h6>
                Amazing Place! Nice Ambience. The best part is premium quality
                burgers at such moderate cost. And the cold coffee is best. Best
                place for students.
            </div>
        </div>
    );
};

export default ReviewBox;
