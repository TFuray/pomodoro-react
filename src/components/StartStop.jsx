const StartStop = (start, stop,) => {
  return (
    <div className="flex justify-between">
      <button
        className="text-2xl h-24 w-24 border-green-600 border-4 rounded-xl hover:border-green-800"
      >
        START
      </button>
      <button
        onClick={stop}
        className="text-2xl h-24 w-24 rounded-xl border-red-600 border-4 hover:border-red-900"
      >
        STOP
      </button>
    </div>
  )
}

export default StartStop
