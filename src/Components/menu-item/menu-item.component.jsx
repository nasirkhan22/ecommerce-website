import React from "react";
import {useNavigate} from "react-router-dom"
import "./menu-item.style.scss"

const MenuItem = ({title, imageURL, size, linkUrl}) => {
    const navigate = useNavigate();
    return(
    <div className={`${size} menu-item`} onClick={()=> navigate(linkUrl)}>
        <div className="background-image" style={{backgroundImage : `url(${imageURL})`}}/>
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className="subtitle">shop now</span>

        </div>
    </div>
    )
}

export default (MenuItem);