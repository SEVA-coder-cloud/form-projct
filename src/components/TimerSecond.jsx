import { Component } from "react";

class TimerSecond extends Component{
  state = {
    second: 0,
  }
  
  componentDidMount(){
    this.timerId = setInterval(() => {
      this.setState(prevState => ({
        second: prevState.second + 1
      }))
    }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render(){
    return(
      <>
        <p>минуло {this.state.second} секунд</p>
      </>
    )
  }
}
export default TimerSecond