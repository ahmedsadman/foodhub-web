import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../views/SearchResult.module.css';

class SearchResult extends Component {
    render() {
        return (
            <div className={styles.all}>
                <nav>
                    <div className={styles.row}>
                        <ul className={styles.nav}>
                            <Link className={styles.btn} to='/'>
                                {' '}
                                <i className='fa fa-search' />{' '}
                            </Link>
                            <li
                                className={`${styles.navlist} ${
                                    styles.navInput
                                }`}
                            >
                                <input
                                    type='text'
                                    name='location'
                                    className={styles.smallSearch}
                                    placeholder='location'
                                />
                            </li>
                            <li
                                className={`${styles.navlist} ${
                                    styles.navInput
                                }`}
                            >
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
                </nav>

                <p className={styles.p}>Result for ‘Burger’, ‘Uttara’</p>

                {/*Filter Block*/}

                <section>
                    <div className={styles.filterBlock}>
                        <span className={styles.orange}>
                            Tags <br />
                            <br />
                        </span>
                        <span classname={styles.Tags}>Burgers</span>
                        <span classname={styles.Tags}>Uttara</span>

                        <br />

                        <span className={styles.orange}>
                            <br />
                            <br /> Sort by <br /> <br />
                        </span>
                        <span className={styles.Ash}>
                            <Link to='/'>Popularity</Link> <br />
                            <Link to='/'>rating</Link> <br />
                            <Link to='/'>Price</Link> <br />
                            <Link to='/'>Distance</Link> <br />
                            <Link to='/'>Recently Added</Link> <br />
                        </span>

                        <span className={styles.orange}>
                            <br />
                            <br /> Restaurant Type <br /> <br />
                        </span>
                        <span className={styles.Ash}>
                            <Link to='/'>Fine Dinning</Link> <br />
                            <Link to='/'>Fast food</Link> <br />
                            <Link to='/'>Food Cart</Link> <br />
                            <Link to='/'>Rooptop</Link> <br />
                            <Link to='/'>Poolside</Link> <br />
                        </span>

                        <span className={styles.orange}>
                            <br />
                            <br /> Location <br /> <br />
                        </span>
                        <span className={styles.Ash}>
                            <Link className={styles.fliterLink} to='/'>
                                Uttara
                            </Link>{' '}
                            <br />
                            <Link to='/'>Banani</Link> <br />
                            <Link to='/'>Dhanmondi</Link> <br />
                            <Link to='/'>Mohammadpur</Link> <br />
                            <Link to='/'>Mirpur</Link> <br />
                            <Link to='/'>Khilgaon</Link> <br />
                        </span>
                    </div>
                </section>

                {/*Restaurant Block */}
                <div className={styles.Restaurants}>
                    <div className={styles.resBlock}>
                        <div className={styles.left}>
                            <img
                                alt=''
                                className={styles.resImg}
                                src='/images/css/Takeout.jpg'
                            />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.large}>Takeout</div>
                            <div className={styles.small}>
                                17, Level - 3, Sonargaon Janapath, Rd No 3<br />
                                Uttara, Dhaka.
                                <br />
                                <br />
                            </div>
                            <div className={styles.medium}>
                                {' '}
                                Fast food
                                <br />
                                $$$
                                <br />
                            </div>
                            <div className={styles.orange}>Open now</div>
                        </div>
                        <span className={styles.numbers}>
                            <div className={styles.rating}>4.8</div>
                            <div className={styles.reviewCheckins}>
                                778 Reviews
                                <br />
                                2458 Check-ins
                            </div>
                            <div className={styles.icons}>
                                <Link to='/'>
                                    <i
                                        className={`${styles.icon} fa fa-phone`}
                                    />
                                </Link>
                                <Link to='/'>
                                    <i
                                        className={`${
                                            styles.icon
                                        } fa fa-envelope`}
                                    />
                                </Link>
                                <Link to='/'>
                                    <i
                                        className={`${
                                            styles.icon
                                        } fa fa-search`}
                                    />
                                </Link>
                            </div>
                        </span>
                    </div>

                    <div className={styles.resBlock}>
                        <div className={styles.left}>
                            <img
                                alt=''
                                className={styles.resImg}
                                src='/images/css/Takeout.jpg'
                            />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.large}>Takeout</div>
                            <div className={styles.small}>
                                17, Level - 3, Sonargaon Janapath, Rd No 3<br />
                                Uttara, Dhaka.
                                <br />
                                <br />
                            </div>
                            <div className={styles.medium}>
                                {' '}
                                Fast food
                                <br />
                                $$$
                                <br />
                            </div>
                            <div className={styles.orange}>Open now</div>
                        </div>
                        <span className={styles.numbers}>
                            <div className={styles.ratings}>4.8</div>
                            <div className={styles.reviewCheckins}>
                                778 Reviews
                                <br />
                                2458 Check-ins
                            </div>
                            <div className={styles.icons}>
                                <Link to='/'>
                                    <i
                                        className={`${styles.icon} fa fa-phone`}
                                    />
                                </Link>
                                <Link to='/'>
                                    <i
                                        className={`${
                                            styles.icon
                                        } fa fa-envelope`}
                                    />
                                </Link>
                                <Link to='/'>
                                    <i
                                        className={`${
                                            styles.icon
                                        } fa fa-search`}
                                    />
                                </Link>
                            </div>
                        </span>
                    </div>

                    <div className={styles.resBlock}>
                        <div className={styles.left}>
                            <img
                                alt=''
                                className={styles.resImg}
                                src='/images/css/Takeout.jpg'
                            />
                        </div>
                        <div className={styles.right}>
                            <div className={styles.large}>Takeout</div>
                            <div className={styles.small}>
                                17, Level - 3, Sonargaon Janapath, Rd No 3<br />
                                Uttara, Dhaka.
                                <br />
                                <br />
                            </div>
                            <div className={styles.medium}>
                                {' '}
                                Fast food
                                <br />
                                $$$
                                <br />
                            </div>
                            <div className={styles.orange}>Open now</div>
                        </div>
                        <span className={styles.numbers}>
                            <div className={styles.ratings}>4.8</div>
                            <div className={styles.reviewCheckins}>
                                778 Reviews
                                <br />
                                2458 Check-ins
                            </div>
                            <div className={styles.icons}>
                                <Link to='/'>
                                    <i
                                        className={`${styles.icon} fa fa-phone`}
                                    />
                                </Link>
                                <Link to='/'>
                                    <i
                                        className={`${
                                            styles.icon
                                        } fa fa-envelope`}
                                    />
                                </Link>
                                <Link to='/'>
                                    <i
                                        className={`${
                                            styles.icon
                                        } fa fa-search`}
                                    />
                                </Link>
                            </div>
                        </span>
                    </div>
                </div>

                {/*Sidebar */}
                <div className={styles.nearbyBlock}>
                    Nearby Restaurants in Uttara
                    <div className={styles.nearby}>
                        <img
                            alt=''
                            classname={styles.divImg}
                            src='/images/css/Madchef.jpg'
                        />
                        <h5>Madchef</h5>
                        <h6>Sector 13</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img
                            alt=''
                            classname={styles.divImg}
                            src='/images/css/Madchef.jpg'
                        />
                        <h5>Khana's</h5>
                        <h6>Sector 13</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img
                            alt=''
                            classname={styles.divImg}
                            src='/images/css/Madchef.jpg'
                        />
                        <h5>Mr.Manik</h5>
                        <h6>Sector 13</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img
                            alt=''
                            classname={styles.divImg}
                            src='/images/css/Madchef.jpg'
                        />
                        <h5>Mumins Foods</h5>
                        <h6>Sector 13</h6>
                    </div>
                </div>

                <div className={styles.featuredBlock}>
                    Featured Restaurants
                    <div className={styles.nearby}>
                        <img
                            alt=''
                            classname={styles.divImg}
                            src='/images/css/Madchef.jpg'
                        />
                        <h5>Madchef</h5>
                        <h6>Uttara</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img
                            alt=''
                            classname={styles.divImg}
                            src='/images/css/Madchef.jpg'
                        />
                        <h5>Khana's</h5>
                        <h6>Banani</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img
                            alt=''
                            classname={styles.divImg}
                            src='/images/css/Madchef.jpg'
                        />
                        <h5>Mr.Manik</h5>
                        <h6>Dhanmondi</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img
                            alt=''
                            classname={styles.divImg}
                            src='/images/css/Madchef.jpg'
                        />
                        <h5>Mumins Foods</h5>
                        <h6>Mirpur</h6>
                    </div>
                </div>
            </div>
        );
    }
}

export default SearchResult;
