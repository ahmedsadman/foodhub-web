import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styles from '../views/components/Navbar.module.css';

class Navbar extends Component {
    componentDidMount() {
        console.log('inside navbar');
        console.log(this.props.auth);
    }
    
    render() {
        return (
            <div className={styles.row}>
                <ul className={styles.nav}>
                    <Link className={`${styles.btn} ${styles.navlist}`} to='/'>
                        {' '}
                        <i className='fa fa-search' />{' '}
                    </Link>
                    <li className={`${styles.navlist} ${styles.navInput}`}>
                        <input
                            type='text'
                            name='location'
                            className={styles.smallSearch}
                            placeholder='location'
                        />
                    </li>
                    <li className={`${styles.navlist} ${styles.navInput}`}>
                        <input
                            type='text'
                            name='search by food'
                            className={styles.bigSearch}
                            placeholder='search by food'
                        />
                    </li>
                    <li className={styles.navlist}>
                        {' '}
                        <Link
                            className={`${styles.navlink} ${
                                styles.navlistlink
                            }`}
                            to='/'
                        >
                            Sign in
                        </Link>
                    </li>
                    <li className={styles.navlist}>
                        {' '}
                        <Link
                            className={`${styles.navlink} ${
                                styles.navlistlink
                            }`}
                            to='/'
                        >
                            Blog
                        </Link>
                    </li>

                    <li className={styles.navlist}>
                        {' '}
                        <Link
                            className={`${styles.navlink} ${
                                styles.navlistlink
                            }`}
                            to='/'
                        >
                            Food Photography
                        </Link>
                    </li>
                    <li className={styles.navlist}>
                        {' '}
                        <Link
                            className={`${styles.navlink} ${
                                styles.navlistlink
                            }`}
                            to='/'
                        >
                            About us
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(
    mapStateToProps,
    {}
)(Navbar);
