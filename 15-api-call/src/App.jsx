import axios from 'axios'
import { useState } from 'react'


const App = () => {

  const [data, setData] = useState([])
  //using fetch api//

  // async function getData() {
  
  //   const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
  //   console.log(response)
  // }

  // const getData = async ()=> {
  //     const response = await fetch('https://jsonplaceholder.typicode.com/users')

  //     const data = await response.json()
  //     console.log(data)
  // }
//data from placeholder through axios
    // const getData = async () => {
    //   const response = await axios.get('https://jsonplaceholder.typicode.com/users')

    //   console.log(response.data)
    // }
    const getData = async () => {
      const response = await axios.get('https://picsum.photos/v2/list')

      setData(response.data)


    }

  return (
    <div>
      <button onClick={getData}>Get data</button>
      <div>
        {data.map(function(elem,idx){
          return <h3>hello, {elem.author}</h3>
        })}
      </div>
    </div>
  )
}

export default App