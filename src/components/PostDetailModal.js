import React from 'react';
import { getImagePath } from '../utils/helpers';

const PostDetailModal = props => {
    const { item } = props;
    console.log(item.content);
    return (
        <div
            style={{
                display: 'flex',
                width: '100%',
                flexDirection: 'column',
                position: 'relative'
            }}
        >
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <i
                    className='fa fa-close'
                    style={{ cursor: 'pointer' }}
                    onClick={props.onExit}
                />
            </div>
            <div style={{ padding: '10px 0 ', borderBottom: '1px solid #ddd', marginTop: 20 }}>
                <img src={getImagePath(item.image)} alt='' style={{ width: '100%', height: 500 }} />
            </div>
            <div style={{ borderBottom: '1px solid #ddd', padding: '10px 0' }}>
                <h1 style={{ margin: '5px 0', fontSize: '160%', color: 'orange' }}>{item.title}</h1>
                <span style={{ fontSize: '70%' }}>{`By ${item.user.username}`}</span><br/>
                <span style={{ fontSize: '70%' }}>{`On ${new Date(item.createdAt).toLocaleDateString()}`}</span>
            </div>
            <div>
                <p style={{ whiteSpace: 'pre-line' }}>{item.content}</p>
            </div>
        </div>
    );
};

export default PostDetailModal;
