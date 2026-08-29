import { Component } from "react";

export class ToDoList extends Component {
  state = {
    tasks: [],
    inputValue: "",
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.tasks !== this.state.tasks) {
        localStorage.setItem('task_storage', JSON.stringify(this.state.tasks));
    }
}

componentDidMount() {
  const tasksSaved = localStorage.getItem('task_storage')
  if(tasksSaved){
    this.setState({ tasks: JSON.parse(tasksSaved) })
  }
  
}



  handleChange = (event) => {
    this.setState({
      inputValue: event.target.value,
    });
  };

  addTask = () => {
    const { inputValue } = this.state;

    if (!inputValue.trim()) {
      return;
    }

    this.setState((prevState) => ({
      tasks: [...prevState.tasks, inputValue],
      inputValue: "",
    }));
  };

  deleteTask = (indexToDelete) => {
    this.setState((prevState) => ({
      tasks: prevState.tasks.filter(
        (_, index) => index !== indexToDelete
      ),
    }));
  };

  render() {
    const { tasks, inputValue } = this.state;

    return (
      <div>
        <h2>Список завдань</h2>

        <input
          type="text"
          value={inputValue}
          onChange={this.handleChange}
          placeholder="Введіть завдання"
        />

        <button onClick={this.addTask}>
          Додати
        </button>

        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              {task}

              <button
                onClick={() => this.deleteTask(index)}
              >
                Видалити
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
