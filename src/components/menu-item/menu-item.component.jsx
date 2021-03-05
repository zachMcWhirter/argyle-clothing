import React from "react";

    // Destructure the {title} property from props and
    // pass it into the h1 so it works dynamically with all menu-items
const MenuItem = ({ title }) => (
  <div className="menu-item">
    <div className="content">
      <h1 className="title">{title}</h1>
      <span className="subtitle">SHOP NOW</span>
    </div>
  </div>
);

export default MenuItem;