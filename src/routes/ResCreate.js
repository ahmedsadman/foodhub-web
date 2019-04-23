import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import RestaurantForm from '../components/RestaurantForm';
import { api } from '../utils/api';

class CreateRestaurant extends Component {
    constructor(props) {
        super(props);
        this.form = null;
    }

    onSubmit = async () => {
        const data = this.form.getBodyData();
        console.log(data);
        try {
            const response = await axios.post(api.createRestaurant, data);
            console.log(response);
            return true;
        } catch (e) {
            console.log(e);
            return false;
        }
    }

    redirect = () => {
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
