import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../views/components/Navbar.module.css';

export const Navbar = props => {
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

                <li className={`${styles.navlist} ${styles.dropDown}`}> 
                    <Link className={`${styles.navlink} ${styles.navlistlink}`} to='/'>
                        Welcome
                        <i className='fa fa-caret-down' />{' '}
                    </Link>
                    <ul className={styles.dropDownContent} style={{ padding: 10 }}>
                        <li style={{ width: '100%' }}>
                            <Link  className={`${styles.navlink} ${styles.navlistlink}`} style={{ width: '100%' }} to= '/'>Your Profile</Link>
                        </li>
                        <li style={{ width: '100%' }}>
                            <Link className={`${styles.navlink} ${styles.navlistlink}`} style={{ width: '100%' }} to= '/'>Sign Out</Link>
                        </li>
                        
                    </ul>
                </li>
                
                <li className={styles.navlist}>
                    {' '}
                    <Link
                        className={`${styles.navlink} ${styles.navlistlink}`}
                        to='/'
                    >
                        Sign in
                    </Link>
                </li>
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
};
