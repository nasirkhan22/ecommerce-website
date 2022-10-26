import React from "react";
import "./menu-item.style.scss"

const MenuItem = ({title, imageURL, size}) => (
    <div className={`${size} menu-item`}>
        <div className="background-image" style={{backgroundImage : `url(${imageURL})`}}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">shop now</span>

        </div>
    </div>
)
export default MenuItem;