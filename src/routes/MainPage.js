import React from 'react';
import { BrowserRouter, Router, Route } from 'react-router-dom';
import ProtectedRoute from '../utils/ProtectedRoute';
import Navbar from '../components/Navbar';
import SearchResult from './SearchResult';
import DetailsPage from './Details';
import CreateRestaurant from './ResCreate';
import EditRestaurant from './ResEdit';
import UserProfile from './UserProfile';
import BlogList from './BlogList';
import Cart from './Cart';
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
                        path='/main/restaurants/details/:id'
                        component={DetailsPage}
                    />
                    <Route
                        path='/main/blog'
                        component={BlogList}
                    />
                    <ProtectedRoute
                        path='/main/restaurants/create'
                        component={CreateRestaurant}
                    />
                    <ProtectedRoute
                        path='/main/restaurants/edit'
                        component={EditRestaurant}
                    />
                    <ProtectedRoute
                        path='/main/profile'
                        component={UserProfile}
                    />
                    <ProtectedRoute
                        path='/main/cart'
                        component={Cart}
                    />
                </div>
            </Router>
        </div> /* End of container div */
    );
};

export default MainPage;
