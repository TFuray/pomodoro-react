import { useState } from "react"

const Display = ({ minutes, seconds, isRunning, length }) => {
  return (
    <div className=" flex justify-center items-center border-solid border-4 w-24 h-1/2 mt-10 rounded-3xl text-white">
      {isRunning ? (
        <p className="mx-5 text-8xl">
          {minutes}: {seconds}
          {/* {minutes < 10 ? `0${minutes}` : { minutes }}:
          {seconds < 10 ? `0${seconds}` : { seconds }} */}
        </p>
      ) : (
          <p className="mx-5 text-8xl">
            {length < 10 ? `0${length}:00` : `${length}:00`}
          </p>
      )}
    </div>
  )
}

export default Display
