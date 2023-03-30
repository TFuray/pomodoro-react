import React, { useState, useEffect } from "react"

function Timer({ minutes }) {
  const [seconds, setSeconds] = useState(minutes * 60)

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds - 1)
    }, 1000)

    return () => {
      clearInterval(intervalId)
    }
  }, [])

  const minutesDisplay = Math.floor(seconds / 60)
    .toString()
    .padStart(2, "0")
  const secondsDisplay = (seconds % 60).toString().padStart(2, "0")

  return (
    <div>
      <h1>
        Timer: {minutesDisplay}:{secondsDisplay}
      </h1>
    </div>
  )
}

export default Timer
