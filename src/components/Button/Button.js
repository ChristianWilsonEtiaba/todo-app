import React from "react";

import './Button.css'

export const Button = ({ onClick, children }) => (
  <button class="add" type="button" onClick={onClick}>
    {children}
  </button>
);
