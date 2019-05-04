import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import { history } from '../utils/history';
import styles from '../views/components/Navbar.module.css';

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            food: '',
            area: ''
        };
    }

    handleLogout() {
        this.props.logoutUser();
    }

    handleInputChange(e, type) {
        this.setState({
            [type]: e.target.value
        });
    }

    handleSearchButton() {
        this.props.history.push({
            pathname: '/main/restaurants/search',
            state: {
                area: this.state.area.toLowerCase(),
                food: this.state.food.toLowerCase()
            }
        });
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
        );
    }

    renderWelcomeComp() {
        return (
            <div>
                <li className={`${styles.navlist}`}>
                    <Link
                        to='/main/cart'
                        className={`${styles.navlink} ${styles.navlistlink}`}
                    >
                        <i className='fa fa-shopping-cart' />{' '}
                    </Link>
                </li>
                <li className={`${styles.navlist} ${styles.dropDown}`}>
                    <Link
                        to={this.props.location.pathname}
                        className={`${styles.navlink} ${styles.navlistlink}`}
                    >
                        Welcome
                        <i className='fa fa-caret-down' />{' '}
                    </Link>
                    <ul
                        className={styles.dropDownContent}
                        style={{ padding: 10 }}
                    >
                        <li style={{ width: '100%' }}>
                            <Link
                                className={`${styles.navlink} ${
                                    styles.navlistlink
                                }`}
                                style={{ width: '100%' }}
                                to='/main/profile'
                            >
                                Your Profile
                            </Link>
                        </li>
                        <li style={{ width: '100%' }}>
                            <Link
                                className={`${styles.navlink} ${
                                    styles.navlistlink
                                }`}
                                style={{ width: '100%' }}
                                onClick={this.handleLogout.bind(this)}
                                to={{
                                    pathname: '/',
                                    state: {
                                        isLogout: true
                                    }
                                }}
                            >
                                Sign Out
                            </Link>
                        </li>
                    </ul>
                </li>
                
            </div>
        );
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
                <div style={{ clear: 'both' }} />
                <ul className={styles.nav}>
                    <li>
                        <div
                            className={`${styles.btn} ${styles.navlist}`}
                            onClick={this.handleSearchButton.bind(this)}
                        >
                            {' '}
                            <i className='fa fa-search' />{' '}
                        </div>
                    </li>
                    <li className={`${styles.navlist} ${styles.navInput}`}>
                        <input
                            type='text'
                            name='location'
                            className={styles.smallSearch}
                            placeholder='location'
                            value={this.state.area}
                            onChange={(e) => this.handleInputChange(e, 'area')}
                        />
                    </li>
                    <li className={`${styles.navlist} ${styles.navInput}`}>
                        <input
                            type='text'
                            name='search by food'
                            className={styles.bigSearch}
                            placeholder='search by food'
                            value={this.state.food}
                            onChange={(e) => this.handleInputChange(e, 'food')}
                        />
                    </li>

                    {/* Sign in components here */}
                    {this.renderAuthOrWelcome()}
                    <li className={styles.navlist}>
                        {' '}
                        <Link
                            className={`${styles.navlink} ${
                                styles.navlistlink
                            }`}
                            to='/main/blog'
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

                    <div style={{ clear: 'both ' }} />
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
