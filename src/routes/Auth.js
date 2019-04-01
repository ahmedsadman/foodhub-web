import React, { Component } from 'react';
import styles from '../views/Auth.module.css';

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false
        };
    }

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
        }
    }

    render() {
        return (
            <div className={styles.body}>
                <div className={styles.back}>
                    <div className={styles.LoginQuery}>
                        <p>Have an account?</p>
                        <div className={styles.btn} onClick={() => this.setState({ isLogin: true })}>Log in</div>
                    </div>
                    <div className={styles.SignupQuery}>
                        <p>Don't have an account?</p>
                        <div className={styles.btn} onClick={() => this.setState({ isLogin: false })}>Sign Up</div>
                    </div>
                </div>
                <div className={styles.form}>
                    <div className={styles.login} style={this.getLoginStyle()}>
                        <input
                            type='username'
                            name='username'
                            placeholder='Username'
                            className={styles.input}
                        />
                        <input
                            type='password'
                            name='password'
                            placeholder='Password'
                            className={styles.input}
                        />
                        <div className={styles.btn} onClick={() => console.log('Clicked login')}>
                            <b>Login</b>
                        </div>
                    </div>
                    <div className={styles.signup} style={this.getSignupStyle()}>
                        <input
                            type='Name'
                            name='name'
                            className={styles.input}
                            placeholder='Name'
                        />
                        <input
                            type='Email'
                            name='Email'
                            className={styles.input}
                            placeholder='Email'
                        />
                        <input
                            type='password'
                            name='Password'
                            placeholder='Password'
                            className={styles.input}
                        />
                        <input
                            type='password'
                            name='confirmpass'
                            placeholder='Re-enter Password'
                            className={styles.input}
                        />
                        <input
                            type='password'
                            name='confirmpass'
                            placeholder='Password'
                            className={styles.input}
                        />
                        <div className={styles.btn}>
                            <b>Sign up</b>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Auth;
