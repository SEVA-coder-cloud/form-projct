import { Component } from "react";

class Filter extends Component {


  render() {
    const { value,onChange } = this.props;

    return (
        
        <input
          placeholder="Enter text to filter"
          type="text"
          value={value}
          onChange={onChange}
        />

    );
  }
}

export default Filter;
