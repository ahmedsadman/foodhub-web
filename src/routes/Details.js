import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { connect } from 'react-redux';
import axios from 'axios';
import ReviewBox from '../components/ReviewBox';
import FeatureLabel from '../components/FeatureLabel';
import { api } from '../utils/api';
import styles from '../views/Details.module.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import Modal from '../components/common/Modal';
import RatingModal from '../components/RatingModal';

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
        this.state = {
            data: {
                review: {},
                social: {},
                address: {},
                features: {}
            },
            loading: false,
            showModal: false,
            foodRating: 0,
            environmentRating: 0,
            serviceRating: 0,
            priceRating: 0
        };
    }

    componentDidMount() {
        this.fetchDetails();
    }

    handleReviewButton = () => {
        this.setState({ showModal: !this.state.showModal });
    };

    onChangeRating = (rating, name) => {
        this.setState({ [name]: rating });
    };

    getRatingComment(rating) {
        if (rating >= 4.8) return 'Top of Class';
        else if (rating >= 4.5) return 'Perfect';
        else if (rating >= 4.0) return 'Satisfactory';
        else if (rating >= 3.5) return 'Not Satisfactory';
        else return 'Mediocore';
    }

    async fetchDetails() {
        this.setState({ loading: true });
        const params = {
            id: this.props.match.params.id
        };

        try {
            const response = await axios.get(api.restaurantDetails, { params });
            console.log(response.data.data);
            this.setState({ loading: false, data: response.data.data });
        } catch (e) {
            console.log(e);
            this.setState({ loading: false });
        }
    }

    getRatingBarStyle(rating) {
        const width = (rating / 5) * 100;
        return {
            width: `${width}%`
        };
    }

    renderRatingBox() {
        const { data } = this.state;
        return (
            <RatingModal
                data={data}
                onSubmit={this.handleReviewButton}
                onExit={this.handleReviewButton}
                onChangeRating={this.onChangeRating}
                foodRating={this.state.foodRating}
                environmentRating={this.state.environmentRating}
                serviceRating={this.state.serviceRating}
                priceRating={this.state.priceRating}
            />
        );
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

    renderReviewButton() {
        if (this.props.isLoggedIn) {
            return (
                <div
                    className={styles.button}
                    style={{ cursor: 'pointer' }}
                    onClick={this.handleReviewButton}
                >
                    <Link
                        className={styles.btn}
                        to={this.props.location.pathname}
                    >
                        Add Review
                    </Link>
                </div>
            );
        }
        return null;
    }

    render() {
        const { data } = this.state;
        return (
            <div className={styles.all}>
                {/* ------------ Rating Modal Start --------------- */}
                <Modal show={this.state.showModal}>
                    {this.renderRatingBox()}
                </Modal>
                {/* ------------ Rating Modal End --------------- */}
                <div id='main' style={inStyle.container}>
                    <div className={styles.box}>
                        <div className={styles.pic}>
                            <img
                                src={
                                    data.banner_image ||
                                    '/images/css/Mockcover.jpg'
                                }
                                style={{ height: 500 }}
                                alt=''
                            />
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
                                    {data.social.contact}
                                    <br />
                                    <br />
                                </div>
                                <div className={styles.orange}>Socials</div>
                                <div className={styles.ash}>
                                    <a
                                        href={data.social.facebook}
                                        target='blank'
                                    >
                                        Facebook
                                    </a>
                                    <br />
                                    <a
                                        href={data.social.instagram}
                                        target='blank'
                                    >
                                        Instagram
                                    </a>
                                    <br />
                                    <br />
                                </div>
                                <div className={styles.orange}>Address</div>
                                <div
                                    className={styles.ash}
                                    style={{ textTransform: 'capitalize' }}
                                >
                                    {`${data.address.district}, ${
                                        data.address.area
                                    }`}
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
                                    <div
                                        style={{ textTransform: 'capitalize' }}
                                    >
                                        {data.name}
                                    </div>
                                    <div
                                        style={{
                                            fontSize: '70%',
                                            padding: 5,
                                            backgroundColor: '#ddd',
                                            borderRadius: 5,
                                            margin: '0 10px'
                                        }}
                                    >
                                        {data.review.average &&
                                            data.review.average.toFixed(1)}
                                    </div>
                                </div>
                                <div className={styles.rating}>
                                    <div
                                        className={`${styles.food} ${
                                            styles.orange
                                        }`}
                                    >
                                        Food
                                        <span
                                            className={styles.individualRating}
                                        >
                                            {data.review.food &&
                                                data.review.food.toFixed(1)}
                                        </span>
                                        <div className={styles.outerBar}>
                                            <div
                                                className={styles.innerBar}
                                                style={this.getRatingBarStyle(
                                                    data.review.food
                                                )}
                                            />
                                        </div>
                                        <div
                                            className={`${styles.small} ${
                                                styles.ash
                                            }`}
                                        >
                                            {this.getRatingComment(
                                                data.review.food
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.environment} ${
                                            styles.orange
                                        }`}
                                    >
                                        Environment
                                        <span
                                            className={styles.individualRating}
                                        >
                                            {data.review.environment &&
                                                data.review.environment.toFixed(
                                                    1
                                                )}
                                        </span>
                                        <div className={styles.outerBar}>
                                            <div
                                                className={styles.innerBar}
                                                style={this.getRatingBarStyle(
                                                    data.review.environment
                                                )}
                                            />
                                        </div>
                                        <div
                                            className={`${styles.small} ${
                                                styles.ash
                                            }`}
                                        >
                                            {this.getRatingComment(
                                                data.review.environment
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.service} ${
                                            styles.orange
                                        }`}
                                    >
                                        Service
                                        <span
                                            className={styles.individualRating}
                                        >
                                            {data.review.service &&
                                                data.review.service.toFixed(1)}
                                        </span>
                                        <div className={styles.outerBar}>
                                            <div
                                                className={styles.innerBar}
                                                style={this.getRatingBarStyle(
                                                    data.review.service
                                                )}
                                            />
                                        </div>
                                        <div
                                            className={`${styles.small} ${
                                                styles.ash
                                            }`}
                                        >
                                            {this.getRatingComment(
                                                data.review.service
                                            )}
                                        </div>
                                    </div>
                                    <div
                                        className={`${styles.price} ${
                                            styles.orange
                                        }`}
                                    >
                                        Price
                                        <span
                                            className={styles.individualRating}
                                        >
                                            {data.review.price &&
                                                data.review.price.toFixed(1)}
                                        </span>
                                        <div className={styles.outerBar}>
                                            <div
                                                className={styles.innerBar}
                                                style={this.getRatingBarStyle(
                                                    data.review.price
                                                )}
                                            />
                                        </div>
                                        <div
                                            className={`${styles.small} ${
                                                styles.ash
                                            }`}
                                        >
                                            {this.getRatingComment(
                                                data.review.price
                                            )}
                                        </div>
                                    </div>
                                </div>
                                {this.renderReviewButton()}
                            </div>
                            <div className={styles.rightBar}>
                                <div className={styles.orange}>Price Range</div>
                                <div className={styles.ash}>
                                    ৳0 - ৳200
                                    <br />
                                    <br />
                                </div>

                                <div className={styles.medium}>
                                    <FeatureLabel
                                        label='Air Conditioned'
                                        feature={data.features.ac}
                                        styles={styles}
                                    />
                                    <FeatureLabel
                                        label='Takes Reservations'
                                        feature={data.features.reservation}
                                        styles={styles}
                                    />
                                    <FeatureLabel
                                        label='Wifi Available'
                                        feature={data.features.wifi}
                                        styles={styles}
                                    />
                                    <FeatureLabel
                                        label='Smoking Zone'
                                        feature={data.features.smoking_zone}
                                        styles={styles}
                                    />
                                    <FeatureLabel
                                        label='Parking Space'
                                        feature={data.features.parking}
                                        styles={styles}
                                    />
                                    <FeatureLabel
                                        label='Delivery'
                                        feature={data.features.delivery}
                                        styles={styles}
                                    />
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

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};

export default connect(
    mapStateToProps,
    {}
)(Details);
