import Card from './components/Card'
const App = () => {
  return (
    <>
    <div className='parent'>
      <Card user="Mohammed Ayaz" 
            role="Software Developer"
            url="https://images.unsplash.com/photo-1783201033538-85c76cf0ba05?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDEyfHRvd0paRnNrcEdnfHxlbnwwfHx8fHw%3D"/>
      <Card user="Zakwan" role="AI engineer" url="https://images.unsplash.com/photo-1779896412420-d37179cdffb9?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw4fHx8ZW58MHx8fHx8"/>
      <Card user="Faazil ammar" role="data analyst" url="https://plus.unsplash.com/premium_photo-1783339296675-777f8ed794fc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDJ8dG93SlpGc2twR2d8fGVufDB8fHx8fA%3D%3D"/>
    </div>
    </>
    
  )
}

export default App