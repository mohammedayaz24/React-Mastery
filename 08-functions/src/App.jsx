
const App = () => {

  function btnclick(){
    console.log("Button is clicked");
  }

  function write(){
    // accept event and log current input value
    return (e) => console.log("User is writing", e.target.value)
  }

  return (
    <div>
      <h1>hiiii Ayaz</h1>
      <button onClick={btnclick}>Change User</button>
      <input onChange={write()} />
    </div>
  )
}


export default App