import React from "react";
import { withRouter} from "react-router-dom";

import "./menu-item.styles.scss"

    // Destructure the {title} property from props and
    // pass it into the h1 so it works dynamically with all menu-items
const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (

      // using js template strings for: 
      // {`${size} "menu-item"`} and `url(${imageUrl})`
  <div className={`${size} menu-item`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div 
      className="background-image"
      style={{   
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className="content">
        <h1 className="title">{title.toUpperCase()}</h1>
        <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);