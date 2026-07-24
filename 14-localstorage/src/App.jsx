const App = () => {

  // localStorage.setItem('Name',"ayaz") - fot assigning local storage dat

  let user = localStorage.getItem('Name')
  console.log(user)

  // localStorage.removeItem('Name')

  let user1 = {
    username:"Ayaz",
    age:19,
    city:"Ambur"
  }

  localStorage.setItem('user',JSON.stringify(user1))
  return (
    <div>
      APP

    </div>
  )
}

export default App


//4 types

//localstorage.getItem('key')
//localstorage.setItem('key','value')
//localstorage.removeItem('key')
//localstorage.clear()