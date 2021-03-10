import React from "react";

import "./custom-button.styles.scss";

  // The rendered button will recieve the type="submit" property from the
  //  ...otherProps parameter that we are passing into CustomButton
const CustomButton = ({ children, ...otherProps}) => (
  <button className="custom-button" {...otherProps}>
    {children}
  </button>
)

export default CustomButton;