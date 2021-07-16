import React, {Component} from 'react';

export default class BlogForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: '',
            blog_status: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.handleSuccessfulBlogFormSubmission(this.state);
    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                     name="title"
                    onChange={this.handleChange}
                    placeholder="Blog Title"
                    type="text"
                    value={this.state.title}/>
                <input 
                    name="blog_status"
                    onChange={this.handleChange}
                    placeholder="Blog Status"
                    type="text"
                    value={this.state.blog_status}/>
                <button>Save</button>
            </form>
        )
    }
}