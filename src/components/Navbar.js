import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import styles from '../views/components/Navbar.module.css';

class Navbar extends Component {
    handleLogout() {
        this.props.logoutUser();
    }

    renderAuthComp() {
        // render signin/signup components
        return (
            <li className={styles.navlist}>
                {' '}
                <Link
                    className={`${styles.navlink} ${styles.navlistlink}`}
                    to={{
                        pathname: '/auth',
                        state: {
                            from: this.props.location
                        }
                    }}
                >
                    Sign in
                </Link>
            </li>
        )
    }

    renderWelcomeComp() {
        return (
            <li className={`${styles.navlist} ${styles.dropDown}`}> 
                <Link className={`${styles.navlink} ${styles.navlistlink}`} to='/'>
                    Welcome
                    <i className='fa fa-caret-down' />{' '}
                </Link>
                <ul className={styles.dropDownContent} style={{ padding: 10 }}>
                    <li style={{ width: '100%' }}>
                        <Link  className={`${styles.navlink} ${styles.navlistlink}`} style={{ width: '100%' }} to='/'>Your Profile</Link>
                    </li>
                    <li style={{ width: '100%' }}>
                        <Link className={`${styles.navlink} ${styles.navlistlink}`} style={{ width: '100%' }} onClick={this.handleLogout.bind(this)} to='/'>Sign Out</Link>
                    </li>
                    
                </ul>
            </li>
        )
    }

    renderAuthOrWelcome() {
        if (this.props.auth.isLoggedIn) {
            return this.renderWelcomeComp();
        }
        return this.renderAuthComp();
    }

    render() {
        return (
            <div className={styles.row}>
                <div style={{ clear: 'both' }}></div>
                <ul className={styles.nav}>
                    <li>
                        <Link className={`${styles.btn} ${styles.navlist}`} to='/'>
                            {' '}
                            <i className='fa fa-search' />{' '}
                        </Link>
                    </li>
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
                    
                    {/* Sign in components here */}
                    {this.renderAuthOrWelcome()}
                    <li className={styles.navlist}>
                        {' '}
                        <Link
                            className={`${styles.navlink} ${styles.navlistlink}`}
                            to='/'
                        >
                            Blog
                        </Link>
                    </li>
    
                    <li className={styles.navlist}>
                        {' '}
                        <Link
                            className={`${styles.navlink} ${styles.navlistlink}`}
                            to='/'
                        >
                            Food Photography
                        </Link>
                    </li>
                    <li className={styles.navlist}>
                        {' '}
                        <Link
                            className={`${styles.navlink} ${styles.navlistlink}`}
                            to='/'
                        >
                            About us
                        </Link>
                    </li>
                    
                    <div style={{ clear: 'both '}}></div>
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
    { logoutUser }
)(withRouter(Navbar));
