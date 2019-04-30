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
        this.state = {
            list: [],
            listLoading: false,
            sortOption: 'popularity'
        };
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
            sort: this.state.sortOption
        };

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

    handleFilterClick = () => {
        const { food, area } = this.props.location.state;
        this.fetchRestaurants(food, area);
    }

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
