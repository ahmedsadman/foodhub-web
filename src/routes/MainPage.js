import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Navbar } from '../components/Navbar';
import SearchResult from './SearchResult';
import DetailsPage from './Details';
import styles from '../views/SearchResult.module.css';

const MainPage = (props) => {
    return (
        <div className={styles.all}>
            <nav>
                <Navbar />
            </nav>

            <BrowserRouter>
                <div>
                    <Route
                        path='/main/restaurants/search'
                        component={SearchResult}
                    />
                    <Route
                        path='/main/restaurants/details'
                        component={DetailsPage}
                    />
                </div>
            </BrowserRouter>
        </div> /* End of container div */
    );
};

export default MainPage;
