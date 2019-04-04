import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { RestaurantCard } from '../components/RestaurantCard';
import styles from '../views/SearchResult.module.css';

class SearchResult extends Component {
    render() {
        return (
            <div className={styles.all}>
                <nav>
                    <div className={styles.row}>
                        <ul className={styles.nav}>
                            <Link
                                className={`${styles.btn} ${styles.navlist}`}
                                to='/'
                            >
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
                <div
                    id='main'
                    style={{
                        marginLeft: 'auto',
                        marginRight: 'auto',
                        width: 1140,
                        paddingTop: 30,
                        paddingBottom: 30
                    }}
                >
                    <section style={{ float: 'left', width: '25%' }}>
                        <div className={styles.filterBlock}>
                            <span className={styles.orange}>
                                Tags <br />
                                <br />
                            </span>
                            <span className={styles.Tags}>
                                Burgers
                                <span>
                                    <Link className={styles.cross} to='/'>
                                        {' '}
                                        x
                                    </Link>
                                </span>
                            </span>
                            <span className={styles.Tags}>
                                Uttara
                                <span>
                                    <Link className={styles.cross} to='/'>
                                        {' '}
                                        x
                                    </Link>
                                </span>
                            </span>

                            <br />

                            <span className={styles.orange}>
                                <br />
                                <br /> Sort by <br /> <br />
                            </span>
                            <span>
                                <Link className={styles.Ash} to='/'>
                                    Popularity
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    rating
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Price
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Distance
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Recently Added
                                </Link>{' '}
                                <br />
                            </span>

                            <span className={styles.orange}>
                                <br />
                                <br /> Restaurant Type <br /> <br />
                            </span>
                            <span className={styles.Ash}>
                                <Link className={styles.Ash} to='/'>
                                    Fine Dinning
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Fast food
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Food Cart
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Rooptop
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Poolside
                                </Link>{' '}
                                <br />
                            </span>

                            <span className={styles.orange}>
                                <br />
                                <br /> Location <br /> <br />
                            </span>
                            <span className={styles.Ash}>
                                <Link className={styles.Ash} to='/'>
                                    Uttara
                                </Link>
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Banani
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Dhanmondi
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Mohammadpur
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Mirpur
                                </Link>{' '}
                                <br />
                                <Link className={styles.Ash} to='/'>
                                    Khilgaon
                                </Link>{' '}
                                <br />
                            </span>
                        </div>
                    </section>
                    {/*Restaurant Block */}
                    <div className={styles.Restaurants}>
                        <RestaurantCard name='Takeout' />
                        <RestaurantCard name='Chillox' />
                        <RestaurantCard name='Mr. Manik' />
                    </div> {/* res block end */}
                    {/*Sidebar */}
                    <div style={{ float: 'left', width: '25%' }}>
                        <div className={styles.sideBlock}>
                            <p style={{ marginBottom: 10 }}>Nearby Restaurants</p>
                            <div className={styles.nearby}>
                                <img
                                    alt=''
                                    className={styles.divImg}
                                    src='/images/css/Madchef.jpg'
                                />
                                <h5>Madchef</h5>
                                <h6>Sector 13</h6>
                            </div>
                            <div className={styles.nearby}>
                                <img
                                    alt=''
                                    className={styles.divImg}
                                    src='/images/css/Madchef.jpg'
                                />
                                <h5>Khana's</h5>
                                <h6>Sector 13</h6>
                            </div>
                            <div className={styles.nearby}>
                                <img
                                    alt=''
                                    className={styles.divImg}
                                    src='/images/css/Madchef.jpg'
                                />
                                <h5>Mr.Manik</h5>
                                <h6>Sector 13</h6>
                            </div>
                            <div className={styles.nearby}>
                                <img
                                    alt=''
                                    className={styles.divImg}
                                    src='/images/css/Madchef.jpg'
                                />
                                <h5>Mumins Foods</h5>
                                <h6>Sector 13</h6>
                            </div>
                        </div>
                        <div className={styles.sideBlock}>
                            <p style={{ marginBottom: 10 }}>Featured Restaurants</p>
                            <div className={styles.nearby}>
                                <img
                                    alt=''
                                    className={styles.divImg}
                                    src='/images/css/Madchef.jpg'
                                />
                                <h5>Madchef</h5>
                                <h6>Uttara</h6>
                            </div>
                            <div className={styles.nearby}>
                                <img
                                    alt=''
                                    className={styles.divImg}
                                    src='/images/css/Madchef.jpg'
                                />
                                <h5>Khana's</h5>
                                <h6>Banani</h6>
                            </div>
                            <div className={styles.nearby}>
                                <img
                                    alt=''
                                    className={styles.divImg}
                                    src='/images/css/Madchef.jpg'
                                />
                                <h5>Mr.Manik</h5>
                                <h6>Dhanmondi</h6>
                            </div>
                            <div className={styles.nearby}>
                                <img
                                    alt=''
                                    className={styles.divImg}
                                    src='/images/css/Madchef.jpg'
                                />
                                <h5>Mumins Foods</h5>
                                <h6>Mirpur</h6>
                            </div>
                            
                        </div>
                    </div>{' '}
                    {/* end of sidebar container */}
                    
                </div>{' '}
                {/* end of main content block */}
                <div style={{ clear: 'both' }} /> {/* IMPORTANT: DO NOT TAMPER */}
            </div> /* End of container div */
        );
    }
}

export default SearchResult;
