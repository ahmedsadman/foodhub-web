import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

class RestaurantForm extends Component {
    constructor(props) {
        super(props);
        this.swal = withReactContent(Swal);
        this.bodyData = null;
        this.state = {
            redirect: false,
            foodType: '',
            foodName: '',
            foodPrice: '',
            offerDesc: '',
            offerImg: '',

            // form input states
            name: '',
            resFoodTypes: '',
            banner_image: '',
            menuList: [],
            offerList: [],
            area: '',
            district: '',
            hour_start: '',
            hour_end: '',
            image1: '',
            image2: '',
            image3: '',
            facebook: '',
            instagram: '',
            contact: '',
            wifi: false,
            delivery: false,
            ac: false,
            smoking_zone: false,
            reservation: false,
            parking: false,
            fineDining: false,
            rooftop: false,
            poolside: false,
            foodCart: false
        };
    }

    redirect() {
        if (this.state.redirect) {
            return this.props.redirect();
        }
    }

    updateStateWithValues(data) {
        // update state with supplied values, used for editing
        console.log('setting data');
        this.setState({ ...this.state, ...data }, () => console.log('after update', this.state));
    }

    addFoodItem() {
        const index = this.state.menuList.findIndex(
            item =>
                item.type === this.state.foodType &&
                item.name === this.state.foodName
        );

        if (
            !this.state.foodName ||
            !this.state.foodPrice ||
            !this.state.foodType
        ) {
            return;
        }

        const newItem = {
            type: this.state.foodType.toLowerCase(),
            name: this.state.foodName,
            unit_price: parseInt(this.state.foodPrice)
        };

        // item already exists, so edit it
        if (index > -1) {
            const newList = this.state.menuList.map((item, currIndex) => {
                if (currIndex === index) {
                    return newItem;
                }
                return item;
            });
            this.setState({
                menuList: newList,
                foodName: '',
                foodPrice: '',
                foodType: ''
            });
        } else {
            this.setState({
                menuList: [...this.state.menuList, newItem],
                foodName: '',
                foodPrice: '',
                foodType: ''
            });
        }
    }

    addOfferItem() {
        if (!this.state.offerDesc || !this.state.offerImg) {
            return;
        }

        const newItem = {
            title: this.state.offerDesc,
            image: this.state.offerImg
        };

        this.setState({
            offerList: [...this.state.offerList, newItem],
            offerDesc: '',
            offerImg: ''
        });
    }

    createResType() {
        let res_type = [];
        if (this.state.poolside) res_type.push('poolside');
        if (this.state.foodCart) res_type.push('foodCart');
        if (this.state.fineDining) res_type.push('fineDining');
        if (this.state.rooftop) res_type.push('rooftop');
        return res_type;
    }

    getBodyData() {
        return this.bodyData;
    }

    async handleFormSubmit(e) {
        e.preventDefault();
        const restaurant_type = this.createResType();
        const data = {
            owner: this.props.user.userId || '',
            name: this.state.name,
            food_type: this.state.resFoodTypes.split(', '),
            restaurant_type,
            banner_image: this.state.banner_image,
            hour: {
                start: this.state.hour_start,
                end: this.state.hour_end
            },
            images: [this.state.image1, this.state.image2, this.state.image3],
            address: {
                area: this.state.area,
                district: this.state.district
            },
            menu: this.state.menuList,
            offers: this.state.offerList,
            features: {
                wifi: this.state.wifi,
                ac: this.state.ac,
                delivery: this.state.delivery,
                smoking_zone: this.state.smoking_zone,
                reservation: this.state.reservation,
                parking: this.state.parking
            },
            social: {
                facebook: this.state.facebook,
                instagram: this.state.instagram,
                contact: this.state.contact
            },
            location: {
                type: 'Point',
		        coordinates: [22.5, 24.5]
            }
        };
        this.bodyData = data;
        
        
        const response = await this.props.onSubmit();
        
        await this.showConfirmation(response);

        if (response) this.setState({ redirect: true });
    }

    showConfirmation(response) {
        let text, type, title;
        text = response ? this.props.successMessage : 'An unexpected error occured';
        type = response ? 'success' : 'error';
        title = response ? 'Done' : 'Oops...';


        return this.swal.fire({
            type,
            title,
            text,
            allowOutsideClick: false
        });
    }

    onInputChange(type, e) {
        const target = e.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        this.setState({ [type]: value });
    }

    onFoodEdit(item) {
        this.setState({
            foodName: item.name,
            foodType: item.type,
            foodPrice: item.unit_price
        });
        console.log(item);
    }

    onFoodRemove(item) {
        this.setState({
            menuList: this.state.menuList.filter(
                i => item.type !== i.type && item.name !== i.name
            )
        });
    }

    onOfferRemove(item) {
        this.setState({
            offerList: this.state.offerList.filter(
                i => i.description !== item.description
            )
        });
    }

    renderFoodMenuItems() {
        return this.state.menuList.map(item => {
            return (
                <div style={styles.foodItem} key={`${item.name}-${item.type}`}>
                    <div style={{ width: '25%' }}>{item.type}</div>
                    <div style={{ width: '25%' }}>{item.name}</div>
                    <div style={{ width: '25%' }}>{item.unit_price}</div>
                    <div style={{ display: 'flex', width: 'auto' }}>
                        <i
                            className='fa fa-edit'
                            style={{ cursor: 'pointer' }}
                            onClick={() => this.onFoodEdit(item)}
                        />
                        <i
                            className='fa fa-trash'
                            style={{ marginLeft: 5, cursor: 'pointer' }}
                            onClick={() => this.onFoodRemove(item)}
                        />
                    </div>
                </div>
            );
        });
    }

    renderOfferItems() {
        return this.state.offerList.map(item => {
            return (
                <div
                    style={{
                        width: '100%',
                        padding: 10,
                        backgroundColor: '#ddd',
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginTop: 5,
                        marginBottom: 5
                    }}
                    key={item.title}
                >
                    <p>{item.title}</p>
                    <i
                        className='fa fa-trash'
                        style={{ marginLeft: 5, cursor: 'pointer' }}
                        onClick={() => this.onOfferRemove(item)}
                    />
                </div>
            );
        });
    }

    render() {
        return (
            <div style={styles.container}>
                {this.redirect()}
                <h1>{this.props.header}</h1>
                <div style={styles.formContainer}>
                    <form>
                        <div style={styles.fieldSet}>
                            <label htmlFor='name'>Name</label>
                            <input
                                style={styles.input}
                                type='text'
                                name='name'
                                value={this.state.name}
                                onChange={e => this.onInputChange('name', e)}
                            />
                        </div>
                        <div style={styles.fieldSet}>
                            <label htmlFor='foodtype'>Food Type</label>
                            <input
                                style={styles.input}
                                type='text'
                                name='foodtype'
                                value={this.state.resFoodTypes}
                                placeholder='burger, biriyani, shakes'
                                onChange={e =>
                                    this.onInputChange('resFoodTypes', e)
                                }
                            />
                        </div>

                        <div style={styles.fieldSet}>
                            <label htmlFor='banner_image'>Banner Image</label>
                            <input
                                style={styles.input}
                                type='text'
                                name='banner_image'
                                value={this.state.banner_image}
                                onChange={e =>
                                    this.onInputChange('banner_image', e)
                                }
                            />
                        </div>

                        <div style={styles.fieldSet}>
                            <p>Address</p>
                            <div>
                                <label htmlFor='area'>Area</label>
                                <input
                                    style={{ ...styles.input, width: 140 }}
                                    type='text'
                                    name='area'
                                    value={this.state.area}
                                    onChange={e =>
                                        this.onInputChange('area', e)
                                    }
                                />

                                <label
                                    htmlFor='district'
                                    style={{ marginLeft: 10 }}
                                >
                                    District
                                </label>
                                <input
                                    style={{ ...styles.input, width: 130 }}
                                    type='text'
                                    name='district'
                                    value={this.state.district}
                                    onChange={e =>
                                        this.onInputChange('district', e)
                                    }
                                />
                            </div>
                        </div>

                        <div style={styles.fieldSet}>
                            <p>Hour</p>
                            <div>
                                <label htmlFor='hour_start'>Start</label>
                                <input
                                    style={{ ...styles.input, width: 150 }}
                                    type='text'
                                    name='hour_start'
                                    value={this.state.hour_start}
                                    onChange={e =>
                                        this.onInputChange('hour_start', e)
                                    }
                                />

                                <label
                                    htmlFor='hour_end'
                                    style={{ marginLeft: 10 }}
                                >
                                    End
                                </label>
                                <input
                                    style={{ ...styles.input, width: 150 }}
                                    type='text'
                                    name='hour_end'
                                    value={this.state.hour_end}
                                    onChange={e =>
                                        this.onInputChange('hour_end', e)
                                    }
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                ...styles.fieldSet,
                                alignItems: 'flex-start'
                            }}
                        >
                            <label htmlFor='images'>Images (URL)</label>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <input
                                    style={{ ...styles.input, marginBottom: 5 }}
                                    type='text'
                                    name='image1'
                                    value={this.state.image1}
                                    onChange={e =>
                                        this.onInputChange('image1', e)
                                    }
                                />
                                <input
                                    style={{ ...styles.input, marginBottom: 5 }}
                                    type='text'
                                    name='image2'
                                    value={this.state.image2}
                                    onChange={e =>
                                        this.onInputChange('image2', e)
                                    }
                                />
                                <input
                                    style={{ ...styles.input, marginBottom: 5 }}
                                    type='text'
                                    name='image3'
                                    value={this.state.image3}
                                    onChange={e =>
                                        this.onInputChange('image3', e)
                                    }
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                ...styles.fieldSet,
                                alignItems: 'flex-start'
                            }}
                        >
                            <label htmlFor='socials'>Social</label>
                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <input
                                    style={{ ...styles.input, marginBottom: 5 }}
                                    type='text'
                                    name='social'
                                    placeholder='Facebook'
                                    value={this.state.facebook}
                                    onChange={e =>
                                        this.onInputChange('facebook', e)
                                    }
                                />
                                <input
                                    style={{ ...styles.input, marginBottom: 5 }}
                                    type='text'
                                    name='social'
                                    placeholder='Instagram'
                                    value={this.state.instagram}
                                    onChange={e =>
                                        this.onInputChange('instagram', e)
                                    }
                                />
                                <input
                                    style={{ ...styles.input, marginBottom: 5 }}
                                    type='text'
                                    name='social'
                                    placeholder='Contact No'
                                    value={this.state.contact}
                                    onChange={e =>
                                        this.onInputChange('contact', e)
                                    }
                                />
                            </div>
                        </div>
                        <div
                            style={{
                                ...styles.fieldSet,
                                alignItems: 'flex-start'
                            }}
                        >
                            <p>Features</p>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='wifi'
                                        style={{ marginRight: 10 }}
                                        value={this.state.wifi}
                                        checked={this.state.wifi}
                                        onChange={e =>
                                            this.onInputChange('wifi', e)
                                        }
                                    />
                                    <label htmlFor='wifi'>Wifi</label>
                                </div>

                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='delivery'
                                        style={{ marginRight: 10 }}
                                        value={this.state.delivery}
                                        checked={this.state.delivery}
                                        onChange={e =>
                                            this.onInputChange('delivery', e)
                                        }
                                    />
                                    <label htmlFor='wifi'>Delivery</label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='ac'
                                        style={{ marginRight: 10 }}
                                        value={this.state.ac}
                                        checked={this.state.ac}
                                        onChange={e =>
                                            this.onInputChange('ac', e)
                                        }
                                    />
                                    <label htmlFor='wifi'>AC</label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='smoking'
                                        style={{ marginRight: 10 }}
                                        value={this.state.smoking_zone}
                                        checked={this.state.smoking_zone}
                                        onChange={e =>
                                            this.onInputChange(
                                                'smoking_zone',
                                                e
                                            )
                                        }
                                    />
                                    <label htmlFor='smoking'>
                                        Smoking Zone
                                    </label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='reservation'
                                        style={{ marginRight: 10 }}
                                        value={this.state.reservation}
                                        checked={this.state.reservation}
                                        onChange={e =>
                                            this.onInputChange('reservation', e)
                                        }
                                    />
                                    <label htmlFor='reservation'>
                                        Reservation
                                    </label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='parking'
                                        style={{ marginRight: 10 }}
                                        value={this.state.parking}
                                        checked={this.state.parking}
                                        onChange={e =>
                                            this.onInputChange('parking', e)
                                        }
                                    />
                                    <label htmlFor='parking'>Parking</label>
                                </div>
                            </div>
                        </div>
                        {/* --------------- Restaurant Type START ------------------ */}
                        <div
                            style={{
                                ...styles.fieldSet,
                                alignItems: 'flex-start'
                            }}
                        >
                            <p>Restaurant Type</p>

                            <div
                                style={{
                                    display: 'flex',
                                    flexDirection: 'column'
                                }}
                            >
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='wifi'
                                        style={{ marginRight: 10 }}
                                        value={this.state.fineDining}
                                        checked={this.state.fineDining}
                                        onChange={e =>
                                            this.onInputChange('fineDining', e)
                                        }
                                    />
                                    <label htmlFor='wifi'>Fine Dining</label>
                                </div>

                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='delivery'
                                        style={{ marginRight: 10 }}
                                        value={this.state.rooftop}
                                        checked={this.state.rooftop}
                                        onChange={e =>
                                            this.onInputChange('rooftop', e)
                                        }
                                    />
                                    <label htmlFor='wifi'>Rooftop</label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='ac'
                                        style={{ marginRight: 10 }}
                                        value={this.state.poolside}
                                        checked={this.state.poolside}
                                        onChange={e =>
                                            this.onInputChange('poolside', e)
                                        }
                                    />
                                    <label htmlFor='wifi'>Poolside</label>
                                </div>
                                <div style={{ width: 400 }}>
                                    <input
                                        type='checkbox'
                                        name='smoking'
                                        style={{ marginRight: 10 }}
                                        value={this.state.foodCart}
                                        checked={this.state.foodCart}
                                        onChange={e =>
                                            this.onInputChange(
                                                'foodCart',
                                                e
                                            )
                                        }
                                    />
                                    <label htmlFor='smoking'>
                                        Food Cart
                                    </label>
                                </div>
                            </div>
                        </div>
                        {/* --------------- Restaurant Type END ------------------ */}
                        {/* ------------------------- Food Menu Container Start -------------------- */}
                        <div
                            style={{
                                ...styles.fieldSet,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                flexGrow: 1
                            }}
                        >
                            <p style={{ marginBottom: 10 }}>Food Menu</p>

                            {/* --------- Show added food items here ------------- */}
                            <div
                                style={{
                                    flexDirection: 'column',
                                    display: 'flex',
                                    width: '100%'
                                }}
                            >
                                {this.renderFoodMenuItems()}
                            </div>
                            {/* -------------------------------------------------- */}
                            <div style={styles.foodMenuContainer}>
                                <div>
                                    <label htmlFor='name'>Type</label>
                                    <input
                                        style={{ ...styles.input, width: 100 }}
                                        type='text'
                                        name='name'
                                        value={this.state.foodType}
                                        onChange={e =>
                                            this.onInputChange('foodType', e)
                                        }
                                    />
                                </div>

                                <div>
                                    <label htmlFor='name'>Name</label>
                                    <input
                                        style={{ ...styles.input, width: 230 }}
                                        type='text'
                                        name='name'
                                        value={this.state.foodName}
                                        onChange={e =>
                                            this.onInputChange('foodName', e)
                                        }
                                    />
                                </div>
                                <div>
                                    <label htmlFor='name'>Price</label>
                                    <input
                                        style={{ ...styles.input, width: 100 }}
                                        type='text'
                                        name='name'
                                        value={this.state.foodPrice}
                                        onChange={e =>
                                            this.onInputChange('foodPrice', e)
                                        }
                                    />
                                </div>
                                <i
                                    className='fa fa-check'
                                    style={{ cursor: 'pointer' }}
                                    onClick={this.addFoodItem.bind(this)}
                                />
                            </div>
                        </div>
                        {/* --------------------- Food Menu Conainer End -------------------- */}
                        {/* ------------------------- Offer Container Start -------------------- */}
                        <div
                            style={{
                                ...styles.fieldSet,
                                flexDirection: 'column',
                                alignItems: 'flex-start',
                                flexGrow: 1,
                                marginTop: 30
                            }}
                        >
                            <p style={{ marginBottom: 10 }}>Offers</p>

                            {/* --------- Show added food items here ------------- */}
                            <div
                                style={{
                                    flexDirection: 'column',
                                    display: 'flex',
                                    width: '100%'
                                }}
                            >
                                {this.renderOfferItems()}
                            </div>
                            {/* -------------------------------------------------- */}
                            <div style={styles.foodMenuContainer}>
                                <div>
                                    <label htmlFor='name'>Description</label>
                                    <input
                                        style={{ ...styles.input, width: 230 }}
                                        type='text'
                                        name='name'
                                        value={this.state.offerDesc}
                                        onChange={e =>
                                            this.onInputChange('offerDesc', e)
                                        }
                                    />
                                </div>

                                <div>
                                    <label htmlFor='name'>Image</label>
                                    <input
                                        style={{ ...styles.input, width: 230 }}
                                        type='text'
                                        name='name'
                                        value={this.state.offerImg}
                                        onChange={e =>
                                            this.onInputChange('offerImg', e)
                                        }
                                    />
                                </div>
                                <i
                                    className='fa fa-check'
                                    style={{ cursor: 'pointer' }}
                                    onClick={this.addOfferItem.bind(this)}
                                />
                            </div>
                        </div>
                        {/* --------------------- Offers Container End -------------------- */}
                        <div style={{ textAlign: 'center' }}>
                            <button
                                type='submit'
                                style={{
                                    padding: 10,
                                    marginTop: 20,
                                    borderRadius: 10,
                                    cursor: 'pointer',
                                    backgroundColor: 'orange',
                                    border: '1px solid #ccc'
                                }}
                                onClick={this.handleFormSubmit.bind(this)}
                            >
                                {this.props.buttonText}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        width: 1140,
        marginLeft: 'auto',
        marginRight: 'auto',
        paddingTop: 30,
        paddingBottom: 30,
        boxSizing: 'border-box'
    },
    formContainer: {
        display: 'flex',
        width: '60%',
        marginLeft: 'auto',
        marginRight: 'auto',
        flexGrow: 1,
        flexDirection: 'column'
    },
    fieldSet: {
        marginTop: 10,
        marginBottom: 10,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    input: {
        width: 400,
        marginLeft: 10,
        padding: 6,
        borderRadius: 5,
        boxSizing: 'border-box',
        outline: 'none',
        border: '1px solid #ddd'
    },
    foodMenuContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        alignItems: 'center'
    },
    foodItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 10,
        marginTop: 5,
        marginBottom: 5
    }
};

export default RestaurantForm;
