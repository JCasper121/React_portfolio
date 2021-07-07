import React, { Component} from "react";
import axios from "axios";
import PortfolioSidebarList from "../portfolio/portfolio-sidebar-list";
import PortfolioForm from "../portfolio/portfolio-form";
export default class PortfolioManager extends Component {
    constructor() {
        super();

        this.state = {
            portfolioItems: [],
            isLoading: false,
            data: []

        }
        this.handleSuccessfulFormSubmission = this.handleSuccessfulFormSubmission.bind(this);
        this.handleFormSubmissionError = this.handleFormSubmissionError.bind(this);
    }

    getPortfolioItems() {
        axios.get('https://johncasper.devcamp.space/portfolio/portfolio_items?order_by=created_at&direction=desc', {withCredentials: true})
            .then(response => {
                // handle success
                this.setState({
                    portfolioItems: [...response.data.portfolio_items]
                })
            })
            .catch(error => {
                // handle error
                console.log("Error: ", error);
            })
            .then(function () {
                // always executed
            });
    }

    handleSuccessfulFormSubmission(portfolioItem) {
        console.log("handleSuccessfulFormSubmission", portfolioItem);
        this.setState({
            portfolioItems: [portfolioItem].concat(this.state.portfolioItems)
        })
    }

    handleFormSubmissionError(error) {
        console.log("handleFormSUbmission error: ", error);
    }

    componentDidMount() {
        this.getPortfolioItems();
    }

    render() {
        return (
            <div className="portfolio-manager-wrapper">
                <div className="left-column">
                    <PortfolioForm
                        handleSuccessfulFormSubmission = {this.handleSuccessfulFormSubmission}
                        handleFormSubmissionError = {this.handleFormSubmissionError}/>
                </div>
                <div className="right-column">
                    
                    <PortfolioSidebarList portfolioItems={this.state.portfolioItems}/>
                </div>
            </div>
        )
    }
}