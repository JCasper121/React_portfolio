import React, {Component} from 'react';
import ReactModal from 'react-modal';
import BlogForm from '../blog/blog-form';

// Allows screen readers to see modal
ReactModal.setAppElement(".app-wrapper");

export default class BlogModal extends Component {
    constructor(props) {
        super(props);

        this.customStyles = {
            content: {
                top: "50%",
                left: "50%",
                right: "auto",
                marginRight: "-50%",
                transform: "translate(-50%, -50%)",
                width: "800px"

            },
            overlay: {
                backgroundColor: "rgba(1, 1, 1, 0.75)"
            }
        }

        this.handleSuccessfulBlogFormSubmission = this.handleSuccessfulBlogFormSubmission.bind(this);
    }

    handleSuccessfulBlogFormSubmission(blog) {
        console.log("Blog from blog form", blog)
    }



    render() {
        return(
            <ReactModal 
            style={this.customStyles}
            onRequestClose={() => {
                this.props.handleModalClose();
            }} isOpen={this.props.modalIsOpen}>

                <BlogForm
                    handleSuccessfulBlogFormSubmission = { this.handleSuccessfulBlogFormSubmission}
                />

            </ReactModal>
        )
    }
}