import React from "react";
import './Input.css'

export const Input = ({ value, onChange }) => (
  <input class="input" type="text" value={value} onChange={onChange} />
);
