import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../views/Details.module.css';

class blog extends Component {
    render() {
        return (
            <div className={styles.all}>
                <div id='main' style={inStyle.container}>
		        {/*Main Content*/}
		        </div>
            </div>
        )
    }
}

const inStyle = {
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 1140,
        paddingTop: 30,
        paddingBottom: 30
    }
};

export default blog;
