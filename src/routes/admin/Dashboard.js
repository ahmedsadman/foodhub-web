import React, { Component } from 'react';
import axios from 'axios';
import { Card } from '../../components/common/Card';
import css from '../../views/admin/Dashboard.module.css';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userList: null
        };
    }

    componentDidMount() {
        this.fetchUserData();
    }

    async fetchUserData() {
        const response = await axios.get('/admin/users');
        console.log(response.data);
        this.setState({ userList: response.data.data });
    }

    async updateUserPrivilege(id, e) {
        const response = await axios.patch(`/admin/users/update/${id}`, {
            privileged: e.target.checked
        });
        console.log(response);
        this.fetchUserData();
    }

    renderUserList() {
        if (!this.state.userList) return <h1>Loading</h1>;
        return this.state.userList.map(item => {
            return (
                <Card key={item._id} style={{ margin: '3px 30px' }}>
                    <div style={styles.infoContainer}>
                        <div
                            style={{
                                ...styles.colFlex,
                                justifyContent: 'center',
                                width: '25%'
                            }}
                        >
                            <p style={styles.infoText}>Username</p>
                            <p style={styles.infoText}>{item.username}</p>
                        </div>
                        <div
                            style={{
                                ...styles.colFlex,
                                justifyContent: 'center',
                                width: '25%'
                            }}
                        >
                            <p style={styles.infoText}>Email</p>
                            <p style={styles.infoText}>{item.email}</p>
                        </div>
                        <div
                            style={{
                                ...styles.colFlex,
                                justifyContent: 'center',
                                width: '25%'
                            }}
                        >
                            <p style={styles.infoText}>Privileged</p>
                            <input
                                type='checkbox'
                                checked={item.privileged}
                                onChange={e =>
                                    this.updateUserPrivilege(item._id, e)
                                }
                            />
                        </div>
                    </div>
                </Card>
            );
        });
    }

    render() {
        return (
            <div className={css.container}>
                <h1>Users</h1>
                <div className={css.cardContainer}>{this.renderUserList()}</div>
            </div>
        );
    }
}

const styles = {
    infoContainer: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
    },

    infoText: {
        fontSize: 14
    },

    colFlex: {
        display: 'flex',
        flexDirection: 'column'
    }
};

export default AdminDashboard;
