import { Component } from "react";

class ToDoEditor extends Component {
  
   state = {
    textValue: "",
  };

  handleChange = (e) => {
    this.setState({
      textValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const { textValue } = this.state;

    if (textValue.trim() === "") {
      return;
    }

    this.props.onAdd(textValue);

    this.setState({
      textValue: "",
    });
  };
  render(){
    const {textValue} = this.state
    return(
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="textValue" value={textValue} onChange={this.handleChange}/> 
        <button type="submit">+</button>
      </form>
    )
  }
}

export default ToDoEditor