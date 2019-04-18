import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutUser } from '../actions';
import styles from '../views/Home.module.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food: '',
            area: '',
            redirect: false,
            showFoodSuggestion: false
        };
    }

    onSearch() {
        if (this.state.food || this.state.area) {
            this.setState({ redirect: true });
        }
    }

    handleLogout() {
        this.props.logoutUser();
    }

    redirectSearch() {
        if (this.state.redirect) {
            return (
                <Redirect
                    to={{
                        pathname: '/main/restaurants/search',
                        state: {
                            area: this.state.area.toLowerCase(),
                            food: this.state.food.toLowerCase()
                        }
                    }}
                />
            );
        }
    }

    onChangeInput(type, event) {
        this.setState({ [type]: event.target.value });
    }

    onSuggestionClick = e => {
        console.log(e.target.innerText);
        this.setState({ food: e.target.innerText, showFoodSuggestion: false });
        this.foodSuggestion.style.opacity = 0;
        this.foodSuggestion.style.pointerEvents = 'none';
        this.foodSearch.style.borderRadius = '35px';
        this.foodSearch.style.borderTopRightRadius = 0;
        this.foodSearch.style.borderBottomRightRadius = 0;
    };

    onSearchFocus() {
        this.foodSearch.style.borderRadius = 0;
        this.setState({ showFoodSuggestion: true });
        this.foodSuggestion.style.opacity = 1;
        this.foodSuggestion.style.pointerEvents = 'all';
    }

    renderAuthComp() {
        // renders signin components
        return (
            <li className={styles.mainNavList}>
                <Link to='/auth'>Sign in</Link>
            </li>
        );
    }

    renderWelcomeComp() {
        // renders post-login comp
        return (
            <li className={`${styles.mainNavList} ${styles.dropDown}`}>
                <Link
                    className={`${styles.navlink} ${styles.navlistlink}`}
                    to='/'
                >
                    Welcome
                    <i className='fa fa-caret-down' />{' '}
                </Link>
                <ul className={styles.dropDownContent}>
                    <li className={styles.dropBox}>
                        <Link to='/'>Your Profile</Link>
                    </li>
                    <li className={styles.dropBox}>
                        <Link to='/' onClick={this.handleLogout.bind(this)}>Sign Out</Link>
                    </li>
                </ul>
            </li>
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
            <header className={styles.header} style={{ position: 'relative' }}>
                <nav>
                    <div className={styles.row}>
                        <ul className={styles.mainNav}>
                            <li className={styles.mainNavList}>
                                <Link to='/'>About us</Link>
                            </li>
                            <li className={styles.mainNavList}>
                                <Link to='/'>Food Photography</Link>
                            </li>
                            <li className={styles.mainNavList}>
                                <Link to='/'>Blog</Link>
                            </li>
                            {/* sign in here */}
                            {this.renderAuthOrWelcome()}
                        </ul>
                    </div>
                </nav>
                <div className={styles.frontText}>
                    <Link
                        className={`${styles.btn} ${styles.btnDark}`}
                        to='/'
                        onClick={this.onSearch.bind(this)}
                    >
                        <i className='fa fa-search' />
                    </Link>
                </div>

                <div>
                    <form>
                        <div className={styles.bigSearchContainer}>
                            <input
                                type='text'
                                name='search by food'
                                placeholder='Search by Food'
                                className={styles.bigSearch}
                                value={this.state.food}
                                onChange={e => this.onChangeInput('food', e)}
                                spellCheck={false}
                                onFocus={this.onSearchFocus.bind(this)}
                                ref={comp => (this.foodSearch = comp)}
                            />
                            <ul
                                className={styles.foodSuggestion}
                                ref={comp => (this.foodSuggestion = comp)}
                            >
                                <li onClick={this.onSuggestionClick}>Burger</li>
                                <li onClick={this.onSuggestionClick}>Pizza</li>
                                <li onClick={this.onSuggestionClick}>
                                    Biriyani
                                </li>
                            </ul>
                        </div>

                        <div className={styles.smallSearchContainer}>
                            <input
                                type='text'
                                className={styles.smallSearch}
                                name='Location'
                                placeholder='Location'
                                value={this.state.area}
                                onChange={e => this.onChangeInput('area', e)}
                            />
                        </div>
                    </form>
                </div>
                {this.redirectSearch()}
            </header>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(mapStateToProps, { logoutUser })(Home);
