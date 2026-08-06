import { useNavigate } from 'react-router-dom'
const Nav2 = () => {
  const navigate = useNavigate()
  return (
    <div className='py-3 bg-cyan-700'>
        <button onClick={()=>{navigate('/')}} className="bg-blue-400 px-5 py-2 rounded m-3">Return to HomePage</button>
        <button onClick={()=>{navigate(-1)}} className="bg-blue-400 px-5 py-2 rounded m-3">Back</button>
    </div>
  )
}

export default Nav2