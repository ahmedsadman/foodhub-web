import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { RestaurantCard } from '../components/RestaurantCard';
import { ResBox } from '../components/ResBox';
import { api } from '../utils/api';
import { history } from '../utils/history';
import styles from '../views/SearchResult.module.css';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.INIT = {
            list: [],
            listLoading: false,
            sortOption: 'popularity',
            fineDining: false,
            fastFood: false,
            foodCart: false,
            rooftop: false,
            poolside: false,
            wifi: false,
            smoking_zone: false,
            delivery: false,
            ac: false,
            reservation: false,
            parking: false
        };
        this.state = this.INIT;
    }

    componentDidMount() {
        const { food, area } = this.props.location.state;
        this.fetchRestaurants(food, area);
    }

    componentDidUpdate(prevProps, prevState) {
        const prevFood = prevProps.location.state.food;
        const prevArea = prevProps.location.state.area;
        const { food, area } = this.props.location.state;

        if (prevFood !== food || prevArea !== area) {
            this.fetchRestaurants(food, area);
        }
    }

    async fetchRestaurants(food, area) {
        this.setState({ listLoading: true });
        const params = {
            food,
            area,
            sort: this.state.sortOption,
            features: [],
            type: []
        };

        if (this.state.fineDining) params.type.push('fineDining');
        if (this.state.poolside) params.type.push('poolside');
        if (this.state.foodCart) params.type.push('foodCart');
        if (this.state.rooftop) params.type.push('rooftop');
        if (this.state.fastFood) params.type.push('fastFood');

        if (this.state.wifi) params.features.push('wifi');
        if (this.state.ac) params.features.push('ac');
        if (this.state.parking) params.features.push('parking');
        if (this.state.reservation) params.features.push('reservation');
        if (this.state.delivery) params.features.push('delivery');
        if (this.state.smoking_zone) params.features.push('smoking_zone');

        try {
            const response = await axios.get(api.searchRestaurant, { params });
            console.log(response.data);
            this.setState({ list: response.data.data, listLoading: false });
        } catch (e) {
            console.log(e);
        }
    }

    handleCardClick = item => {
        console.log('handle click ran');
        history.push(`/main/restaurants/details/${item._id}`);
    };

    handleRadioChange = e => {
        this.setState({
            sortOption: e.target.value
        });
    };

    handleCheckboxChange = (e, type) => {
        this.setState({
            [type]: e.target.checked
        });
    };

    handleFilterClick = () => {
        const { food, area } = this.props.location.state;
        this.fetchRestaurants(food, area);
    };

    handleResetClick = () => {
        const { food, area } = this.props.location.state;
        this.setState({ ...this.INIT }, () => {
            this.fetchRestaurants(food, area);
        });
    };

    renderRestaurantsList() {
        if (this.state.listLoading) {
            return <h1 style={{ textAlign: 'center' }}>Loading</h1>;
        }

        if (!this.state.listLoading && this.state.list.length === 0) {
            return (
                <h1 style={{ textAlign: 'center' }}>No Restaurants Found</h1>
            );
        }
        return this.state.list.map(item => (
            <RestaurantCard
                key={item._id}
                name={item.name}
                address={`${item.address.area}, ${item.address.district}`}
                rating={item.review.average}
                count={item.review.count}
                banner_image={item.banner_image}
                onClick={() => this.handleCardClick(item)}
            />
        ));
    }

    render() {
        return (
            <div className={styles.all}>
                <div id='main' style={inStyle.container}>
                    <section style={{ float: 'left', width: '25%' }}>
                        <div className={styles.filterBlock}>
                            <span className={styles.orange}>
                                <br />
                                <br /> Sort by <br /> <br />
                            </span>
                            <span>
                                <div className={styles.Ash} to='/'>
                                    <input
                                        type='radio'
                                        value='popularity'
                                        name='sort'
                                        checked={
                                            this.state.sortOption ===
                                            'popularity'
                                        }
                                        onChange={this.handleRadioChange}
                                    />
                                    <span>Popularity</span>
                                </div>
                                <div className={styles.Ash} to='/'>
                                    <input
                                        type='radio'
                                        value='rating'
                                        name='sort'
                                        checked={
                                            this.state.sortOption === 'rating'
                                        }
                                        onChange={this.handleRadioChange}
                                    />
                                    <span>Rating</span>
                                </div>
                                <div className={styles.Ash} to='/'>
                                    <input
                                        type='radio'
                                        value='recent'
                                        name='sort'
                                        checked={
                                            this.state.sortOption === 'recent'
                                        }
                                        onChange={this.handleRadioChange}
                                    />
                                    <span>Recently Added</span>
                                </div>
                            </span>

                            <span className={styles.orange}>
                                <br />
                                <br /> Restaurant Type <br /> <br />
                            </span>
                            <span className={styles.Ash}>
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={this.state.fineDining}
                                        onChange={e =>
                                            this.handleCheckboxChange(
                                                e,
                                                'fineDining'
                                            )
                                        }
                                    />
                                    <span>Fine Dinning</span>
                                </div>
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={this.state.fastFood}
                                        onChange={e =>
                                            this.handleCheckboxChange(
                                                e,
                                                'fastFood'
                                            )
                                        }
                                    />
                                    <span>Fast Food</span>
                                </div>
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={this.state.foodCart}
                                        onChange={e =>
                                            this.handleCheckboxChange(
                                                e,
                                                'foodCart'
                                            )
                                        }
                                    />
                                    <span>Food Cart</span>
                                </div>
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={this.state.rooftop}
                                        onChange={e =>
                                            this.handleCheckboxChange(
                                                e,
                                                'rooftop'
                                            )
                                        }
                                    />
                                    <span>Rooftop</span>
                                </div>
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={this.state.poolside}
                                        onChange={e =>
                                            this.handleCheckboxChange(
                                                e,
                                                'poolside'
                                            )
                                        }
                                    />
                                    <span>Poolside</span>
                                </div>
                            </span>
                            
                            {/* ------------------ Features ------------------- */}
                            <span className={styles.orange}>
                                <br />
                                <br /> Features <br /> <br />
                            </span>
                            <span className={styles.Ash}>
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={this.state.wifi}
                                        onChange={e =>
                                            this.handleCheckboxChange(
                                                e,
                                                'wifi'
                                            )
                                        }
                                    />
                                    <span>Wifi</span>
                                </div>
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={this.state.ac}
                                        onChange={e =>
                                            this.handleCheckboxChange(
                                                e,
                                                'ac'
                                            )
                                        }
                                    />
                                    <span>Air Conditioned</span>
                                </div>
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={this.state.reservation}
                                        onChange={e =>
                                            this.handleCheckboxChange(
                                                e,
                                                'reservation'
                                            )
                                        }
                                    />
                                    <span>Reservation</span>
                                </div>
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={this.state.delivery}
                                        onChange={e =>
                                            this.handleCheckboxChange(
                                                e,
                                                'delivery'
                                            )
                                        }
                                    />
                                    <span>Delivery</span>
                                </div>
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={this.state.smoking_zone}
                                        onChange={e =>
                                            this.handleCheckboxChange(
                                                e,
                                                'smoking_zone'
                                            )
                                        }
                                    />
                                    <span>Smoking Zone</span>
                                </div>
                                <div>
                                    <input
                                        type='checkbox'
                                        checked={this.state.parking}
                                        onChange={e =>
                                            this.handleCheckboxChange(
                                                e,
                                                'parking'
                                            )
                                        }
                                    />
                                    <span>Parking</span>
                                </div>
                            </span>
                            <div style={{ textAlign: 'center', width: '100%' }}>
                                <button
                                    style={{
                                        margin: '10px 0',
                                        padding: 10,
                                        outline: 0,
                                        border: 0,
                                        backgroundColor: 'orange',
                                        color: 'white',
                                        cursor: 'pointer'
                                    }}
                                    onClick={this.handleFilterClick}
                                >
                                    Filter
                                </button>
                                <button
                                    style={{
                                        margin: '10px 5px',
                                        padding: 10,
                                        outline: 0,
                                        border: 0,
                                        backgroundColor: 'orange',
                                        color: 'white',
                                        cursor: 'pointer'
                                    }}
                                    onClick={this.handleResetClick}
                                >
                                    Reset
                                </button>
                            </div>
                        </div>
                    </section>
                    {/*Restaurant Block */}
                    <div className={styles.Restaurants}>
                        {this.renderRestaurantsList()}
                    </div>{' '}
                    {/* res block end */}
                    {/*Sidebar */}
                    <div style={{ float: 'left', width: '25%' }}>
                        <div className={styles.sideBlock}>
                            <p style={{ marginBottom: 10 }}>
                                Nearby Restaurants
                            </p>
                            <ResBox
                                styles={styles}
                                name='Mr. Manik'
                                address='Uttara, Dhaka'
                            />
                            <ResBox
                                styles={styles}
                                name='Takeout'
                                address='Dhanmondi, Dhaka'
                            />
                            <ResBox
                                styles={styles}
                                name='Chillox'
                                address='Badda, Dhaka'
                            />
                            <ResBox
                                styles={styles}
                                name='Khanas'
                                address='Uttara, Dhaka'
                            />
                        </div>
                        <div className={styles.sideBlock}>
                            <p style={{ marginBottom: 10 }}>
                                Featured Restaurants
                            </p>
                            <ResBox
                                styles={styles}
                                name='Mr. Manik'
                                address='Uttara, Dhaka'
                            />
                            <ResBox
                                styles={styles}
                                name='Takeout'
                                address='Dhanmondi, Dhaka'
                            />
                            <ResBox
                                styles={styles}
                                name='Chillox'
                                address='Badda, Dhaka'
                            />
                            <ResBox
                                styles={styles}
                                name='Khanas'
                                address='Uttara, Dhaka'
                            />
                        </div>
                    </div>{' '}
                    {/* end of sidebar container */}
                </div>{' '}
                {/* end of main content block */}
                <div style={{ clear: 'both' }} />{' '}
                {/* IMPORTANT: DO NOT TAMPER */}
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

export default SearchResult;
