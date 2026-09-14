import { useEffect, useState } from "react"
import "./styles.css"
export default function CatchABallon(){



const getRandomPosition = () => {
   
  return {
    top: Math.floor(Math.random() * 60 + 5),
    left: Math.floor(Math.random() * 80 + 10),
  };
}

const startTimer = (setTime) => {
  let timerId = setInterval(() => {
    setTime((prev) => {
      if (prev <= 0) {
        clearInterval(timerId);
        timerId = -1;
        return 0;
      }
      return prev - 1;
    });
  }, 1000);
};

const click = () => {
  setScore((prev) => prev + 1)
  setPosition(getRandomPosition())
}

const startGame = () => {
  setScore(0)
  setIsPlaying(true)
}


const [gameOver, setGameOver] = useState(false);
const [isPlaying, setIsPlaying] = useState(false);
const [position, setPosition] = useState(getRandomPosition());
const [score, setScore] = useState(0);
const [time, setTime] = useState(10);

useEffect(() => {
    console.log(isPlaying);
    if (!isPlaying) {
        return;
    }
    startTimer(setTime);
}, [isPlaying]);

useEffect(() => {
    if (time === 0) {
        setGameOver(true);
        setIsPlaying(false);
    }
}, [time]);

useEffect(() => {
    if (score > localStorage.getItem("BScore")) {
        localStorage.setItem("BScore", score);
    }
}, [score])

return(
  <div className="balloon-game">
    <h2 className="game-info">Best Score: {localStorage.getItem("BScore")}</h2>

    <h3 className="game-info">Score: {score}</h3>
    <h3 className="game-info">Time: {time}</h3>
    {!isPlaying ?
      (<button onClick={startGame}>Start</button> ):
      (<div className="game-field">
        <button onClick={click} style={{top: position.top + "%", left: position.left + "%"}} className="balloon">🎈</button>
      </div>)}
  </div>
)

}

