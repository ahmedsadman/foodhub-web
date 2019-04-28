import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styles from '../views/BlogList.module.css';

class BlogList extends Component {
    render() {
        return (
            <div className={styles.all}>

                <div className={styles.Cover}>
                    <div className={styles.frontText}>

                        <div className={styles.Extralarge}>
                            <br/>The blog
                        </div>
                        <div className={styles.Medium}>
                            Know Food |  Write Food  |  Read Food
                        </div>
                    </div>
                    <div className={styles.add}>
                        <Link to='/'> 
                            <i className='fa fa-pencil fa-lg' />
                        </Link> 
                   
                    </div>
                    
                </div>

                <div id='main' style={inStyle.container}>
                    <div className={styles.Middle}>
                        <div className={styles.middleLeft}>
                            <div className={`${styles.orange} ${styles.Large}`}>
                                Today's Blog<br/><br/>
                            </div>
                            <div className={styles.blog}>
                                <img className={styles.blogImg} src='/images/css/Blog-1.jpeg' />
                                <br/>

                                <div className={`${styles.orange} ${styles.Large }`}>
                                    Craving for Haleem this Ramadan?
                                </div>
                                <div className={styles.Author}>
                                    <img className={styles.authorImg} src='/images/css/Tarik.jpg' />
                                    <div className={`${styles.ash} ${styles.small } ${styles.authorInfo}`}>
                                        Tanveer Kabir<br/>
                                        May 19, 2018<br/>
                                        
                                    </div>  
                                    <div className={`${styles.icon} ${styles.orange}`}>
                                        follow
                                    </div> 
                                </div>
                                <div className={styles.article}>
                                Haleem is undoubtedly one of the staples of Ramadan in Bangladesh during Iftar. 
                                        I personally like having it throughout the month and even during other times of the year. 
                                        During my travels outside the country to my surprise, 
                                        I have discovered that the actual name of the dish is ‘Daleem'...  
                                        <span className={styles.orange}>
                                            <br/>Continue Reading...
                                        </span>

                                </div>
                                
                            </div>
                            <div className={styles.blog}>
                                <img className={styles.blogImg} src='/images/css/Blog-2.jpg' />
                                <br/>

                                <div className={`${styles.orange} ${styles.Large }`}>
                                    Dos Locos: Amazing New Mexican Restaurant in Dhaka
                                </div>
                                <div className={styles.Author}>
                                    <img className={styles.authorImg} src='/images/css/Tarik.jpg' />
                                    <div className={`${styles.ash} ${styles.small } ${styles.authorInfo}`}>
                                        Tanveer Kabir<br/>
                                        May 19, 2018<br/>
                                        
                                    </div>  
                                    <div className={`${styles.icon} ${styles.orange}`}>
                                        follow
                                    </div> 
                                </div>
                                <div className={styles.article}>
                                Authentic Mexican cuisine is something which is quite rare in Bangladesh. 
                                I myself, on countless occasions, have tried tacos, burritos and nachos at various street stalls and while some of those tasted good in their own ways, they weren’t really AUTHENTIC. 
                                A few days ago, a foodie friend 
                                        <span className={styles.orange}>
                                            <br/>Continue Reading...
                                        </span>

                                </div>
                                
                            </div>
                        </div>
                        <div className={styles.middleRight}>
                            <div className={`${styles.orange} ${styles.Medium}`}>
                                Most viewed blogs<br/><br/>
                            </div>
                            <div>
                                <div className={styles.topBlog}>
                                    <img className={styles.topImg} src='/images/css/Blog-1.jpeg' />
                                    <div className={styles.topInfo}>
                                        <div className={styles.orange}>
                                            Craving for Haleem this Ramadan?
                                        </div><br/>
                                        <div className={styles.Small}>
                                            by Tanveer Iqbal
                                    </div>
                                        
                                    </div>
                                </div>
                                <div className={styles.topBlog}>
                                    <img className={styles.topImg} src='/images/css/Blog-1.jpeg' />
                                    <div className={styles.topInfo}>
                                    <div className={styles.orange}>
                                            Craving for Haleem this Ramadan?<br/>
                                        </div><br/>
                                    <div className={styles.Small}>
                                            by Tanveer Iqbal
                                    </div>        
                                    </div>
                                </div>
                                <div className={styles.topBlog}>
                                    <img className={styles.topImg} src='/images/css/Blog-1.jpeg' />
                                    <div className={styles.topInfo}>
                                    <div className={styles.orange}>
                                            Craving for Haleem this Ramadan?
                                        </div><br/>
                                        <div className={styles.Small}>
                                            by Tanveer Iqbal
                                    </div>
                                    </div>
                                </div>                               
                            </div>
                            <br/><br/>
                            <div className={`${styles.orange} ${styles.Medium}`}>
                                Populur Writers<br/><br/>
                            </div>
                            <div>
                                <div className={styles.topBlog}>
                                    <img className={styles.topAuthorImg} src='/images/css/Tarik.jpg' />
                                    <div className={styles.topInfo}>
                                        <div className={`${styles.orange} ${styles.Medium}`}>
                                        Tanvir Iqbal<br/>
                                        </div>
                                        32 Articles
                                    </div>
                                    <div className={`${styles.icon} ${styles.orange}`}>
                                        follow
                                    </div> 
                                </div>
                                <div className={styles.topBlog}>
                                    <img className={styles.topAuthorImg} src='/images/css/Tarik.jpg' />
                                    <div className={styles.topInfo}>
                                        <div className={`${styles.orange} ${styles.Medium}`}>
                                        Tanvir Iqbal<br/>
                                        </div>
                                        32 Articles
                                    </div>
                                    <div className={`${styles.icon} ${styles.orange}`}>
                                        follow
                                    </div> 
                                </div>
                                <div className={styles.topBlog}>
                                    <img className={styles.topAuthorImg} src='/images/css/Tarik.jpg' />
                                    <div className={styles.topInfo}>
                                        <div className={`${styles.orange} ${styles.Medium}`}>
                                        Tanvir Iqbal<br/>
                                        </div>
                                        32 Articles
                                    </div>
                                    <div className={`${styles.icon} ${styles.orange}`}>
                                        follow
                                    </div> 
                                </div>
                                
                                                             
                            </div>

                        </div>
                    </div>
                    
		        </div>

            </div>
        )
    }
}

const inStyle = {
    container: {
        marginLeft: 'auto',
        marginRight: 'auto',
        width: 1140,
        paddingTop: 30,
        paddingBottom: 30
    }
};

export default BlogList;
