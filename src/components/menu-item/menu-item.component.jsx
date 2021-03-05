import React from "react";

import "./menu-item.styles.scss"

    // Destructure the {title} property from props and
    // pass it into the h1 so it works dynamically with all menu-items
const MenuItem = ({ title, imageUrl, size }) => (
  <div 
    style={{
          // using a js template strings for: 
          // `url(${imageUrl})`  and  {`${size} "menu-item"`}
      backgroundImage: `url(${imageUrl})`
    }} 
    className={`${size} menu-item`}
  >
    <div className="content">
        <h1 className="title">{title}</h1>
        <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;