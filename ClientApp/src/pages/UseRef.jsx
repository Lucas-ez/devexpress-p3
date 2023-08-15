import {useState, useRef, useMemo, useCallback} from 'react'

const Cronometro = () => {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  function handleStart() {
    setStartTime(Date.now());
    setNow(Date.now());

    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  }

  function handleStop() {
    clearInterval(intervalRef.current);
  }

  const secondsPassed = useMemo(() => {
    return (now - startTime) / 1000
  }, [now, startTime])

  return (
    <>
      <h1>{secondsPassed.toFixed(2)}</h1>
      <button onClick={handleStart}>
        Start
      </button>
      <button onClick={handleStop}>
        Stop
      </button>
    </>
  );
}

const VideoPlay = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  const handleButtonClick = useCallback(() => {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);
    
    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }, [isPlaying])

  return (
    <div style={{display: 'flex', flexDirection:'column', alignItems: 'center'}}>
      <div>
        <button onClick={handleButtonClick}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
        <button onClick={() => ref.current.style.display = "none"}>
          Hide
        </button>
        <button onClick={() => ref.current.style.display = "block"}>
          Show
        </button>
      </div>
      <video
        width="250"
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}

const UseRef = () => {
  return (
    <div>
      <Cronometro />
      <hr />
      <VideoPlay />
    </div>
  )
}

export default UseRef