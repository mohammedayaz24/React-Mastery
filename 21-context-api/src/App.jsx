import Button from './components/Button'
import Navbar from './components/Navbar'
import { useState } from 'react'
const App = () => {


  const [theme,setTheme] = useState('light')
  return (
    <div>
      <Navbar theme={theme}/>
      <Button />
    </div>
  )
}

export default App