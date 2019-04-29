import React, { Component } from 'react';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import CartItem from '../components/CartItem';
import { removeProduct, modifyQuantity } from '../actions';

class Cart extends Component {
    constructor(props) {
        super(props);
        this.swal = withReactContent(Swal);
    }

    removeProduct = async item => {
        const res = await this.swal.fire({
            text: 'Are you sure you want to remove the product?',
            type: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Remove',
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
                <button
                    style={styles.button}
                >
                    Place Order
                </button>
            </div>
        );
    }

    render() {
        return (
            <div style={styles.container}>
                <h1 style={{ marginBottom: 20 }}>My Cart</h1>
                <div
                    style={{
                        display: 'flex',
                        flexDirection: 'column',
                        width: '100%',
                        backgroundColor: 'white',
                        padding: 10,
                        boxShadow: '2px 2px 3px #ddd'
                    }}
                >
                    {/* CART ITEM */}
                    {this.renderCartItems()}
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
    }
};

const mapStateToProps = state => {
    return {
        items: state.cart.items
    };
};

export default connect(
    mapStateToProps,
    { removeProduct, modifyQuantity }
)(Cart);
