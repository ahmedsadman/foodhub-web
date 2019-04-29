import React from 'react';

const CartItem = props => {
    const { item } = props;
    return (
        <div
            style={styles.container}
        >
            <div
                style={styles.info}
            >
                <span>{item.name}</span>
                <span style={{ fontSize: '80%', color: 'gray' }}>{`${item.unit_price} Tk`}</span>
            </div>
            <div
                style={{ display: 'flex', flexDirection: 'row', width: '25%' }}
            >
                <span>
                    <i className='fa fa-plus-square' style={styles.modifyIcons} onClick={() => props.onModifyQuantity(item, 'inc')} />
                </span>
                <span style={{ margin: '0 5px' }}>{item.quantity}</span>
                <span>
                    <i className='fa fa-minus-square' onClick={() => props.onModifyQuantity(item, 'dec')} style={styles.modifyIcons} />
                </span>
            </div>
            <div style={{ width: '25%' }}>{`${item.total_price} Tk`}</div>
            <div>
                <i className='fa fa-trash' style={{ color: 'red', cursor: 'pointer' }} onClick={() => props.onRemove(item)} />
            </div>
        </div>
    );
};

const styles = {
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '12px 5px',
        borderBottom: '1px solid orange'
    },
    info: {
        display: 'flex',
        flexDirection: 'column',
        width: '45%'
    },
    modifyIcons: {
        color: 'orange',
        cursor: 'pointer'
    }
}

export default CartItem;
