import { useState } from "react"

const App = () => {
  //useState
  const [num, setNum] = useState(0)

  function increase(){
    setNum(num+1)

  }
  function decrease(){
    setNum(num-1)
  }

  function jump(){
    setNum(num+5)
  }

  function reset(){
    setNum(0)
  }
   
  return (
    <div>
      <div className="container">
        <h1>{num}</h1>
        <div>
          <button onClick={increase}>Increase</button>
          <button onClick={decrease}>Decrease</button>
          <button onClick={jump}>Jump</button>
          <button onClick={reset}>Reset</button>
        </div>
      </div>
    </div>
  )
}

export default App