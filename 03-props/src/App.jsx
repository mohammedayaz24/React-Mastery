import Card from './components/Card'
const App = () => {
  return (
    <>
    <div className='parent'>
      <Card/>
      <Card user='Iron man' role="Ai engineer"/>
      <Card/>
    </div>
    </>
    
  )
}

export default App