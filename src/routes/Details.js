import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../views/Details.module.css';

class Details extends Component {
    render() {
        return (
            <div className={styles.all}>
                <div id='main' style={inStyle.container}>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                        
                        <img src='/images/css/Mockcover.jpg' />
                        
                        
                        

                        </div>
                        <div className={styles.box1}>
                            <ul className={styles.nav}>
                                <li className={styles.navlist}>
                                    <Link className={`${styles.navlink} ${styles.navlistlink}`} to='/'>
                                        Overview
                                    </Link>
                                </li>
                                <li className={styles.navlist}>
                                    <Link className={`${styles.navlink} ${styles.navlistlink}`} to='/'>
                                        Order Online
                                    </Link>
                                </li>
                                <li className={styles.navlist}>
                                    <Link className={`${styles.navlink} ${styles.navlistlink}`} to='/'>
                                        Book a Table
                                    </Link>
                                </li>
                                <li className={styles.navlist}>
                                    <Link className={`${styles.navlink} ${styles.navlistlink}`} to='/'>
                                        Gallery
                                    </Link>
                                </li>
                                <li className={styles.navlist}>
                                    <Link className={`${styles.navlink} ${styles.navlistlink}`} to='/'>
                                        Review
                                    </Link>
                                </li>
                                
                                <div style={{ clear: 'both '}}></div>    
                            </ul>
                        </div>
                        <div className={styles.box2}>
                            <div className={styles.leftBar}>
                                <div className={styles.orange}>
                                    Contact Number
                                </div>
                                <div className={styles.ash}>
                                    +8801915473371
                                    <br/><br/>
                                </div>
                                <div className={styles.orange}>
                                    Speciality
                                </div>
                                <div className={styles.ash}>
                                    Burgers
                                    <br/><br/>
                                </div>
                                <div className={styles.orange}>
                                    Address
                                </div>
                                <div className={styles.ash}>
                                    kachukhet
                                    <br/><br/>
                                </div>
                                <div className={styles.map}>
                                    Google map here!
                                </div>
                            </div>

                            <div className={styles.reviewRatings}>
                                <div className={`${styles.heading} ${styles.orange}`}>
                                    What people like here
                                </div>
                                <div className={styles.rating}> 
                                    <div className={`${styles.food} ${styles.orange}`}>
                                    Food
                                        <div className={styles.bar}>
                                        ..
                                        </div>
                                        <div className={`${styles.small} ${styles.ash}`}>
                                            Delicious Food<br/>
                                            Juicy Flavours  
                                        </div> 

                                    </div>
                                    <div className={`${styles.environment} ${styles.orange}`}>
                                    Environment
                                        <div className={styles.bar}>
                                        ..
                                        </div>
                                        <div className={`${styles.small} ${styles.ash}`}>
                                            Delicious Food<br/>
                                            Juicy Flavours  
                                        </div>
                                    </div>
                                    <div className={`${styles.service} ${styles.orange}`}>
                                    Service
                                        <div className={styles.bar}>
                                        ..
                                        </div>
                                        <div className={`${styles.small} ${styles.ash}`}>
                                            Delicious Food<br/>
                                            Juicy Flavours  
                                        </div>
                                    </div>
                                    <div className={`${styles.price} ${styles.orange}`}>
                                    Price
                                        <div className={styles.bar}>
                                        ..
                                        </div>
                                        <div className={`${styles.small} ${styles.ash}`}>
                                            Delicious Food<br/>
                                            Juicy Flavours  
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.button}>
                                    <Link className={styles.btn} to ='/'>Rate & Review it</Link>
                                </div>
                                
                                
                            </div>
                            <div className={styles.rightBar}>
                                <div className={styles.orange}>
                                    Price Range
                                </div>
                                <div className={styles.ash}>
                                    ৳0 - ৳200<br/><br/>
                                </div>
                                <div className={styles.orange}>
                                    Payment options
                                </div>
                                <div className={styles.payment}>
                                    <img src='/images/css/Bkash.png' />
                                    <img src='/images/css/Rocket.png' />
                                    <img src='/images/css/Visa.png' />
                                    
                                </div>

                                <br/> <br/>
                                <div className={styles.medium}>
                                    <div className={styles.orange}>
                                    Air Conditioned
                                    <i className='fa fa-check-circle' /><br/><br/>
                                    </div>
                                    <div className={styles.ash}>
                                    Takes reservations
                                    <i className='fa fa-times-circle' /><br/><br/>
                                    </div>
                                    <div className={styles.orange}>
                                    Wifi Available
                                    <i className='fa fa-check-circle' /><br/><br/>
                                    </div>
                                    <div className={styles.orange}>
                                    Smoking area
                                    <i className='fa fa-check-circle' /><br/><br/>
                                    </div>
                                    <div className={styles.ash}>
                                    Parking Facility
                                    <i className='fa fa-times-circle' /><br/><br/>
                                    </div>
                                    <div className={styles.orange}>
                                    Delivery
                                    <i className='fa fa-check-circle' /><br/><br/>
                                    </div>
                                                                    
                                </div>
                            </div>


                        </div>
                        <div className={styles.box3}>
                            <div className={`${styles.orange} ${styles.large}`}>
                                    Offers<br/>
                            </div>
                            <br/><br/>
                            <div className={styles.offers}>
                                <div className={styles.offer}>

                                    <img src='/images/css/Offer-1.jpg' />
                                    <div className={styles.orange}>
                                          20% off!!!<br/>
                                    </div>
                                    <div className={styles.ash}>
                                          Dear Beef & Bacon lovers, 24th April is exclusively yours!<br/>
                                    </div>
                                    
                                </div>
                                <div className={styles.offer}>

                                    <img src='/images/css/Offer-2.jpg' />
                                    <div className={styles.orange}>
                                        20% off!!!<br/>
                                    </div>
                                    <div className={styles.ash}>
                                        Make a dash for BBQ Beef Cheese on this 21st April!<br/>
                                    </div>

                                </div>
                            </div>
                            <br/><br/><br/><br/>
                        </div>
                        <div className={styles.box4}>
                            <div className={`${styles.orange} ${styles.large}`}>
                                    Menu<br/>
                            </div>
                            <div className={styles.blocks}>
                                <img src='/images/css/menu-1.jpg' />
                                <img src='/images/css/menu-2.jpg' />
                                <img src='/images/css/menu-3.jpg' />
                                <img src='/images/css/menu-4.jpg' />
                                <img src='/images/css/menu-7.jpg' />
                            </div>
                            <br/><br/><br/><br/>
                        </div>
                        <div className={styles.box5}>
                            <div className={`${styles.orange} ${styles.large}`}>
                                    Gallery<br/>
                            </div>
                            <div className={styles.blocks}>
                                <img src='/images/css/photo-1.png' />
                                <img src='/images/css/photo-2.png' />
                                <img src='/images/css/photo-3.png' />
                            </div>
                            <br/><br/><br/><br/>
                        </div>
                        <div className={styles.box6}>
                            <div className={`${styles.orange} ${styles.large}`}>
                                    Reviews<br/>
                            </div>
                            <div className={styles.reviewBlock}>

                                <div className={styles.top}>

                                    <div className={styles.intro}>
                                        <img className={styles.proPic} src='/images/css/Tarik.jpg' />
                                            <div>
                                            <h3 className={styles.orange}> 
                                                Dewan Tarikul Mannan
                                            </h3>
                                            <h5 className={styles.ash}>
                                                234 reviews, 47 followers
                                            </h5>
                                        </div>
                                    </div> 
                                    <div className={styles.icon}>
                                        <Link to='/'>
                                            <i className='fa fa-thumbs-up' />
                                        </Link>
                                        <Link to='/'>
                                        <i className='fa fa-user-plus' />
                                        </Link>
                                    </div>   
                                </div>
                                <div className={styles.comment}>
                                    <h4 Classname={styles.black}>
                                    Rated
                                    </h4>
                                    <h7>4.8</h7>
                                    Amazing Place! Nice Ambience. The best part is premium quality burgers at such moderate cost. And the cold coffee is best. Best place for students. 


                                </div>    
                            </div>
                        </div>
                    </div>

                    
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

export default Details;
