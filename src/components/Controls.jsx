const Controls = ({ length, subTime, addTime }) => {
  return (
    <div className="flex text-5xl justify-between">
      <button
        onClick={addTime}
        className="flex h-24 w-24 font-bold justify-center items-center border-4 rounded-xl hover:border-slate-400"
      >
        +
      </button>
     
      <button
        onClick={subTime}
        className="flex h-24 w-24 justify-center font-bold items-center border-4 rounded-xl hover:border-slate-400 "
      >
        -
      </button>
    </div>
  )
}

export default Controls
