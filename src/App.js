import { Component } from 'react';
import './App.css';
import todos from './todos.json'
import ToDoList from './components/ToDoList';
import { nanoid } from 'nanoid';
import ToDoEditor from './components/ToDoEditor';
import Filter from './components/Filter';
import Counter from './components/Counter';
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

  changeFilter = (e) => {
    this.setState({
        filter: e.target.value
    });
};
getFilteredTodos = () => {
  return this.state.todos.filter(t=> t.text.toLowerCase().includes(this.state.filter.toLowerCase()))
}
  
  render() {
    const { todos } = this.state
    const completedTodos = todos.reduce((count, t) => t.completed ? count + 1 : count, 0);
    return (
      <div>
        <h1>TodoList</h1>
        <ToDoEditor onAdd = {this.addTodo}/>
        <Filter/>
        <Counter completedTodos ={completedTodos}/>
        <ToDoList todos={todos} onToggle={this.toggleCompleted} onDelete={this.deleteTodo}/>
      </div>
    );
  }
}

export default App;


