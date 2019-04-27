import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import ReviewBox from '../components/ReviewBox';
import styles from '../views/Details.module.css';
import 'react-image-gallery/styles/css/image-gallery.css';

class Details extends Component {
    constructor(props) {
        super(props);
        this.reviewSection = null;
        this.images = [
            {
                original: 'http://lorempixel.com/1000/600/nature/1/',
                thumbnail: 'http://lorempixel.com/250/150/nature/1/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/2/',
                thumbnail: 'http://lorempixel.com/250/150/nature/2/'
            },
            {
                original: 'http://lorempixel.com/1000/600/nature/3/',
                thumbnail: 'http://lorempixel.com/250/150/nature/3/'
            }
        ];
    }

    componentDidMount() {
        console.log(this.props.match.params);
    }

    handleScrollTo = elRef => {
        // Incase the ref supplied isn't ref.current
        const el = elRef.current ? elRef.current : elRef;

        // Scroll the element into view
        el.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    };

    render() {
        return (
            <div className={styles.all}>
                <div id='main' style={inStyle.container}>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img src='/images/css/Mockcover.jpg' alt='' />
                        </div>
                        <div className={styles.box1}>
                            <ul className={styles.nav}>
                                <li className={styles.navlist}>
                                    <Link
                                        className={`${styles.navlink} ${
                                            styles.navlistlink
                                        }`}
                                        to='/'
                                    >
                                        Overview
                                    </Link>
                                </li>
                                <li className={styles.navlist}>
                                    <Link
                                        className={`${styles.navlink} ${
                                            styles.navlistlink
                                        }`}
                                        to='/'
                                    >
                                        Order Online
                                    </Link>
                                </li>
                                <li className={styles.navlist}>
                                    <Link
                                        className={`${styles.navlink} ${
                                            styles.navlistlink
                                        }`}
                                        to='/'
                                    >
                                        Gallery
                                    </Link>
                                </li>
                                <li className={styles.navlist}>
                                    <Link
                                        className={`${styles.navlink} ${
                                            styles.navlistlink
                                        }`}
                                        to={this.props.location.pathname}
                                        onClick={() =>
                                            this.handleScrollTo(
                                                this.reviewSection
                                            )
                                        }
                                    >
                                        Review
                                    </Link>
                                </li>

                                <div style={{ clear: 'both ' }} />
                            </ul>
                        </div>
                        <div className={styles.box2}>
                            <div className={styles.leftBar}>
                                <div className={styles.orange}>
                                    Contact Number
                                </div>
                                <div className={styles.ash}>
                                    +8801915473371
                                    <br />
                                    <br />
                                </div>
                                <div className={styles.orange}>Socials</div>
                                <div className={styles.ash}>
                                    Facebook
                                    <br />
                                    Instagram
                                    <br />
                                    <br />
                                </div>
                                <div className={styles.orange}>Address</div>
                                <div className={styles.ash}>
                                    kachukhet
                                    <br />
                                    <br />
                                </div>
                                <div className={styles.map}>
                                    Google map here!
                                </div>
                            </div>

                            <div className={styles.reviewRatings}>
                                <div
                                    style={{
                                        fontSize: '200%',
                                        fontWeight: 'bold',
                                        color: 'black',
                                        display: 'flex',
                                        flexDirection: 'row'
                                    }}
                                >
                                    <div>Takeout</div>
                                    <div style={{ fontSize: '70%', padding: 5, backgroundColor: '#ddd', borderRadius: 5, margin: '0 10px' }}>4.8</div>
                                </div>
                                <div className={styles.rating}>
                                    <div
                                        className={`${styles.food} ${
                                            styles.orange
                                        }`}
                                    >
                                        Food
                                        <span className={styles.individualRating}>4.5</span>
                                        <div
                                            className={`${styles.small} ${
                                                styles.ash
                                            }`}
                                        >
                                            Delicious Food
                                            <br />
                                            Juicy Flavours
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.environment} ${
                                            styles.orange
                                        }`}
                                    >
                                        Environment
                                        <span className={styles.individualRating}>4.5</span>
                                        <div
                                            className={`${styles.small} ${
                                                styles.ash
                                            }`}
                                        >
                                            Delicious Food
                                            <br />
                                            Juicy Flavours
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.service} ${
                                            styles.orange
                                        }`}
                                    >
                                        Service
                                        <span className={styles.individualRating}>4.5</span>
                                        <div
                                            className={`${styles.small} ${
                                                styles.ash
                                            }`}
                                        >
                                            Delicious Food
                                            <br />
                                            Juicy Flavours
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.price} ${
                                            styles.orange
                                        }`}
                                    >
                                        Price
                                        <span className={styles.individualRating}>4.5</span>
                                        <div
                                            className={`${styles.small} ${
                                                styles.ash
                                            }`}
                                        >
                                            Delicious Food
                                            <br />
                                            Juicy Flavours
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.button}>
                                    <Link className={styles.btn} to='/'>
                                        Add Review
                                    </Link>
                                </div>
                            </div>
                            <div className={styles.rightBar}>
                                <div className={styles.orange}>Price Range</div>
                                <div className={styles.ash}>
                                    ৳0 - ৳200
                                    <br />
                                    <br />
                                </div>

                                <div className={styles.medium}>
                                    <div className={styles.orange}>
                                        Air Conditioned
                                        <i className='fa fa-check-circle' />
                                        <br />
                                        <br />
                                    </div>
                                    <div className={styles.ash}>
                                        Takes reservations
                                        <i className='fa fa-times-circle' />
                                        <br />
                                        <br />
                                    </div>
                                    <div className={styles.orange}>
                                        Wifi Available
                                        <i className='fa fa-check-circle' />
                                        <br />
                                        <br />
                                    </div>
                                    <div className={styles.orange}>
                                        Smoking area
                                        <i className='fa fa-check-circle' />
                                        <br />
                                        <br />
                                    </div>
                                    <div className={styles.ash}>
                                        Parking Facility
                                        <i className='fa fa-times-circle' />
                                        <br />
                                        <br />
                                    </div>
                                    <div className={styles.orange}>
                                        Delivery
                                        <i className='fa fa-check-circle' />
                                        <br />
                                        <br />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.box3}>
                            <div className={`${styles.orange} ${styles.large}`}>
                                Offers
                                <br />
                            </div>
                            <br />
                            <br />
                            <div className={styles.offers}>
                                <div className={styles.offer}>
                                    <img src='/images/css/Offer-1.jpg' />
                                    <div className={styles.orange}>
                                        20% off!!!
                                        <br />
                                    </div>
                                    <div className={styles.ash}>
                                        Dear Beef & Bacon lovers, 24th April is
                                        exclusively yours!
                                        <br />
                                    </div>
                                </div>
                                <div className={styles.offer}>
                                    <img src='/images/css/Offer-2.jpg' />
                                    <div className={styles.orange}>
                                        20% off!!!
                                        <br />
                                    </div>
                                    <div className={styles.ash}>
                                        Make a dash for BBQ Beef Cheese on this
                                        21st April!
                                        <br />
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className={styles.box4}>
                            <div className={`${styles.orange} ${styles.large}`}>
                                Menu
                                <br />
                            </div>
                            <div className={styles.blocks}>
                                <img src='/images/css/menu-1.jpg' />
                                <img src='/images/css/menu-2.jpg' />
                                <img src='/images/css/menu-3.jpg' />
                                <img src='/images/css/menu-4.jpg' />
                                <img src='/images/css/menu-7.jpg' />
                            </div>
                            <br />
                            <br />
                            <br />
                            <br />
                        </div>
                        <div className={styles.box5}>
                            <div className={`${styles.orange} ${styles.large}`}>
                                Gallery
                                <br />
                            </div>
                            <ImageGallery
                                items={this.images}
                                additionalClass={styles.imageGallery}
                                lazyLoad={false}
                                showBullets
                                slideDuration={300}
                                slideInterval={3000}
                                showFullscreenButton={false}
                                showPlayButton={false}
                            />
                        </div>
                        <div className={styles.box6}>
                            <div className={`${styles.orange} ${styles.large}`}>
                                Reviews
                                <br />
                            </div>
                            <div
                                className={styles.reviewBlock}
                                ref={comp => (this.reviewSection = comp)}
                            >
                                <ReviewBox styles={styles} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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
