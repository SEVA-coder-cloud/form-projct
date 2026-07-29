import React, { Component } from "react";

class ToDoList extends Component {
  render() {
    const { todos, onToggle, onDelete } = this.props;
    return (
      <ul>
        {todos.map(todo => (
          <li key={todo.id}>
            <p>{todo.text}</p>
            <input 
              type="checkbox" 
              checked={todo.completed} 
              onChange={() => onToggle(todo.id)} 
            />
            <button onClick={()=>onDelete(todo.id)} type="button">Delete</button>
          </li>
        ))}
      </ul>
    );
  }
}

export default ToDoList;
