import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import RestaurantForm from '../components/RestaurantForm';

class CreateRestaurant extends Component {
    constructor(props) {
        super(props);
        this.form = null;
    }

    onSubmit = async () => {
        console.log(this.form.getBodyData());
        return true;
    }

    redirect = () => {
        console.log('inside redirect');
        return <Redirect to='/' />;
    }

    render() {
        return (
            <RestaurantForm
                user={{ userId: '5c6c021ea7745546ecd303c7' }}
                successMessage='Restaurant created successfully'
                ref={(comp) => this.form = comp}
                onSubmit={this.onSubmit}
                redirect={this.redirect}
            />
        );
    }
}

export default CreateRestaurant;
