import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { logoutUser } from '../actions';
import styles from '../views/Home.module.css';
import { history } from '../utils/history';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food: '',
            area: '',
            redirect: false,
            showFoodSuggestion: false
        };
        this.swal = withReactContent(Swal);
    }

    componentDidMount() {
        const { state } = this.props.location;
        if (state && state.isLogin) {
            this.showToast('success', 'Login successful');
        } else if (state && state.isLogout) {
            this.showToast('success', 'Logout successful');
        }

        // reset the state
        history.replace({
            pathname: this.props.location.pathname,
            state: {}
        });
    }

    onSearch() {
        if (this.state.food || this.state.area) {
            this.setState({ redirect: true });
        }
    }

    showToast(type, text) {
        this.swal.fire({
            type,
            text,
            toast: true,
            showConfirmButton: false,
            timer: 3000,
            position: 'top'
        });
    }

    handleLogout() {
        this.props.logoutUser();
        this.showToast('success', 'Logged out successfully');
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
            <div style={{ display: 'inline-block' }}>
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
                            <Link to='/main/profile'>Your Profile</Link>
                        </li>
                        <li className={styles.dropBox}>
                            <Link to='/' onClick={this.handleLogout.bind(this)}>
                                Sign Out
                            </Link>
                        </li>
                    </ul>
                </li>
                <li className={`${styles.mainNavList}`}>
                    <Link to='/main/cart'>
                        <i className='fa fa-shopping-cart' />{' '}
                    </Link>
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
            <div className={styles.all}>
                <header className={styles.header} style={{ position: 'relative' }}>
                    <nav>
                        <div className={styles.row}>
                        <img  className={styles.logo} src='/images/css/homeLogo.png' />
                            <ul className={styles.mainNav}>
                            
                                <li className={styles.mainNavList}>
                                    <Link to='/'>About us</Link>
                                </li>
                                <li className={styles.mainNavList}>
                                    <Link to='/'>Food Photography</Link>
                                </li>
                                <li className={styles.mainNavList}>
                                    <Link to='/main/blog'>Blog</Link>
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
                
                <div className={styles.middle}>
                    
                    <div className={styles.quickSearch}>
                        <div className={styles.item}>
                            <img className={styles.itemImg} src='/images/css/Burger.jpg'/>
                            Burger
                        </div>
                        <div className={styles.item}>
                            <img className={styles.itemImg} src='/images/css/Pizza.jpg'/>
                            Pizza
                        </div>
                        <div className={styles.item}>
                            <img className={styles.itemImg} src='/images/css/Burger.jpg'/>
                            Pasta
                        </div>
                        <div className={styles.item}>
                            <img className={styles.itemImg} src='/images/css/Coffee.jpg'/>
                            Coffee
                        </div>
                        <div className={styles.item}>
                            <img className={styles.itemImg} src='/images/css/Burger.jpg'/>
                            Pocket Friendly
                        </div>
                        <div className={styles.item}>
                            <img className={styles.itemImg} src='/images/css/Burger.jpg'/>
                            Delivery
                        </div>
                    </div>

                    <div className={styles.offerBlock}>
                        <div className={styles.heading}>
                            Top Offers Today
                        </div>
                        <div className={styles.offers}>
                            <div className={styles.largeOffer}>
                                <img className={styles.largeOfferImg} src='/images/css/offer-1.jpg'/>
                                <div className={`${styles.orange} ${styles.large}`}>
                                        20% off on cheese burgers!!
                                </div>
                                <div className={`${styles.ash} ${styles.medium}`}>
                                        Follow me. Let's get cheesy...
                                </div>
                            </div>
                            <div className={styles.smallOfferleft}>

                                <div className={styles.smallOffer}>
                                    <img className={styles.smallOfferImg} src='/images/css/offer-2.jpg'/>
                                    <div>
                                        <div className={`${styles.orange} ${styles.medium}`}>
                                                20% off on cheese burgers!!
                                        </div>
                                        <div className={`${styles.ash} ${styles.small}`}>
                                                Follow me. Let's get cheesy...
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.smallOffer}>
                                    <img className={styles.smallOfferImg} src='/images/css/offer-2.jpg'/>
                                    <div>
                                        <div className={`${styles.orange} ${styles.medium}`}>
                                                20% off on cheese burgers!!
                                        </div>
                                        <div className={`${styles.ash} ${styles.small}`}>
                                                Follow me. Let's get cheesy...
                                        </div>
                                    </div>
                                </div>
                                
                            </div>

                            <div className={styles.smallOfferRight}>
                                <div className={styles.smallOffer}>
                                    <img className={styles.smallOfferImg} src='/images/css/offer-1.jpg'/>
                                    <div>
                                        <div className={`${styles.orange} ${styles.medium}`}>
                                                20% off on cheese burgers!!
                                        </div>
                                        <div className={`${styles.ash} ${styles.small}`}>
                                                Follow me. Let's get cheesy...
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.smallOffer}>
                                    <img className={styles.smallOfferImg} src='/images/css/offer-1.jpg'/>
                                    <div>
                                        <div className={`${styles.orange} ${styles.medium}`}>
                                                20% off on cheese burgers!!
                                        </div>
                                        <div className={`${styles.ash} ${styles.small}`}>
                                                Follow me. Let's get cheesy...
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                        </div>
                    </div>

                    <div className={styles.blogBlock}>
                        <div className={styles.heading}>
                            Top Blogs Today
                        </div>
                        <div className={styles.blogs}>
                            <div className={styles.blog}>
                                <img className={styles.blogImg} src='/images/css/blog-1.jpeg'/>
                                <div className={`${styles.orange} ${styles.Large }`}>
                                    Craving for Haleem this Ramadan?
                                </div>
                                <div className={styles.Author}>
                                    <img className={styles.authorImg} src='/images/css/Tarik.jpg' />
                                    <div className={`${styles.ash} ${styles.small } ${styles.authorInfo}`}>
                                        Tanveer Kabir<br/>
                                        May 19, 2018<br/>
                                        
                                    </div>  
                                    <div className={`${styles.icon} ${styles.orange}`}>
                                        follow
                                    </div> 
                                </div>
                            </div>

                            <div className={styles.blog}>
                                <img className={styles.blogImg} src='/images/css/blog-2.jpg'/>
                                <div className={`${styles.orange} ${styles.Large }`}>
                                New Mexican Restaurant in Dhaka
                                </div>
                                <div className={styles.Author}>
                                    <img className={styles.authorImg} src='/images/css/Tarik.jpg' />
                                    <div className={`${styles.ash} ${styles.small } ${styles.authorInfo}`}>
                                        Tanveer Iqbal<br/>
                                        May 19, 2018<br/>
                                        
                                    </div>  
                                    <div className={`${styles.icon} ${styles.orange}`}>
                                        follow
                                    </div> 
                                </div>
                            </div>

                            
                            <div className={styles.blog}>
                                <img className={styles.blogImg} src='/images/css/blog-1.jpeg'/>
                                <div className={`${styles.orange} ${styles.Large }`}>
                                    Craving for Haleem this Ramadan?
                                </div>
                                <div className={styles.Author}>
                                    <img className={styles.authorImg} src='/images/css/Tarik.jpg' />
                                    <div className={`${styles.ash} ${styles.small } ${styles.authorInfo}`}>
                                        Tanveer Kabir<br/>
                                        May 19, 2018<br/>
                                        
                                    </div>  
                                    <div className={`${styles.icon} ${styles.orange}`}>
                                        follow
                                    </div> 
                                </div>
                            </div>
                            

                        </div>
                    </div>

                </div>

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
)(Home);
