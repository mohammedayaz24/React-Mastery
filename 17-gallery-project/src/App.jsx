import axios from "axios"
import { useState } from 'react'
import { useEffect } from "react"
import Cards from "./components/Cards"

const App = () => {

  const [userData, setUserData] = useState([])
  const [index, setIndex] = useState(1)


  const getData = async ()=> {
    const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=30`)
    setUserData(response.data)
  }

  useEffect(function(){
    getData()
  },[index])


  let printUserData = <h3 className="text-2xl font-black">Loading....</h3>

  if(userData.length > 0){
    printUserData = userData.map(function(elem,idx){


      return <div key={idx}>
        <Cards elem={elem} />
      </div>
  })
}

  return (
    <div className="bg-black overflow-auto h-screen text-white p-4">
      <div className="flex flex-wrap gap-4">
        {printUserData}
      </div>

      <div className="flex justify-center items-center p-4">
        <button onClick={() => {
          if(index > 1) {
            setIndex(index - 1)
          }
        }} className="bg-white text-black px-4 py-2 rounded-lg">Prev</button>
        <h4 className="text-lg font-black mx-2">Page {index}</h4>
        <button onClick={() => setIndex(index + 1)} className="bg-white text-black px-4 py-2 rounded-lg ml-2">Next</button>
      </div>
    </div>
    
  )
}

export default App