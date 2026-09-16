import { useRef } from "react";

export default function Video({source}) {
    const videoRef = useRef();

    const play = () => {
        videoRef.current.play();
    }

    const pause = () => {
        videoRef.current.pause();
    }
    return(
    <div>
        <button onClick={play}>Start</button>
        <button onClick={pause}>Pause</button>
        <video width="500px" height="500px"ref={videoRef} src={source}></video>
    </div>);
}

