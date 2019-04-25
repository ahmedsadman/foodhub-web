import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import { connect } from 'react-redux';
import RestaurantForm from '../components/RestaurantForm';
import { api } from '../utils/api';

class EditRestaurant extends Component {
    constructor(props) {
        super(props);
        this.form = null;
    }

    componentDidMount() {
        this.parseData();
    }

    parseData() {
        // make the data understandable for the RestaurantForm state, for editing purpose
        const { item } = this.props.location.state;
        console.log(item);
        if (!item) return;

        const data = {
            name: item.name,
            area: item.address.area,
            banner_image: item.banner_image,
            district: item.address.district,
            resFoodTypes: item.food_type.join(', '),
            hour_start: item.hour.start,
            hour_end: item.hour.end,
            facebook: item.social.facebook,
            instagram: item.social.instagram,
            contact: item.social.contact,
            wifi: item.features.wifi,
            delivery: item.features.delivery,
            ac: item.features.ac,
            smoking_zone: item.features.smoking_zone,
            reservation: item.features.reservation,
            parking: item.features.parking,
            menuList: item.menu,
            offerList: item.offers
        }

        for (let i = 0; i < item.images.length; i++) {
            data[`image${i+1}`] = item.images[i];
        }

        for (let i = 0; i < item.restaurant_type.length; i++) {
            data[item.restaurant_type[i]] = true;
        }

        console.log(data);
        this.form.updateStateWithValues(data);
    }

    onSubmit = async () => {
        const data = this.form.getBodyData();
        console.log(data);
    }

    redirect = () => {
        return <Redirect to='/' />;
    }

    render() {
        return (
            <RestaurantForm
                user={{ userId: this.props.userId}}
                successMessage='Restaurant information updated'
                buttonText='Update'
                ref={(comp) => this.form = comp}
                onSubmit={this.onSubmit}
                redirect={this.redirect}
                header='Edit Restaurant'
            />
        );
    }
}

const mapStateToProps = state => {
    return {
        userId: state.auth.userData._id
    }
};

export default connect(mapStateToProps, {})(EditRestaurant);
