import React from 'react';
import ReactDOM from 'react-dom';

const JSX_MODAL = props => {
    if (!props.show) return null;
    return (
        <div style={styles.modalContainer}>
            <div style={styles.modalInner}>{props.children}</div>
        </div>
    );
};

const Modal = props => {
    return ReactDOM.createPortal(
        JSX_MODAL(props),
        document.querySelector('#modal')
    );
};

const styles = {
    modalContainer: {
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(40, 40, 40, 0.3)'
    },
    modalInner: {
        height: 'auto',
        width: '35%',
        backgroundColor: 'white',
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: 10,
        boxShadow: '1px 1px 2px #777',
        padding: 20
    }
};
export default Modal;
