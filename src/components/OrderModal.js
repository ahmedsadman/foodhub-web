import React from 'react';
import MenuItem from '../components/MenuItem';

const OrderModal = ({ onExit, menu, addItem, removeItem }) => {
    const renderMenuItems = () => {
        return menu.map((item) => {
            return <MenuItem key={item._id} item={item} addItem={addItem} removeItem={removeItem} />
        });
    };

    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                position: 'relative'
            }}
        >
            <div style={{ position: 'absolute', top: 0, right: 0 }}>
                <i
                    className='fa fa-close'
                    style={{ cursor: 'pointer' }}
                    onClick={onExit}
                />
            </div>
            <div
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexDirection: 'column',
                    paddingBottom: 10,
                    borderBottom: '1px solid orange'
                }}
            >
                <h1 style={{ fontSize: '80%', margin: 0, padding: 0 }}>
                    Takeout
                </h1>
                <h1 style={{ fontSize: '100%', margin: 0, padding: 0 }}>
                    Menu Items
                </h1>
            </div>
            {/* ---------- Menu Items Container ------------- */}
            <div style={{ display: 'flex', flexDirection: 'column', margin: '20px 0', width: '100%' }}>
                {renderMenuItems()}
            </div>
        </div>
    );
};

export default OrderModal;
