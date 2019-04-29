import React from 'react';

const MenuItem = props => {
    const { item } = props;

    const getButtonStyle = () => {
        return {
            color: item.added ? 'gray' : 'orange',
            border: `1px solid ${item.added ? 'gray' : 'orange'}`
        }
    }

    const handleButtonClick = () => {
        if (item.added) props.removeItem(item);
        else props.addItem(item);
    }

    return (
        <div style={styles.container}>
            <div style={{ width: '15%', textTransform: 'capitalize' }}>{item.type}</div>
            <div style={{ width: '60%' }}>{item.name}</div>
            <div style={{ width: '10%' }}>{item.unit_price}</div>
            <button style={{ ...styles.button, ...getButtonStyle() }} onClick={handleButtonClick}>{item.added ? 'Remove' : 'Add'}</button>
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        backgroundColor: '#eee',
        padding: 5,
        margin: '2px 0',
        fontSize: '80%'
    },
    button: {
        fontSize: '80%',
        backgroundColor: 'white',
        padding: 7,
        flexGrow: 0.1,
        border: '1px solid orange',
        borderRadius: 5,
        fontWeight: 'bold',
        color: 'orange',
        cursor: 'pointer',
        outline: 0,
        width: '15%'
    }
};
export default MenuItem;
