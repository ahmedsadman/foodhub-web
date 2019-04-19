import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RestaurantForm from '../components/RestaurantForm';

class CreateRestaurant extends Component {
    render() {
        return (
            <RestaurantForm user={{ userId: '5c6c021ea7745546ecd303c7' }}/>
        );
    }   
}

export default CreateRestaurant;
