import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ImageGallery from 'react-image-gallery';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import axios from 'axios';
import ReviewBox from '../components/ReviewBox';
import FeatureLabel from '../components/FeatureLabel';
import { api } from '../utils/api';
import styles from '../views/Details.module.css';
import 'react-image-gallery/styles/css/image-gallery.css';
import Modal from '../components/common/Modal';
import RatingModal from '../components/RatingModal';
import OrderModal from '../components/OrderModal';
import { addProduct, removeProduct, modifyQuantity, setCart } from '../actions';

class Details extends Component {
    constructor(props) {
        super(props);
        this.reviewSection = null;
        this.swal = withReactContent(Swal);
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
                features: {},
                menu: [],
                images: [],
                restaurant_type: []
            },
            sliderImages: [],
            reviews: [],
            loading: false,
            showRatingModal: false,
            showOrderModal: false,
            foodRating: 0,
            environmentRating: 0,
            serviceRating: 0,
            priceRating: 0,
            comment: '',
            reviewDone: false
        };
    }

    componentDidMount() {
        this.fetchDetails();
        this.getReviews({});
        this.setReviewState();
    }

    showConfirmation(response, message, errMessage = null, toast = false) {
        let text, type, title;
        text = response ? message : errMessage || 'An unexpected error occured';
        type = response ? 'success' : 'error';
        title = response ? 'Done' : 'Oops...';

        return this.swal.fire({
            type,
            title,
            text,
            allowOutsideClick: false,
            toast,
            position: toast ? 'top' : 'center',
            showConfirmButton: toast ? false : true,
            timer: toast ? 3000 : null
        });
    }

    handleReviewButton = () => {
        this.setState({ showRatingModal: !this.state.showRatingModal });
    };

    handleOrderButton = () => {
        this.setState({ showOrderModal: !this.state.showOrderModal });
    };

    handleOrderExit = async () => {
        // show confirmation that cart will be reset on exit
        const res = await this.swal.fire({
            text: 'Items on the cart will be reset. Are you sure you want to exit?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            confirmButtonColor: '#d33'
        });
        if (res.value) {
            await this.props.setCart([]);
            this.handleOrderButton();
        }
    }

    onChangeRating = (rating, name) => {
        this.setState({ [name]: rating });
    };

    onChangeComment = e => {
        this.setState({ comment: e.target.value });
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

            // parse the image list for image gallery
            const imageList = response.data.data.images;
            const sliderImages = [];
            
            for (let img of imageList) {
                const imageObj = {
                    original: img,
                    thumbnail: img
                }
                sliderImages.push(imageObj);
            }

            this.setState({ loading: false, data: response.data.data, sliderImages });
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

    getReviews = async params => {
        try {
            // url for review and getReview restaurant is same, only method is different
            const response = await axios.get(
                api.reviewRestaurant(this.props.match.params.id),
                { params }
            );
            console.log(response.data);

            // if param is not passed, it means we want all reviews, so update the state
            if (!params.id) {
                this.setState({ reviews: response.data.data });
            }
            return response.data;
        } catch (e) {
            console.log(e);
            return null;
        }
    };

    setReviewState = async () => {
        // check if the user has already reviewed the restaurant
        try {
            const response = await this.getReviews({ id: this.props.userId });
            if (response.found) {
                this.setState({ reviewDone: true });
            }
        } catch (e) {
            console.log(e);
        }
    };

    reviewRestaurant = async () => {
        const bodyData = {
            userId: this.props.userId,
            food: this.state.foodRating,
            service: this.state.serviceRating,
            environment: this.state.environmentRating,
            price: this.state.priceRating,
            comment: this.state.comment
        };
        console.log(bodyData);
        console.log(api.reviewRestaurant(this.props.match.params.id));

        try {
            const response = await axios.post(
                api.reviewRestaurant(this.props.match.params.id),
                bodyData
            );
            console.log(response.data);
            this.setState({ showRatingModal: false }, () =>
                this.showConfirmation(true, 'Your review has been added')
            );
            await this.setReviewState();
            await this.fetchDetails();
            await this.getReviews({});
        } catch (e) {
            console.log(e);
            this.setState({ showRatingModal: false }, () =>
                this.showConfirmation(false, '')
            );
        }
    };

    renderOrderButton() {
        if (this.props.isLoggedIn) {
            return (
                <li className={styles.navlist}>
                    <Link
                        className={`${styles.navlink} ${styles.navlistlink}`}
                        to={this.props.location.pathname}
                        onClick={this.handleOrderButton}
                    >
                        Order Online
                    </Link>
                </li>
            );
        }
        return null;
    }

    renderRatingBox() {
        const { data } = this.state;
        return (
            <RatingModal
                data={data}
                onSubmit={this.reviewRestaurant}
                onExit={this.handleReviewButton}
                onChangeRating={this.onChangeRating}
                foodRating={this.state.foodRating}
                environmentRating={this.state.environmentRating}
                serviceRating={this.state.serviceRating}
                priceRating={this.state.priceRating}
                comment={this.state.comment}
                onChangeComment={this.onChangeComment}
            />
        );
    }

    renderOrderBox() {
        return (
            <OrderModal
                addItem={this.addItemToCart}
                removeItem={this.removeItemFromCart}
                onExit={this.handleOrderExit}
                menu={this.state.data.menu}
                onButtonClick={() => this.props.history.push({
                    pathname: '/main/cart',
                    state: {
                        restaurant: this.state.data
                    }
                })}
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

    addItemToCart = item => {
        this.setState({
            data: {
                ...this.state.data,
                menu: this.state.data.menu.map(i => {
                    if (i._id === item._id) {
                        i.added = true;
                    }
                    return i;
                })
            }
        });

        const duplicate = this.props.cart.items.find(i => i._id === item._id);
        if (duplicate) {
            console.log('Product already exists in cart');
            this.showConfirmation(
                false,
                null,
                'Item already exists in cart',
                true
            );
            return;
        }
        this.props.addProduct(item);
        this.showConfirmation(true, 'Item added to cart', null, true);
    };

    removeItemFromCart = item => {
        this.props.removeProduct(item);
        this.setState({
            data: {
                ...this.state.data,
                menu: this.state.data.menu.map(i => {
                    if (i._id === item._id) {
                        i.added = false;
                    }
                    return i;
                })
            }
        });
        this.showConfirmation(true, 'Item removed', null, true);
    };

    renderReviewButton() {
        if (this.props.isLoggedIn && !this.state.reviewDone) {
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

    renderReviews() {
        return this.state.reviews.map(item => (
            <ReviewBox key={item._id} styles={styles} item={item} />
        ));
    }

    render() {
        const { data } = this.state;
        return (
            <div className={styles.all}>
                {/* ------------ Rating Modal Start --------------- */}
                <Modal show={this.state.showRatingModal}>
                    {this.renderRatingBox()}
                </Modal>
                {/* ------------ Rating Modal End --------------- */}
                {/* ------------ Order Modal Start --------------- */}
                <Modal show={this.state.showOrderModal}>
                    {this.renderOrderBox()}
                </Modal>
                {/* ------------ Order Modal End --------------- */}
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
                                {this.renderOrderButton()}
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
                                        {`${data.review.average &&
                                            data.review.average.toFixed(1)} (${
                                            data.review.count
                                        })`}
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
                                    <span style={{ display: 'block', marginBottom: 20, textTransform: 'capitalize' }}>Type: {data.restaurant_type.join(', ')}</span>
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
                                items={this.state.sliderImages}
                                additionalClass={styles.imageGallery}
                                lazyLoad={false}
                                showBullets
                                slideDuration={300}
                                slideInterval={3000}
                                showFullscreenButton={false}
                                showPlayButton={false}
                            />
                        </div>
                        <div
                            className={styles.box6}
                            ref={comp => (this.reviewSection = comp)}
                        >
                            <div className={`${styles.orange} ${styles.large}`}>
                                Reviews
                                <br />
                            </div>
                            {this.renderReviews()}
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
        isLoggedIn: state.auth.isLoggedIn,
        userId: state.auth.userData._id,
        cart: state.cart
    };
};

export default connect(
    mapStateToProps,
    { addProduct, removeProduct, modifyQuantity, setCart }
)(Details);
