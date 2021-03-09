import React from "react";

import './Checkbox.css'

export const Checkbox = ({ onClick, defaultChecked }) => (
  <input class="checkbox" type="checkbox" onClick={onClick} defaultChecked={defaultChecked} />
);
