import { useState } from "react";

const App = () => {

  const [num, setNum] = useState({user:'Ayaz',age:20})
  const [first, setfirst] = useState([10,20,30])
  const btnClicked = () => {
    const newNum = {...num};
    const newfirst = [...first]
     
    //type 1
    newNum.user = 'ashfaq'
    setNum(newNum)

    //type 2
    setNum(prev=>({...prev,age:23}))

    newfirst.push(99)
    setfirst(newfirst)

  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <h1>{first}</h1>
      <button onClick={btnClicked}>Click</button>
    </div>
  )
}

export default App