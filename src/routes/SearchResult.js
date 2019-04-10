import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { RestaurantCard } from '../components/RestaurantCard';
import { ResBox } from '../components/ResBox';
import { api } from '../utils/api';
import styles from '../views/SearchResult.module.css';

class SearchResult extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [],
            listLoading: false
        };
    }

    componentDidMount() {
        this.fetchRestaurants();
    }

    async fetchRestaurants() {
        this.setState({ listLoading: true });
        const { area, food } = this.props.location.state;
        console.log(area, food);
        const params = {
            food,
            area
        };

        try {
            const response = await axios.get(api.searchRestaurant, { params });
            console.log(response.data);
            this.setState({ list: response.data.data, listLoading: false });
        } catch (e) {
            console.log(e);
        }
    }

    renderRestaurantsList() {
        if (this.state.listLoading) {
            return <h1 style={{ textAlign: 'center' }}>Loading</h1>;
        }

        if (!this.state.listLoading && this.state.list.length === 0) {
            return <h1 style={{ textAlign: 'center' }}>No Restaurants Found</h1>;
        }
        return this.state.list.map(item => (
            <RestaurantCard
                key={item._id}
                name={item.name}
                address={`${item.address.area}, ${item.address.district}`}
                rating={item.review.average}
                banner_image={item.banner_image}
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
