import axios from "axios"
const App = () => {

  const getData = ()=> {
    axios.get("https://picsum.photos/v2/list?page=2&limit=100")
  }

  return (
    <div className="bg-black h-screen text-white p-4">
      <button onClick={getData}
       className="bg-green-1000 active:scale-95 text-white px-5 py-2 rounded mb-3">Get Data</button>
      <h3>hiiiiiiii</h3>
            <h3>hiiiiiiii</h3>


    </div>
  )
}

export default App