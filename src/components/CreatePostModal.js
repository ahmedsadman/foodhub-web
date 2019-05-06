import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { api } from '../utils/api';

class CreatePostModal extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            content: '',
            image: null
        };
        this.swal = withReactContent(Swal);
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

    onInputChange = (e, type) => {
        this.setState({
            [type]: e.target.value
        });
    };

    handleImageChange = async e => {
        try {
            this.setState({ image: e.target.files[0] }, () =>
                console.log(this.state)
            );
        } catch (e) {
            console.log(e);
        }
    };

    createPost = async () => {
        const formData = new FormData();
        formData.append('title', this.state.title);
        formData.append('content', this.state.content);
        formData.append('user', this.props.userId);
        formData.append('image', this.state.image);

        const config = {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        };

        try {
            const response = await axios.post(
                api.createBlogPost,
                formData,
                config
            );
            console.log(response.data);
            this.props.onExit();
            this.props.updateList();
            this.showConfirmation(true, 'Post created successfully');
        } catch (e) {
            console.log(e.message);
            this.showConfirmation(false, null, 'Could not create the post');
        }
    };

    render() {
        return (
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    width: '100%',
                    position: 'relative'
                }}
            >
                <div style={{ position: 'absolute', top: 0, right: 0 }}>
                    <i
                        className='fa fa-close'
                        style={{ cursor: 'pointer' }}
                        onClick={this.props.onExit}
                    />
                </div>
                <div
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        paddingBottom: 10,
                        borderBottom: '1px solid orange',
                        width: '100%'
                    }}
                >
                    <h1 style={{ fontSize: '80%', margin: 0, padding: 0 }}>
                        Create New Post
                    </h1>
                </div>
                <div style={inStyle.fieldSection}>
                    <span>Post Title</span>
                    <input
                        type='text'
                        value={this.state.title}
                        onChange={e => this.onInputChange(e, 'title')}
                    />
                </div>
                <div style={inStyle.fieldSection}>
                    <span>Content</span>
                    <textarea
                        style={{ height: 250 }}
                        value={this.state.content}
                        onChange={e => this.onInputChange(e, 'content')}
                    />
                </div>
                <div style={inStyle.fieldSection}>
                    <span>Cover Image</span>
                    <input type='file' onChange={this.handleImageChange} />
                </div>
                <button style={inStyle.modalButton} onClick={this.createPost}>
                    Create
                </button>
            </div>
        );
    }
}

const inStyle = {
    modalButton: {
        width: 'auto',
        alignSelf: 'center',
        padding: '6px 10px',
        outline: 0,
        color: 'orange',
        backgroundColor: 'white',
        borderRadius: 5,
        border: '2px solid orange',
        boxShadow: '1px 1px 5px #ddd',
        margin: '10px 0',
        cursor: 'pointer',
        fontSize: '100%'
    },
    fieldSection: {
        flexDirection: 'column',
        display: 'flex',
        width: '100%',
        margin: '10px 0'
    }
};

const mapStateToProps = state => {
    return {
        userId: state.auth.userData._id
    };
};

export default connect(
    mapStateToProps,
    {}
)(CreatePostModal);
