import React from "react";
import { Checkbox } from "../Checkbox/Checkbox";
import { Button } from "../Button/Button";

import './List.css'

export const List = ({ list, onChangeBox, handleClick }) => (
  
  <div className="list">
  <div>
    {list.map((item) => (
      <div className="todo"
        key={item.id}
        style={{ textDecoration: item.done ? "line-through rgb(0, 138, 218)" : null }}
      >
        <Checkbox class="Checkbox"
          onClick={() => onChangeBox(item)}
          defaultChecked={item.done}
          />{" "}
          <label className="name">
        {item.name}
        </label>
      </div>
    ))}
    <div>
      <Button onClick={(item) => handleClick(item)}>
        Eliminar completados
      </Button>
    </div>
  </div>
  </div>
);