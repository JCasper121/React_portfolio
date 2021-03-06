import React from "react";
import {Link} from 'react-router-dom';

const BlogItem = props => {
    const { 
        id,
        title,
        content,
        blog_status,
        featured_image_url
    } = props.blogItem
    return (
        <div className="blog-item">
            <Link to={`/b/${id}`}>
                <h1>{title}</h1>
            </Link>
            
            <div>{content}</div>
        </div>
    )
}

export default BlogItem;