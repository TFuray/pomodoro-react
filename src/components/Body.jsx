import { useState, useEffect } from "react"
import Display from "./Display"
import Controls from "./Controls"
import StartStop from "./StartStop"

const Body = () => {
  const [minutes, setMinutes] = useState(0)
  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)
  const [length, setLength] = useState(25)
  const [deadline, setDeadline] = useState(0)

  const addTime = () => {
    setLength((a) => a + 1)
  }
  const subTime = () => {
    if (length === 0) {
      return length
    }
    setLength((a) => a - 1)
  }

  const getTime = () => {
    let now = Date.now()
    setDeadline(() => now + length * 60000)
    let time = deadline - now
    setMinutes(Math.floor((time / 1000 / 60) % 60))
    setSeconds(Math.floor((time / 1000) % 60))
  }
  // const handleClock = () => {
  // useEffect(() => {
  //   if (!isRunning) {
  //     return
  //   }
  // }, [isRunning])

  useEffect(() => {
    let interval
    if (isRunning) {
      interval = setInterval(() => getTime(deadline), 1000)
    } else if (!isRunning) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [isRunning])

  return (
    <div
      style={{ height: "700px" }}
      className="grid justify-center w-2/5 border-solid border-8 border-sky-900 drop-shadow-2xl rounded-3xl"
    >
      <div className="grid justify-center">
        <div className=" flex justify-center items-center border-solid border-4 h-1/2 w-72 mt-10 rounded-3xl text-white">
          {/* {isRunning ? ( */}
          <p className="mx-5 text-8xl">
            <span>{("0" + minutes).slice(-2)}:</span>
            <span>{("0" + seconds).slice(-2)}</span>
          </p>
          {/* ) : ( */}
          {/* <p className="mx-5 text-8xl">
              {length < 10 ? `0${length}:00` : `${length}:00`}
            </p>
          )} */}
        </div>
      </div>
      <div className="grid"></div>
      <div>
        <div className="flex justify-between">
          <button
            onClick={() => setIsRunning(true)}
            className="text-2xl h-24 w-24 border-green-600 border-4 rounded-xl hover:border-green-800"
          >
            START
          </button>
          <button
            onClick={() => setIsRunning(false)}
            className="text-2xl h-24 w-24 rounded-xl border-red-600 border-4 hover:border-red-900"
          >
            STOP
          </button>
        </div>
      </div>
      <div className="flex justify-around items-center gap-2">
        <Controls
          length={length}
          addTime={addTime}
          subTime={subTime}
        />
      </div>
    </div>
  )
}

export default Body
