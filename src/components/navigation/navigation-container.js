import React, {Component} from "react";
import {NavLink} from "react-router-dom"; 

export default class NavigationContainer extends Component {

    constructor() {

        super();
    }

    render() {
        return (
            <nav>
                <button>
                    <NavLink exact to="/">Home</NavLink>
                </button>
                <button>
                    <NavLink to="/about-me">About</NavLink>
                </button>
                <button>
                    <NavLink to="/contact">Contact</NavLink>
                </button>
                <button>
                    <NavLink to="/blog">Blog</NavLink>
                </button>
                {false ? <button>Add Blog</button> : null }
                    
            </nav>
        )
    }
}