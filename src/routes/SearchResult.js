import React, { Component } from 'react';
import styles from '../views/SearchResult.module.css';

class SearchResult extends Component {
    render() {
        return (
            /* typed my html here*/
            
            <div className={styles.all}>
            
                <nav> 
                    <div className={styles.row}>
                        <ul className={styles.nav}> 
                            <link className={styles.btn} to ='/'>  <i className='fa fa-search'></i> </link>
                            <li className={styles.navlist} className={styles.navInput}> 
                                <input 
                                type='text' 
                                name='location' 
                                className={styles.smallSearch} 
                                placeholder='location' 
                                /> 
                                
                            </li>
                            <li className={styles.navlist}className={styles.navInput}> 
                                <input 
                                    type='text' 
                                    name='search by food' 
                                    className={styles.bigSearch} 
                                    placeholder='search by food' 
                                    /> 
                                </li>
                            <li className={styles.navlist}> <link className={styles.navlink} className={styles.navlistlink} to='/'>Sign in</link></li>
                            <li className={styles.navlist}> <link className={styles.navlink} className={styles.navlistlink} to='/'>Blog</link></li>
                            <li className={styles.navlist}> <link className={styles.navlink} className={styles.navlistlink} to='/'>Food Photography</link></li>
                            <li className={styles.navlist}> <link className={styles.navlink} className={styles.navlistlink} to='/'>About us</link></li>
                        </ul>
                    </div>
                </nav>

                

                
                <p className={styles.p}>Result for ‘Burger’, ‘Uttara’</p>

                {/*Filter Block*/}
                
                <section>
                    <div className={styles.filterBlock}>
                        <span className={styles.orange}> 
                            Tags <br/><br/>
                        </span>
                        <span classname={styles.Tags}>
                            Burgers
                        </span>
                        <span classname={styles.Tags}>
                            Uttara
                        </span>

                        <br/>


                        <span className={styles.orange}> 
                            <br/><br/> Sort by <br/> <br/>
                        </span>
                        <span className={styles.Ash}>
                            <link to='/'>Popularity</link> <br/>
                            <link to='/'>rating</link> <br/>
                            <link to='/'>Price</link> <br/>
                            <link to='/'>Distance</link> <br/>
                            <link to='/'>Recently Added</link> <br/>
                            
                        </span>


                        <span className={styles.orange}> 
                            <br/><br/> Restaurant Type <br/> <br/>
                        </span>
                        <span className={styles.Ash}>
                            
                            <link to='/'>Fine Dinning</link> <br/>
                            <link to='/'>Fast food</link> <br/>
                            <link to='/'>Food Cart</link> <br/>
                            <link to='/'>Rooptop</link> <br/>
                            <link to='/'>Poolside</link> <br/>
                    
                        </span>


                        <span className={styles.orange}> 
                            <br/><br/> Location <br/> <br/>
                        </span>
                        <span className={styles.Ash}>
                            <link className={styles.fliterLink} to='/'>Uttara</link> <br/>
                            <link to='/'>Banani</link> <br/>
                            <link to='/'>Dhanmondi</link> <br/>
                            <link to='/'>Mohammadpur</link> <br/>
                            <link to='/'>Mirpur</link> <br/>
                            <link to='/'>Khilgaon</link> <br/>
                        </span>

                    </div>
                </section>

            {/*Restaurant Block */}	
                <div className={styles.Restaurants}>

                    <div className={styles.resBlock}>
                        <div className={styles.left}>
                            <img className={styles.resImg} src='/images/css/Takeout.jpg'/>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.large}>Takeout</div>
                            <div className={styles.small}>17, Level - 3, Sonargaon Janapath, Rd No 3<br/>
                            Uttara, Dhaka.<br/><br/></div>
                            <div className={styles.medium}> Fast food<br/> 
                            $$$<br/></div>
                            <div className={styles.orange}>Open now</div>
                            


                        </div>
                        <span className={styles.numbers}>
                                <div className={styles.rating}>
                                4.8
                                </div>
                                <div className={styles.reviewCheckins}>
                                    778 Reviews<br/>
                                    2458 Check-ins
                                </div>
                                <div className={styles.icons}>
                                    <link to='/'><i className={styles.icon} className='fa fa-phone'></i></link>
                                    <link to='/'><i className={styles.icon} className='fa fa-envelope'></i></link>
                                    <link to='/'><i className={styles.icon} className='fa fa-search'></i></link>

                                </div>
                        </span>
                            
                    </div>

                    <div className={styles.resBlock}>
                        <div className={styles.left}>
                            <img className={styles.resImg} src='/images/css/Takeout.jpg'/>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.large}>Takeout</div>
                            <div className={styles.small}>17, Level - 3, Sonargaon Janapath, Rd No 3<br/>
                            Uttara, Dhaka.<br/><br/></div>
                            <div className={styles.medium}> Fast food<br/> 
                            $$$<br/></div>
                            <div className={styles.orange}>Open now</div>

                        </div>
                        <span className={styles.numbers}>
                                <div className={styles.ratings}>
                                4.8
                                </div>
                                <div className={styles.reviewCheckins}>
                                    778 Reviews<br/>
                                    2458 Check-ins
                                </div>
                                <div className={styles.icons}>
                                    <link to='/'><i className={styles.icon} className='fa fa-phone'></i></link>
                                    <link to='/'><i className={styles.icon} className='fa fa-envelope'></i></link>
                                    <link to='/'><i className={styles.icon} className='fa fa-search'></i></link>

                                </div>
                        </span>
                            
                    </div>

                    <div className={styles.resBlock}>
                        <div className={styles.left}>
                            <img className={styles.resImg} src='/images/css/Takeout.jpg'/>
                        </div>
                        <div className={styles.right}>
                            <div className={styles.large}>Takeout</div>
                            <div className={styles.small}>17, Level - 3, Sonargaon Janapath, Rd No 3<br/>
                            Uttara, Dhaka.<br/><br/></div>
                            <div className={styles.medium}> Fast food<br/> 
                            $$$<br/></div>
                            <div className={styles.orange}>Open now</div>

                        </div>
                        <span className={styles.numbers}>
                                <div className={styles.ratings}>
                                4.8
                                </div>
                                <div className={styles.reviewCheckins}>
                                    778 Reviews<br/>
                                    2458 Check-ins
                                </div>
                                <div className={styles.icons}>
                                    <link to='/'><i className={styles.icon} className='fa fa-phone'></i></link>
                                    <link to='/'><i className={styles.icon} className='fa fa-envelope'></i></link>
                                    <link to='/'><i className={styles.icon} className='fa fa-search'></i></link>

                                </div>
                        </span>
                            
                    </div>

                    
                </div>

                
                {/*Sidebar */}    
                <div className={styles.nearbyBlock}>
                    Nearby Restaurants in Uttara
                    <div className={styles.nearby}>
                        <img classname={styles.divImg} src='/images/css/Madchef.jpg'/>
                        <h5>Madchef</h5> 
                        <h6>Sector 13</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img classname={styles.divImg} src='/images/css/Madchef.jpg'/>
                        <h5>Khana's</h5>
                        <h6>Sector 13</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img classname={styles.divImg} src='/images/css/Madchef.jpg'/>
                        <h5>Mr.Manik</h5>
                        <h6>Sector 13</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img classname={styles.divImg} src='/images/css/Madchef.jpg'/>
                        <h5>Mumins Foods</h5>
                        <h6>Sector 13</h6>
                    </div>
                </div>

                <div className={styles.featuredBlock}>
                    Featured Restaurants
                    <div className={styles.nearby}>
                    <img classname={styles.divImg} src='/images/css/Madchef.jpg'/>
                        <h5>Madchef</h5>
                        <h6>Uttara</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img classname={styles.divImg} src='/images/css/Madchef.jpg'/>
                        <h5>Khana's</h5>
                        <h6>Banani</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img classname={styles.divImg} src='/images/css/Madchef.jpg'/>
                        <h5>Mr.Manik</h5>
                        <h6>Dhanmondi</h6>
                    </div>
                    <div className={styles.nearby}>
                        <img classname={styles.divImg} src='/images/css/Madchef.jpg'/>
                        <h5>Mumins Foods</h5>
                        <h6>Mirpur</h6>
                    </div>
                </div>

            </div>
        )
    }
}

export default SearchResult;