import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import styles from '../views/Home.module.css';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            food: '',
            area: '',
            redirect: false
        };
    }

    onSearch() {
        if (this.state.food || this.state.area) {
            this.setState({ redirect: true });
        }
    }

    redirectSearch() {
        if (this.state.redirect) {
            return (
                <Redirect
                    to={{
                        pathname: '/main/restaurants/search',
                        state: {
                            area: this.state.area.toLowerCase(),
                            food: this.state.food.toLowerCase()
                        }
                    }}
                />
            );
        }
    }

    onChangeInput(type, event) {
        this.setState({ [type]: event.target.value });
    }

    render() {
        return (
            <header className={styles.header}>
                <nav>
                    <div className={styles.row}>
                        <ul className={styles.mainNav}>
                            <li>
                                <Link to='/'>About us</Link>
                            </li>
                            <li>
                                <Link to='/'>Food Photography</Link>
                            </li>
                            <li>
                                <Link to='/'>Blog</Link>
                            </li>
                            <li>
                                <Link to='/auth'>Sign in</Link>
                            </li>
                        </ul>
                    </div>
                </nav>
                <div className={styles.frontText}>
                    <Link
                        className={`${styles.btn} ${styles.btnDark}`}
                        to='/'
                        onClick={this.onSearch.bind(this)}
                    >
                        <i className='fa fa-search' />
                    </Link>
                </div>

                <div>
                    <form>
                        <input
                            type='text'
                            className={styles.bigSearch}
                            name='search by food'
                            placeholder='Search by Food'
                            value={this.state.food}
                            onChange={e => this.onChangeInput('food', e)}
                        />
                        <input
                            type='text'
                            className={styles.smallSearch}
                            name='Location'
                            placeholder='Location'
                            value={this.state.area}
                            onChange={e => this.onChangeInput('area', e)}
                        />
                    </form>
                </div>
                {this.redirectSearch()}
            </header>
        );
    }
}

export default Home;
