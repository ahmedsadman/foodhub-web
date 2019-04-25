import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { api } from '../utils/api';
import { Card } from '../components/common/Card';
import { history } from '../utils/history';

class UserProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            empty: ''
        };
        this.swal = withReactContent(Swal);
    }

    componentDidMount() {
        this.fetchRestaurants();
    }

    showConfirmation(response, message) {
        let text, type, title;
        text = response ? message : 'An unexpected error occured';
        type = response ? 'success' : 'error';
        title = response ? 'Done' : 'Oops...';

        return this.swal.fire({
            type,
            title,
            text,
            allowOutsideClick: false
        });
    }

    async fetchRestaurants() {
        const params = {
            id: this.props.auth.userData._id
        };

        try {
            const response = await axios.get(api.userRestaurant, { params });
            console.log(response.data);
            this.setState({ list: response.data.data });
        } catch (e) {
            console.log(e);
        }
    }

    async removeRestaurant(item) {
        console.log(item._id);
        const params = {
            id: item._id
        };

        try {
            const response = await axios.delete(api.deleteRestaurant, {
                params
            });
            this.fetchRestaurants();
            this.showConfirmation(true, 'Restaurant deleted successfully');
        } catch (e) {
            console.log(e);
            this.showConfirmation(
                false,
                'There was an error while trying to delete the restaurant'
            );
        }
    }

    editRestaurant(item) {
        history.push({
            pathname: '/main/restaurants/edit',
            state: {
                item
            } 
        });
    }

    handleCreateRes() {
        history.push('/main/restaurants/create');
    }

    renderList() {
        if (!this.state.list.length) return <p>No restaurants found. Start by adding one</p>;
        return this.state.list.map(item => {
            return (
                <Card key={item._id} style={{ margin: '5px 0' }}>
                    <div
                        style={{
                            ...styles.infoContainer,
                            position: 'relative'
                        }}
                    >
                        <div style={styles.rowFlex}>
                            <img
                                src={item.banner_image}
                                style={{
                                    width: 80,
                                    height: 80,
                                    marginRight: 10
                                }}
                                alt=''
                            />
                            <div
                                style={{
                                    ...styles.colFlex,
                                    justifyContent: 'center'
                                }}
                            >
                                <p style={styles.infoText}>{item.name}</p>
                                <p style={styles.infoText}>{`${
                                    item.address.area
                                }, ${item.address.district}`}</p>
                            </div>
                        </div>
                        <div style={styles.colFlex}>
                            <div style={styles.rowFlex}>
                                <i
                                    className='fa fa-star'
                                    style={{
                                        fontSize: 16,
                                        marginRight: 2,
                                        color: 'green'
                                    }}
                                />
                                <p
                                    style={{
                                        ...styles.infoText,
                                        color: 'green',
                                        fontWeight: 'bold'
                                    }}
                                >
                                    {item.review.average}
                                </p>
                            </div>
                            <div
                                style={{
                                    ...styles.rowFlex,
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    position: 'absolute',
                                    bottom: 0,
                                    right: 0
                                }}
                            >
                                <i
                                    style={{
                                        marginTop: 3,
                                        marginRight: 3,
                                        cursor: 'pointer',
                                        color: 'gray',
                                        fontSize: 18
                                    }}
                                    className='fa fa-edit'
                                    onClick={() => this.editRestaurant(item)}
                                />
                                <i
                                    style={{
                                        cursor: 'pointer',
                                        color: 'gray',
                                        fontSize: 18
                                    }}
                                    className='fa fa-trash'
                                    onClick={() => this.removeRestaurant(item)}
                                />
                            </div>
                        </div>
                    </div>
                </Card>
            );
        });
    }

    render() {
        const { username, email } = this.props.auth.userData;

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
                        <p style={inStyles.fields}>{username}</p>
                        <p style={inStyles.fields}>{email}</p>
                    </div>
                </div>
                {/* --------------------- Profile information END ------------------ */}
                <div style={{ ...inStyles.section, flexDirection: 'column' }}>
                    <h2 style={{ textAlign: 'center', marginBottom: 20 }}>
                        My restaurants{' '}
                        <i
                            style={{
                                marginLeft: 10,
                                color: 'gray',
                                cursor: 'pointer'
                            }}
                            onClick={this.handleCreateRes.bind(this)}
                            className='fa fa-plus'
                        />
                    </h2>
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
        flexDirection: 'column'
    },

    rowFlex: {
        display: 'flex',
        flexDirection: 'row'
    }
};

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(
    mapStateToProps,
    {}
)(UserProfile);
