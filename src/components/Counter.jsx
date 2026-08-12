
import { Component } from "react";

class Counter extends Component {
    

  render() {
    const { completedTodos } = this.props;

    return (
        <p>виконано:{completedTodos}</p>
    );
  }
}

export default Counter;