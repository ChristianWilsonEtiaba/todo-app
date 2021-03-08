import React, { Component } from "react";
import './App.css';
import { List } from "../List/List";
import { Input } from "../Input/Input";
import { Button } from "../Button/Button";

export default class App extends Component {
  state = {
    todos: [
      { id: 1, name: "Aprender LESS", done: true },
      { id: 2, name: "Realizar test en React", done: false },
      { id: 3, name: "Desplegar aplicación", done: false }
    ],
    todoText: ""
  };

  onChangeInput = (e) => {
    this.setState({ todoText: e.target.value });
  };

  onSubmitTodo = () => {
    this.setState(({ todos, todoText }) => ({
      todos: [
        ...todos,
        {
          id: todos.length + 1,
          name: todoText,
          done: false
        }
      ],
      todoText: "" //borrar el mensaje del input despues de submit
    }));
  };

  onChangeBox = (item) => {
    this.setState(({ todos }) => ({
      todos: todos.map((el) =>
        el.id === item.id ? { ...el, done: !el.done } : el
      )
    }));
  };

  handleClick = () => {
    this.setState((prevState) => {
      return {
        todos: prevState.todos.filter((el) => !el.done)
      };
    });
  };

  render() {
    const { todos, todoText } = this.state;

    return (
      <>
      <div class="container">
        <div class="container-button">
        <Input class="input" value={todoText} onChange={this.onChangeInput} />
        <Button  class="button" onClick={this.onSubmitTodo}>Añadir</Button>
        </div>
        <List
          list={todos}
          onChangeBox={this.onChangeBox}
          handleDel={this.handleDel}
          handleClick={this.handleClick}
        />
        </div>
      </>
    );
  }
}
