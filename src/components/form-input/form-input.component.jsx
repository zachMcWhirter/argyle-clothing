import React from "react";

import "./form-input.styles.scss";

const FormInput = ({handleChange, label, ...otherProps}) => (
  <div className="group" >
    <input className="form-input" onChange={handleChange} {...otherProps} />
    {
        // if we have created a label component already, then render it
        // otherwise, don't render a label component
      label ? 
      (<label
          // if the property has any values (length) then apply the class 
          // of "shrink" to it, otherwise return an empty string. 
          // And always return the form-input-label
        className={`${otherProps.value.length ? "shrink" : ""} form-input-label`}
      >
          {/* also render the label text */}
        {label}
      </label>)
      : null
    }
  </div>
)

export default FormInput;