import React from 'react';
import { getImagePath } from '../utils/helpers';

const BlogItem = props => {
    const { styles, item } = props;
    console.log(getImagePath(item.image));
    return (
        <div className={styles.blog} style={{ cursor: 'pointer' }} onClick={props.onClick}>
            <img
                className={styles.blogImg}
                src={getImagePath(item.image)}
                alt=''
            />
            <br />

            <div className={`${styles.orange} ${styles.Large}`}>
                {item.title}
            </div>
            <div className={styles.Author}>
                <img
                    className={styles.authorImg}
                    src='/images/css/Tarik.jpg'
                    alt=''
                />
                <div
                    className={`${styles.ash} ${styles.small} ${
                        styles.authorInfo
                    }`}
                >
                    {item.user.username}
                    <br />
                    {new Date(item.createdAt).toLocaleDateString()}
                    <br />
                </div>
                <div className={`${styles.icon} ${styles.orange}`}>follow</div>
            </div>
        </div>
    );
};

export default BlogItem;
