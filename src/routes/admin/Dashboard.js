import React, { Component } from 'react';
import { Card } from '../../components/common/Card';
import styles from '../../views/admin/Dashboard.module.css';

class AdminDashboard extends Component {
    componentDidMount() {
        console.log('Component mounted');
    }

    render() {
        return (
            <div className={styles.container}>
                <h1>List of restaurants</h1>
                <div className={styles.cardContainer}>
                    <Card>
                        <p>Hello there</p>
                    </Card>
                    <Card>
                        <p>Hello there</p>
                    </Card>
                    <Card>
                        <p>Hello there</p>
                    </Card>
                    <Card>
                        <p>Hello there</p>
                    </Card>
                </div>
            </div>
        );
    }
}

export default AdminDashboard;
