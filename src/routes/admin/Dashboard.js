import React, { Component } from 'react';
import axios from 'axios';
import { Card } from '../../components/common/Card';
import css from '../../views/admin/Dashboard.module.css';

class AdminDashboard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            response: null
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        const response = await axios.get('/restaurant/search');
        console.log(response.data);
        this.setState({ response: response.data });
    }

    renderList() {
        if (!this.state.response) return <h1>Loading</h1>;
        return this.state.response.data.map(item => {
            return (
                <Card key={item._id}>
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
            <div className={css.container}>
                <h1>List of restaurants</h1>
                <div className={css.cardContainer}>{this.renderList()}</div>
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

export default AdminDashboard;
