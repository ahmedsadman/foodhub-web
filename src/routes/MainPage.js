import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import Navbar from '../components/Navbar';
import SearchResult from './SearchResult';
import DetailsPage from './Details';
import CreateRestaurant from './ResCreate';
import { history } from '../utils/history';
import styles from '../views/SearchResult.module.css';

const MainPage = props => {
    return (
        <div className={styles.all}>
            <nav>
                <Navbar />
            </nav>
            
            <Router history={history}>
                <div>
                    <Route
                        path='/main/restaurants/search'
                        component={SearchResult}
                    />
                    <Route
                        path='/main/restaurants/details'
                        component={DetailsPage}
                    />
                    <Route
                        path='/main/restaurants/create'
                        component={CreateRestaurant}
                    />
                </div>
            </Router>
        </div> /* End of container div */
    );
};

export default MainPage;
