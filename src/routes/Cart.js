import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Prompt } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CartItem from '../components/CartItem';
import { api } from '../utils/api';
import { removeProduct, modifyQuantity, setCart } from '../actions';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.swal = withReactContent(Swal);
        this.state = {
            orderList: []
        };
    }

    componentDidMount() {
        window.scrollTo(0, 0);
        this.fetchOrderHistory();
    }

    componentWillUnmount() {
        this.props.setCart([]);
    }

    showConfirmation(response, message, errMessage = null, toast = false) {
        let text, type, title;
        text = response ? message : errMessage || 'An unexpected error occured';
        type = response ? 'success' : 'error';
        title = response ? 'Done' : 'Oops...';

        return this.swal.fire({
            type,
            title,
            text,
            allowOutsideClick: false,
            toast,
            position: toast ? 'top' : 'center',
            showConfirmButton: toast ? false : true,
            timer: toast ? 3000 : null
        });
    }

    removeProduct = async item => {
        const res = await this.swal.fire({
            text: 'Are you sure you want to remove the product?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes',
            cancelButtonText: 'No',
            confirmButtonColor: '#d33'
        });
        if (res.value) {
            this.props.removeProduct(item);
            this.swal.fire({
                text: 'Item removed',
                type: 'success',
                toast: true,
                timer: 3000,
                position: 'top',
                showConfirmButton: false
            });
        }
    };

    calculateTotal() {
        let subtotal = 0;
        this.props.items.forEach(item => (subtotal += item.total_price));
        return subtotal;
    }

    modifyQuantity = (item, type) => {
        this.props.modifyQuantity(item, type);
    };

    placeOrder = async () => {
        const restaurant = this.props.location.state.restaurant._id;
        const data = {
            restaurant,
            user: this.props.userId,
            items: this.props.items,
            total_amount: this.calculateTotal()
        };

        try {
            const response = await axios.post(api.placeOrder(restaurant), data);
            console.log(response.data);
            this.props.setCart([]);
            this.showConfirmation(true, 'Order created successfully');
            this.fetchOrderHistory();
        } catch (e) {
            console.log(e);
            this.showConfirmation(
                false,
                null,
                'An error occured while placing the order'
            );
        }
    };

    fetchOrderHistory = async () => {
        try {
            const params = {
                userId: this.props.userId
            };
            const response = await axios.get(api.orderHistory, { params });
            console.log('orders', response.data);
            this.setState({ orderList: response.data.data });
        } catch (e) {
            console.log(e);
        }
    };

    renderCartItems() {
        if (this.props.items.length === 0) {
            return <span>No items in Cart</span>;
        }
        return (
            <div
                style={{
                    display: 'flex',
                    width: '100%',
                    flexDirection: 'column'
                }}
            >
                {this.props.items.map(item => (
                    <CartItem
                        item={item}
                        key={item._id}
                        onRemove={this.removeProduct}
                        onModifyQuantity={this.modifyQuantity}
                    />
                ))}
                <div
                    style={{
                        display: 'flex',
                        justifyContent: 'space-around',
                        alignSelf: 'center',
                        padding: '20px 0',
                        width: '30%'
                    }}
                >
                    <span>Subtotal</span>
                    <span>{`${this.calculateTotal()} Tk`}</span>
                </div>
                <button style={styles.button} onClick={this.placeOrder}>
                    Place Order
                </button>
            </div>
        );
    }

    renderOrderHistory() {
        if (this.state.orderList.length === 0) {
            return (
                <tr>
                    <td>No order history exists</td>
                </tr>
            );
        }
        return this.state.orderList.map(item => {
            const date = new Date(item.createdAt);
            return (
                <tr key={item._id} style={{ borderBottom: '1px solid #ddd' }}>
                    <td style={{ padding: '10px 5px' }}>
                        {item.restaurant.name}
                    </td>
                    <td style={{ padding: '10px 5px' }}>
                        {item.items.map(mapItem => {
                            return (
                                <React.Fragment key={mapItem._id}>
                                    {`${mapItem.name}(${mapItem.quantity})`}
                                    <br />
                                </React.Fragment>
                            );
                        })}
                    </td>
                    <td style={{ padding: '10px 5px' }}>
                        {item.total_amount}
                    </td>
                    <td style={{ padding: '10px 5px' }}>
                        {date.toDateString()}
                    </td>
                </tr>
            );
        });
    }
    render() {
        return (
            <div style={styles.container}>
                <Prompt
                    when={this.props.items.length > 0}
                    message='Items in cart will be reset'
                />
                <h1 style={{ marginBottom: 5 }}>My Cart</h1>
                <div style={styles.section}>
                    {/* CART ITEM */}
                    {this.renderCartItems()}
                </div>
                <h1 style={{ marginTop: 25, marginBottom: 5 }}>
                    Order History
                </h1>
                <div style={styles.section}>
                    {/* CART ITEM */}
                    <table style={{ borderCollapse: 'collapse', fontSize: '80%' }}>
                        <thead>
                            <tr style={{ borderBottom: '1px solid #ddd', fontSize: '120%' }}>
                                <td style={{ padding: '10px 5px', color: 'orange' }}>Restaurant</td>
                                <td style={{ padding: '10px 5px', color: 'orange' }}>Items</td>
                                <td style={{ padding: '10px 5px', color: 'orange' }}>Total</td>
                                <td style={{ padding: '10px 5px', color: 'orange' }}>Created At</td>
                            </tr>
                        </thead>
                        <tbody>{this.renderOrderHistory()}</tbody>
                    </table>
                </div>
            </div>
        );
    }
}

const styles = {
    container: {
        width: 600,
        marginLeft: 'auto',
        marginRight: 'auto',
        height: '100vh',
        padding: '30px 0'
    },
    button: {
        alignSelf: 'center',
        padding: 10,
        marginBottom: 15,
        backgroundColor: 'orange',
        color: 'white',
        outline: 0,
        border: 0,
        boxShadow: '1px 1px 2px #ddd',
        borderRadius: 5,
        cursor: 'pointer'
    },

    section: {
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: 'white',
        padding: 10,
        boxShadow: '2px 2px 3px #ddd'
    }
};

const mapStateToProps = state => {
    return {
        items: state.cart.items,
        userId: state.auth.userData._id
    };
};

export default connect(
    mapStateToProps,
    { removeProduct, modifyQuantity, setCart }
)(Cart);
