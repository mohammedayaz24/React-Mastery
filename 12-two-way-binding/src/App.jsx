import { useState } from "react";

const App = () => {

  const [title,setTitle] = useState('')

  const submitted = (e) => {
    e.preventDefault();
    console.log("Form Submitted by:",title);

    setTitle('')//to reset the title
  }
    
  return (
    <div>
      <form onSubmit={(e) => submitted(e)}>
        <input type="text"
               placeholder="Enter Username"
               value={title}
               onChange={(e) => {
                 setTitle(e.target.value);
               }} />
        <button>Submit</button>
      </form>
    </div>
  )
}

export default App;

//instead of doing with JS we tell react to do the change using two way binding