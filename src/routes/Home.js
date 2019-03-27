import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../views/Home.module.css';

class Home extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			food: '',
			location: ''
		};
	}

	onSearch() {
		console.log('Search event');
		console.log(this.state.food, this.state.location);
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
                    <Link className={`${styles.btn} ${styles.btnDark}`} to='/' onClick={this.onSearch.bind(this)}>
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
							onChange={(e) => this.onChangeInput('food', e)}
                        />
                        <input
                            type='text'
                            className={styles.smallSearch}
                            name='Location'
							placeholder='Location'
							value={this.state.location}
							onChange={(e) => this.onChangeInput('location', e)}
                        />
                    </form>
                </div>
            </header>
        );
    }
}

export default Home;
