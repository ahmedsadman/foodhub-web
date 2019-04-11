import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CreateRestaurant extends Component {
    render() {
        return (
            <div style={styles.container}>
                <h1>Create a new Restaurant</h1>
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
                            <div>
                                <p>Features</p>
                            </div>

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
                                    <input type='checkbox' name='name' style={{ marginRight: 10 }} />
                                    <label htmlFor='wifi'>Smoking Zone</label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input type='checkbox' name='name' style={{ marginRight: 10 }} />
                                    <label htmlFor='wifi'>Reservation</label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input type='checkbox' name='name' style={{ marginRight: 10 }} />
                                    <label htmlFor='wifi'>Parking</label>
                                </div>
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
        padding: 10,
        borderRadius: 5,
        boxSizing: 'border-box',
        outline: 'none',
        border: '1px solid #ddd'
    }
};

export default CreateRestaurant;
