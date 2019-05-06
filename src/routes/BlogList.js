import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import axios from 'axios';
import Modal from '../components/common/Modal';
import CreatePostModal from '../components/CreatePostModal';
import PostDetailModal from '../components/PostDetailModal';
import { api } from '../utils/api';
import BlogItem from '../components/BlogItem';
import styles from '../views/BlogList.module.css';
const path = require('path');

class BlogList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showCreateModal: false,
            showDetailModal: false,
            blogList: [],
            post: {}
        };
    }

    componentDidMount() {
        this.fetchBlogList();
    }

    handleAddButton = () => {
        this.setState({ showCreateModal: !this.state.showCreateModal });
    };

    handlePostClick = (item = {}) => {
        this.setState({
            showDetailModal: !this.state.showDetailModal,
            post: item
        });
    };

    async fetchBlogList() {
        try {
            const response = await axios.get(api.getBlogList);
            console.log(response.data);
            this.setState({ blogList: response.data.data });
        } catch (e) {
            console.log(e);
        }
    }

    renderBlogList() {
        if (this.state.blogList.length === 0) {
            return <p>No posts found</p>;
        }
        return this.state.blogList.map(item => {
            return (
                <BlogItem
                    key={item._id}
                    styles={styles}
                    item={item}
                    onClick={() => this.handlePostClick(item)}
                />
            );
        });
    }

    renderAddButton() {
        if (this.props.isLoggedIn) {
            return (
                <div className={styles.add}>
                    <div
                        style={{ cursor: 'pointer' }}
                        onClick={this.handleAddButton}
                    >
                        <i className='fa fa-pencil fa-lg' />
                    </div>
                </div>
            );
        }
        return null;
    }

    render() {
        return (
            <div className={styles.all}>
                <Modal show={this.state.showCreateModal}>
                    <CreatePostModal
                        onExit={this.handleAddButton}
                        updateList={this.fetchBlogList.bind(this)}
                    />
                </Modal>
                <Modal
                    show={this.state.showDetailModal}
                    style={{ height: 600, overflowY: 'scroll', width: '50%' }}
                >
                    <PostDetailModal
                        onExit={this.handlePostClick}
                        item={this.state.post}
                    />
                </Modal>
                <div className={styles.Cover}>
                    <div className={styles.frontText}>
                        <div className={styles.Extralarge}>
                            <br />
                            The blog
                        </div>
                        <div className={styles.Medium}>
                            Know Food | Write Food | Read Food
                        </div>
                    </div>
                    {this.renderAddButton()}
                </div>

                <div id='main' style={inStyle.container}>
                    <div className={styles.Middle}>
                        <div className={styles.middleLeft}>
                            <div className={`${styles.orange} ${styles.Large}`}>
                                Today's Blog
                                <br />
                                <br />
                            </div>
                            {this.renderBlogList()}
                        </div>
                        <div className={styles.middleRight}>
                            <div
                                className={`${styles.orange} ${styles.Medium}`}
                            >
                                Most viewed blogs
                                <br />
                                <br />
                            </div>
                            <div>
                                <div className={styles.topBlog}>
                                    <img
                                        className={styles.topImg}
                                        src='/images/css/Blog-1.jpeg'
                                        alt=''
                                    />
                                    <div className={styles.topInfo}>
                                        <div className={styles.orange}>
                                            Craving for Haleem this Ramadan?
                                        </div>
                                        <br />
                                        <div className={styles.Small}>
                                            by Tanveer Iqbal
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.topBlog}>
                                    <img
                                        className={styles.topImg}
                                        src='/images/css/Blog-1.jpeg'
                                        alt=''
                                    />
                                    <div className={styles.topInfo}>
                                        <div className={styles.orange}>
                                            Craving for Haleem this Ramadan?
                                            <br />
                                        </div>
                                        <br />
                                        <div className={styles.Small}>
                                            by Tanveer Iqbal
                                        </div>
                                    </div>
                                </div>
                                <div className={styles.topBlog}>
                                    <img
                                        className={styles.topImg}
                                        src='/images/css/Blog-1.jpeg'
                                        alt=''
                                    />
                                    <div className={styles.topInfo}>
                                        <div className={styles.orange}>
                                            Craving for Haleem this Ramadan?
                                        </div>
                                        <br />
                                        <div className={styles.Small}>
                                            by Tanveer Iqbal
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br />
                            <br />
                            <div
                                className={`${styles.orange} ${styles.Medium}`}
                            >
                                Populur Writers
                                <br />
                                <br />
                            </div>
                            <div>
                                <div className={styles.topBlog}>
                                    <img
                                        className={styles.topAuthorImg}
                                        src='/images/css/Tarik.jpg'
                                        alt=''
                                    />
                                    <div className={styles.topInfo}>
                                        <div
                                            className={`${styles.orange} ${
                                                styles.Medium
                                            }`}
                                        >
                                            Tanvir Iqbal
                                            <br />
                                        </div>
                                        32 Articles
                                    </div>
                                    <div
                                        className={`${styles.icon} ${
                                            styles.orange
                                        }`}
                                    >
                                        follow
                                    </div>
                                </div>
                                <div className={styles.topBlog}>
                                    <img
                                        className={styles.topAuthorImg}
                                        src='/images/css/Tarik.jpg'
                                        alt=''
                                    />
                                    <div className={styles.topInfo}>
                                        <div
                                            className={`${styles.orange} ${
                                                styles.Medium
                                            }`}
                                        >
                                            Tanvir Iqbal
                                            <br />
                                        </div>
                                        32 Articles
                                    </div>
                                    <div
                                        className={`${styles.icon} ${
                                            styles.orange
                                        }`}
                                    >
                                        follow
                                    </div>
                                </div>
                                <div className={styles.topBlog}>
                                    <img
                                        className={styles.topAuthorImg}
                                        src='/images/css/Tarik.jpg'
                                        alt=''
                                    />
                                    <div className={styles.topInfo}>
                                        <div
                                            className={`${styles.orange} ${
                                                styles.Medium
                                            }`}
                                        >
                                            Tanvir Iqbal
                                            <br />
                                        </div>
                                        32 Articles
                                    </div>
                                    <div
                                        className={`${styles.icon} ${
                                            styles.orange
                                        }`}
                                    >
                                        follow
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
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

const mapStateToProps = state => {
    return {
        isLoggedIn: state.auth.isLoggedIn
    };
};

export default connect(mapStateToProps, {})(BlogList);
