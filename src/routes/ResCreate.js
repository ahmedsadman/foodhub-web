import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateRestaurant extends Component {
    constructor(props) {
        super(props);
        this.state = {
            menuList: [],
            foodType: '',
            foodName: '',
            foodPrice: ''
        };
    }

    addFoodItem() {
        const index = this.state.menuList.findIndex(
            item =>
                item.type === this.state.foodType &&
                item.name === this.state.foodName
        );

        // item already exists, so edit it
        if (index > -1) {
            const newList = this.state.menuList.map((item, currIndex) => {
                if (currIndex === index) {
                    return {
                        name: this.state.foodName,
                        type: this.state.foodType,
                        price: this.state.foodPrice
                    };
                }
                return item;
            });
            this.setState({
                menuList: newList,
                foodName: '',
                foodPrice: '',
                foodType: ''
            });
        } else {
            const newItem = {
                type: this.state.foodType,
                name: this.state.foodName,
                price: this.state.foodPrice
            };

            this.setState({
                menuList: [...this.state.menuList, newItem],
                foodName: '',
                foodPrice: '',
                foodType: ''
            });
        }
    }

    onInputChange(type, e) {
        this.setState({ [type]: e.target.value });
    }

    renderFoodMenuItems() {
        return this.state.menuList.map(item => {
            return (
                <div style={styles.foodItem} key={`${item.name}-${item.type}`}>
                    <div style={{ width: '25%' }}>
                        {item.type}
                    </div>
                    <div style={{ width: '25%' }}>
                        {item.name}
                    </div>
                    <div style={{ width: '25%' }}>
                        {item.price}
                    </div>
                    <div style={{ display: 'flex', width: 'auto' }}>
                        <i className='fa fa-edit' />
                        <i className='fa fa-trash' style={{ marginLeft: 5 }} />
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <div style={styles.container}>
                <h1>Create a new restaurant</h1>
                <div style={styles.formContainer}>
                    <form>
                        <div style={styles.fieldSet}>
                            <label htmlFor='name'>Name</label>
                            <input
                                style={styles.input}
                                type='text'
                                name='name'
                            />
                        </div>

                        <div style={styles.fieldSet}>
                            <label htmlFor='name'>Banner Image</label>
                            <input
                                style={styles.input}
                                type='text'
                                name='name'
                            />
                        </div>

                        <div style={styles.fieldSet}>
                            <p>Hour</p>
                            <div>
                                <label htmlFor='name'>Start</label>
                                <input
                                    style={{ ...styles.input, width: 150 }}
                                    type='text'
                                    name='name'
                                />

                                <label
                                    htmlFor='name'
                                    style={{ marginLeft: 10 }}
                                >
                                    End
                                </label>
                                <input
                                    style={{ ...styles.input, width: 150 }}
                                    type='text'
                                    name='name'
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                ...styles.fieldSet,
                                alignItems: 'flex-start'
                            }}
                        >
                            <label htmlFor='name'>Images (URL)</label>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <input
                                    style={{ ...styles.input, marginBottom: 5 }}
                                    type='text'
                                    name='name'
                                />
                                <input
                                    style={{ ...styles.input, marginBottom: 5 }}
                                    type='text'
                                    name='name'
                                />
                                <input
                                    style={{ ...styles.input, marginBottom: 5 }}
                                    type='text'
                                    name='name'
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                ...styles.fieldSet,
                                alignItems: 'flex-start'
                            }}
                        >
                            <p>Features</p>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='name'
                                        style={{ marginRight: 10 }}
                                    />
                                    <label htmlFor='wifi'>Wifi</label>
                                </div>

                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='name'
                                        style={{ marginRight: 10 }}
                                    />
                                    <label htmlFor='wifi'>Delivery</label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='name'
                                        style={{ marginRight: 10 }}
                                    />
                                    <label htmlFor='wifi'>AC</label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='name'
                                        style={{ marginRight: 10 }}
                                    />
                                    <label htmlFor='wifi'>Smoking Zone</label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='name'
                                        style={{ marginRight: 10 }}
                                    />
                                    <label htmlFor='wifi'>Reservation</label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='name'
                                        style={{ marginRight: 10 }}
                                    />
                                    <label htmlFor='wifi'>Parking</label>
                                </div>
                            </div>
                        </div>
                        <div
                            style={{
                                ...styles.fieldSet,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                flexGrow: 1
                            }}
                        >
                            <p style={{ marginBottom: 10 }}>Food Menu</p>

                            {/* --------- Show added food items here ------------- */}
                            <div
                                style={{
                                    flexDirection: 'column',
                                    display: 'flex',
                                    width: '100%'
                                }}
                            >
                                {this.renderFoodMenuItems()}
                            </div>
                            {/* -------------------------------------------------- */}
                            <div style={styles.foodMenuContainer}>
                                <div>
                                    <label htmlFor='name'>Type</label>
                                    <input
                                        style={{ ...styles.input, width: 100 }}
                                        type='text'
                                        name='name'
                                        value={this.state.foodType}
                                        onChange={e =>
                                            this.onInputChange('foodType', e)
                                        }
                                    />
                                </div>

                                <div>
                                    <label htmlFor='name'>Name</label>
                                    <input
                                        style={{ ...styles.input, width: 230 }}
                                        type='text'
                                        name='name'
                                        value={this.state.foodName}
                                        onChange={e =>
                                            this.onInputChange('foodName', e)
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>Price</label>
                                    <input
                                        style={{ ...styles.input, width: 100 }}
                                        type='text'
                                        name='name'
                                        value={this.state.foodPrice}
                                        onChange={e =>
                                            this.onInputChange('foodPrice', e)
                                        }
                                    />
                                </div>
                                <i
                                    className='fa fa-check'
                                    style={{ cursor: 'pointer' }}
                                    onClick={this.addFoodItem.bind(this)}
                                />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        width: 1140,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 30,
        paddingBottom: 30,
        boxSizing: 'border-box'
    },
    formContainer: {
        display: 'flex',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexGrow: 1,
        flexDirection: 'column'
    },
    fieldSet: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: 400,
        marginLeft: 10,
        padding: 6,
        borderRadius: 5,
        boxSizing: 'border-box',
        outline: 'none',
        border: '1px solid #ddd'
    },
    foodMenuContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    foodItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5
    }
};

export default CreateRestaurant;
