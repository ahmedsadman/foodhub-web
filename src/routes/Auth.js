import React, { Component } from 'react';
import { api } from '../utils/api';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import axios from 'axios';
import withReactContent from 'sweetalert2-react-content';
import { loginUser } from '../actions';
import { Spinner } from '../components/common/Spinner';
import styles from '../views/Auth.module.css';
import { history } from '../utils/history';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            username: '',
            password: '',
            regEmail: '',
            confirmPass: '',
            regError: '',
            regUser: '',
            regPass: '',
            regLoading: false
        };
        this.swal = withReactContent(Swal);
    }

    componentDidMount() {
        const { state } = this.props.location;

        if (state && state.loginRequired) {
            this.showToast('info', 'You need to login first');
        }

        // reset the state
        history.replace({
            pathname: this.props.location.pathname,
            state: {}
        });
    }

    showToast(type, text) {
        this.swal.fire({
            type,
            text,
            toast: true,
            showConfirmButton: false,
            timer: 3000,
            position: 'top'
        });
    }

    onChangeInput(type, e) {
        this.setState({ [type]: e.target.value });
    }

    async handleLogin() {
        this.props.loginUser(this.state.username, this.state.password);
    }

    validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(String(email).toLowerCase());
    }

    handleRegister = async () => {
        this.setState({ regError: '' });
        if (
            !this.state.regUser ||
            !this.state.regEmail ||
            !this.state.regPass ||
            !this.state.confirmPass
        ) {
            this.setState({ regError: 'Please fill up all the fields' });
            return;
        }

        if (!this.validateEmail(this.state.regEmail)) {
            this.setState({ regError: 'Invalid email' });
            return;
        }

        if (this.state.regPass !== this.state.confirmPass) {
            this.setState({ regError: "Passwords doesn't match" });
            return;
        }

        try {
            this.setState({ regLoading: true });
            const bodyData = {
                username: this.state.regUser,
                email: this.state.regEmail,
                password: this.state.regPass
            };
            const response = await axios.post(api.register, bodyData);
            console.log(response.data);

            this.setState({ username: this.state.regUser, password: this.state.regPass, regLoading: false }, () => {
                this.handleLogin();
            })
        } catch (e) {
            console.log(e.response);
            if (e.response.data.error.code === 11000) {
                this.setState({ regError: 'This mail is already registered', regLoading: false });
            } else {
                this.setState({ regError: e.message, regLoading: false });
            }
            
        }
    };

    getLoginStyle() {
        return {
            opacity: this.state.isLogin ? 1 : 0,
            pointerEvents: this.state.isLogin ? 'all' : 'none'
        };
    }

    getSignupStyle() {
        return {
            opacity: this.state.isLogin ? 0 : 1,
            pointerEvents: this.state.isLogin ? 'none' : 'all'
        };
    }

    renderError() {
        if (this.props.auth.error) {
            return (
                <p style={{ textAlign: 'center', color: 'red' }}>
                    {this.props.auth.error}
                </p>
            );
        }
    }

    renderRegError() {
        if (this.state.regError) {
            return (
                <span style={{ color: 'red', textAlign: 'center' }}>
                    {this.state.regError}
                </span>
            );
        }
        return null;
    }
    
    renderLoginOrLoader() {
        if (this.props.auth.loading) {
            return (
                <div style={{ position: 'relative', top: '40%', left: '50%' }}>
                    <Spinner size='small' />
                </div>
            );
        }
        return (
            <div className={styles.btn} onClick={this.handleLogin.bind(this)}>
                <b>Login</b>
            </div>
        );
    }

    renderSignupOrLoader() {
        if (this.state.regLoading) {
            return (
                <div style={{ position: 'relative', top: '40%', left: '40%' }}>
                    <Spinner size='small' />
                </div>
            );
        }
        return (
            <div className={styles.btn} onClick={this.handleRegister}>
                <b>Sign up</b>
            </div>
        );
    }

    render() {
        return (
            <div className={styles.body}>
                <div className={styles.back}>
                    <div className={styles.LoginQuery}>
                        <p>Have an account?</p>
                        <div
                            className={styles.btn}
                            onClick={() => this.setState({ isLogin: true })}
                        >
                            Log in
                        </div>
                    </div>
                    <div className={styles.SignupQuery}>
                        <p>Don't have an account?</p>
                        <div
                            className={styles.btn}
                            onClick={() => this.setState({ isLogin: false })}
                        >
                            Sign Up
                        </div>
                    </div>
                </div>
                <div className={styles.form}>
                    <div className={styles.login} style={this.getLoginStyle()}>
                        <input
                            type='username'
                            name='username'
                            placeholder='Username'
                            value={this.state.username}
                            className={styles.input}
                            onChange={e => this.onChangeInput('username', e)}
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            value={this.state.password}
                            className={styles.input}
                            onChange={e => this.onChangeInput('password', e)}
                        />
                        {this.renderError()}
                        {this.renderLoginOrLoader()}
                    </div>
                    <div
                        className={styles.signup}
                        style={this.getSignupStyle()}
                    >
                        <input
                            type='Username'
                            name='name'
                            className={styles.input}
                            placeholder='Name'
                            value={this.state.regUser}
                            onChange={e => this.onChangeInput('regUser', e)}
                        />
                        <input
                            type='email'
                            name='Email'
                            className={styles.input}
                            placeholder='Email'
                            value={this.state.regEmail}
                            onChange={e => this.onChangeInput('regEmail', e)}
                        />
                        <input
                            type='password'
                            name='Password'
                            placeholder='Password'
                            className={styles.input}
                            value={this.state.regPass}
                            onChange={e => this.onChangeInput('regPass', e)}
                        />
                        <input
                            type='password'
                            name='confirmpass'
                            placeholder='Re-enter Password'
                            className={styles.input}
                            value={this.state.confirmPass}
                            onChange={e => this.onChangeInput('confirmPass', e)}
                        />
                        {this.renderRegError()}
                        {this.renderSignupOrLoader()}
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        auth: state.auth
    };
};

export default connect(
    mapStateToProps,
    { loginUser }
)(Auth);
