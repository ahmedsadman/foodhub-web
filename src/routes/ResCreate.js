import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import RestaurantForm from '../components/RestaurantForm';
import { api } from '../utils/api';

class CreateRestaurant extends Component {
    constructor(props) {
        super(props);
        this.form = null;
    }

    componentDidMount() {
        console.log(this.props.userId);
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
                user={{ userId: this.props.userId}}
                successMessage='Restaurant created successfully'
                buttonText='Create'
                ref={(comp) => this.form = comp}
                onSubmit={this.onSubmit}
                redirect={this.redirect}
                header='Create Restaurant'
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userData._id
    }
};

export default connect(mapStateToProps, {})(CreateRestaurant);
