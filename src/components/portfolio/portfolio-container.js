import { directive } from "babel-types";
import React, { Component } from "react";
import PortfolioItem from "./portfolio-item";
import axios from "axios";

export default class PortfolioContainer extends Component {
    constructor() {
        super();
        
        this.state = {
            pageTitle: "Welcome to my portfolio",
            isLoading: false,
            data: []

            
        }
        
        this.handleFilter = this.handleFilter.bind(this);
    }

    handleFilter(filter) {
        this.setState({
            data: this.state.data.filter(i => {
                return i.category === filter;
            })
        })
    }

    getPortfolioItems() {
        axios.get('https://johncasper.devcamp.space/portfolio/portfolio_items')
          .then(response => {
            // handle success
            console.log(response);
            this.setState({
                data: response.data.portfolio_items
            })
          })
          .catch(error => {
            // handle error
            console.log(error);
          })
          .then(function () {
            // always executed
          });
      }

    portfolioItems() {

        return this.state.data.map(item => {
            return <PortfolioItem 
                        key={item.id}
                        item={item}/>;
        })
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        return (
            <div>
                <h2>{this.state.pageTitle}</h2>
                <button onClick={() => this.handleFilter("Languages")}>Languages</button>
                <button onClick={() => this.handleFilter("Frameworks")}>Frameworks</button>
                {this.portfolioItems()}
            </div>
        )
    }
}