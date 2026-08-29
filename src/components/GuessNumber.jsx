import React, { Component } from 'react';

class GuessNumber extends Component {
  constructor(props) {
    super(props);
    this.state = {
      target: null,          
      guess: '',             
      message: 'Введи число від 1 до 10',
      attempts: 0,
      gameOver: false,
      history: []            
    };
  }


  componentDidMount() {
    this.generateNumber();
    console.log('componentDidMount: гра запущена, число загадано');
  }


  componentDidUpdate(prevProps, prevState) {

    if (this.state.gameOver && !prevState.gameOver) {
      console.log(`componentDidUpdate: гра закінчена за ${this.state.attempts} спроб`);
    }


    if (this.state.attempts !== prevState.attempts && !this.state.gameOver) {
      console.log(`componentDidUpdate: спроба №${this.state.attempts}`);
    }
  }


  componentWillUnmount() {
    console.log('componentWillUnmount: компонент видаляється');

  }

 
  shouldComponentUpdate(nextProps, nextState) {

    if (
      nextState.guess === this.state.guess &&
      nextState.message === this.state.message &&
      nextState.gameOver === this.state.gameOver
    ) {
      return false;
    }
    return true;
  }



  generateNumber = () => {
    const number = Math.floor(Math.random() * 10) + 1;
    this.setState({
      target: number,
      guess: '',
      message: 'Введи число від 1 до 10',
      attempts: 0,
      gameOver: false,
      history: []
    });
  };

  handleChange = (e) => {
    this.setState({ guess: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    const { guess, target, attempts, gameOver } = this.state;

    if (gameOver) return;

    const num = parseInt(guess, 10);

    if (isNaN(num) || num < 1 || num > 10) {
      this.setState({ message: 'Введи коректне число від 1 до 10!' });
      return;
    }

    const newAttempts = attempts + 1;
    let message = '';
    let gameOverNow = false;

    if (num === target) {
      message = `🎉 Вітаю! Ти вгадав число ${target} за ${newAttempts} спроб!`;
      gameOverNow = true;
    } else if (num < target) {
      message = 'БЬЛЬШЕ! ⬆️';
    } else {
      message = 'МЕНЬШЕ!⬇️';
    }

    this.setState({
      attempts: newAttempts,
      message,
      gameOver: gameOverNow,
      history: [...this.state.history, num],
      guess: ''
    });
  };

  handleRestart = () => {
    this.generateNumber();
  };

  render() {
    const { guess, message, attempts, gameOver, history } = this.state;

    return (
      <div className="game-container">
        <h1>Вгадай число (1–10)</h1>
        <p className="message">{message}</p>

        {!gameOver ? (
          <form onSubmit={this.handleSubmit}>
            <input
              type="number"
              min="1"
              max="10"
              value={guess}
              onChange={this.handleChange}
              placeholder="Твоє число..."
              autoFocus
            />
            <button type="submit">Перевірити</button>
          </form>
        ) : (
          <button onClick={this.handleRestart} className="restart-btn">
            Грати ще раз
          </button>
        )}

        <div className="info">
          <p>Спроб: <strong>{attempts}</strong></p>
          {history.length > 0 && (
            <p>Твої спроби: {history.join(', ')}</p>
          )}
        </div>
      </div>
    );
  }
}


function App() {
  return (
    <div className="App">
      <GuessNumber />
    </div>
  );
}

export default GuessNumber