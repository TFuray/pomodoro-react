import { useState } from "react"
import Display from "./Display"
import Controls from "./Controls"
import StartStop from "./StartStop"

const Body = () => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [length, setLength] = useState(25)

  const addTime = () => {
    setLength((a) => a + 1)
  }
  const subTime = () => {
    if (length === 0) {
      return length
    }
    setLength((a) => a - 1)
  }
  const start = () => {
    setIsRunning(true)
  }
  const stop = () => {
    setIsRunning(false)
  }

  const countdown = () => {
    let now = new Date().getTime()
    let finished = now + (length * 60000)
    console.log(finished)
  }

  return (
    <div
      style={{ height: "700px" }}
      className="grid justify-center w-2/5 border-solid border-8 border-sky-900 drop-shadow-2xl rounded-3xl"
    >
      <div>
        {countdown()}
      </div>
      <div className="grid justify-center">
        <Display
          minutes={minutes}
          seconds={seconds}
          isRunning={isRunning}
          length={length}
        />
      </div>
      <div className="grid">
        <Controls length={length}
        addTime={addTime} 
        subTime={subTime}
        />
      </div>
      <div>
        <StartStop
        start={start} 
        stop={stop}
        />
      </div>

    </div>
  )
}

export default Body
