import React from 'react';
import styles from '../views/Auth.module.css';

const Auth = () => {
    return (
        <div className={styles.body}>
            <div className={styles.back}>
                <div className={styles.LoginQuery}>
                    <p>Have an account?</p>
                    <div className={styles.btn}>Log in</div>
                </div>
                <div className={styles.SignupQuery}>
                    <p>Don't have an account?</p>
                    <div className={styles.btn}>Sign in</div>
                </div>
            </div>
            <div className={styles.form}>
                <div className={styles.login}>
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
                    <div className={styles.btn}><b>Login</b></div>
                </div>
                <div className={styles.signup}>
                    <input type='Name' name='name' className={styles.input} placeholder='Name' />
                    <input type='Email' name='Email' className={styles.input} placeholder='Email' />
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
};

export default Auth;
