import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



const PortfolioSidebarList = (props) => {
    const portfolioList = props.portfolioItems.map((item) => {
        return (
            <div key={item.id} className="portfolio-item-thumb">
                <div className="portfolio-thumb-img">
                    <img src={item.thumb_image_url}/>
                </div>

                <div className="text-content">
                    <div className="title">{item.name}</div>
                    <a className="delete-icon" onClick={() => props.handleDeleteClick(item)}>
                        <FontAwesomeIcon icon="trash"/>
                    </a>
                </div>
            </div>
        )
    })
    return <div className="portfolio-sidebar-list-wrapper">{portfolioList}</div>
}

export default PortfolioSidebarList;