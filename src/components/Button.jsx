import React from "react";
import "./Button.css";

const Button = ({ children, variant = "default", size = "default", className = "", ...props }) => {
  return (
    <button className={`button button-${variant} button-${size} ${className}`} {...props}>
      {children}
    </button>
  )
}

export default Button
