import { Component } from "react";

class App extends Component {
  state = {
    todos: todos,
    filter: '',
  }

  toggleCompleted = (id) => {
    this.setState((preve) => ({
      todos: preve.todos.map(i => i.id === id ? {...i, completed: !i.completed} : i)
    }))
    console.log(this.state.todos)
  }

  deletTodo = (id) => {
    this.setState((preve) => ({
      todos: preve.todos.filter(i => i.id !== id)
    }))
    console.log(this.state.todos)
  }

  addTodo = (text) => {
    const newTodo = {id: nanoid(), text, completed: false}
    this.setState(preve => ({
      todos: [...preve.todos, newTodo]
    }))
  }
}
