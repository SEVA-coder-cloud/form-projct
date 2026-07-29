import { Component } from 'react';
import './App.css';
import todos from './todos.json'
import ToDoList from './components/ToDoList';

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

  deleteTodo = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.filter((t) => t.id !== id),
    }));
  };

  addTodo = (text) => {
    const newTodo = {id: nanoid(), text, completed: false};
    this.setState(preve => ({
      todos: [...preve.todos, newTodo]
    }))
  }

  render() {

    const { todos } = this.state
    return (
      <div>
        <h1>TodoList</h1>
        <ToDoList todos={todos} onToggle={this.toggleCompleted} onDelete={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;


