import React, { Component } from 'react';
import axios from 'axios';
import { api } from '../utils/api';
import { Card } from '../components/common/Card';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.fetchRestaurants();
    }

    async fetchRestaurants() {
        const params = {};

        try {
            const response = await axios.get(api.searchRestaurant, { params });
            console.log(response.data);
            this.setState({ list: response.data.data });
        } catch (e) {
            console.log(e);
        }
    }

    renderList() {
        if (!this.state.list) return <h1>Loading</h1>;
        return this.state.list.map(item => {
            return (
                <Card key={item._id} style={{ margin: '5px 0' }}>
                    <div style={{ ...styles.infoContainer, position: 'relative' }}>
                        <div style={styles.rowFlex}>
                            <img
                                src={item.banner_image}
                                style={{ width: 80, height: 80, marginRight: 10 }}
                                alt=''
                            />
                            <div style={{ ...styles.colFlex, justifyContent: 'center' }}>
                                <p style={styles.infoText}>{item.name}</p>
                                <p style={styles.infoText}>{`${
                                    item.address.area
                                }, ${item.address.district}`}</p>
                            </div> 
                        </div>
                        <div style={styles.colFlex}>
                            <div style={styles.rowFlex}>
                                <i className='fa fa-star' style={{ fontSize: 16, marginRight: 2, color: 'green' }} />
                                <p style={{ ...styles.infoText, color: 'green', fontWeight: 'bold' }}>{item.review.average}</p>
                            </div>
                            <div style={{ ...styles.rowFlex, alignItems: 'center', justifyContent: 'center', position: 'absolute', bottom: 0, right: 0 }}>
                                <i style={{ marginTop: 3, marginRight: 3, cursor: 'pointer', color: 'gray', fontSize: 18 }} className='fa fa-edit'></i>
                                <i style={{ cursor: 'pointer', color: 'gray', fontSize: 18 }} className='fa fa-trash'></i>
                            </div>
                        </div>
                        
                    </div>
                </Card>
            );
        });
    }

    render() {
        return (
            <div style={inStyles.container}>
                <h1 style={{ marginBottom: 20 }}>Welcome User</h1>
                {/* --------------------- Profile information START ------------------ */}
                <div style={inStyles.section}>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={inStyles.fields}>Username</p>
                        <p style={inStyles.fields}>Email</p>
                    </div>
                    <div style={{ display: 'flex', flexDirection: 'column' }}>
                        <p style={inStyles.fields}>Dewan Tarikul Mannan</p>
                        <p style={inStyles.fields}>dewan@gmail.com</p>
                    </div>
                </div>
                {/* --------------------- Profile information END ------------------ */}
                <div style={{ ...inStyles.section, flexDirection: 'column' }}>
                    <h1 style={{ textAlign: 'center', marginBottom: 20 }}>My restaurants</h1>
                    {this.renderList()}
                </div>

            </div>
        );
    }
}

const inStyles = {
    container: {
        width: '1140px',
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: '30px',
        paddingBottom: '30px',
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column'
    },
    section: {
        width: '60%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        border: '1px solid black',
        padding: 20,
        borderRadius: 5,
        margin: '20px 0'
    },
    fields: { 
        padding: '10px 0' 
    }
};

const styles = {
    infoContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    infoText: {
        textTransform: 'capitalize',
        fontSize: 14
    },

    colFlex: {
        display: 'flex',
        flexDirection: 'column',
    },

    rowFlex: {
        display: 'flex',
        flexDirection: 'row',
    }
};

export default UserProfile;
