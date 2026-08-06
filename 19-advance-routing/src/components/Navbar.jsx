import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='flex py-4 px-4 bg-cyan-900 justify-between'>
        <h2 className='text-xl font-bold'>Navbar</h2>
        <div className='flex gap-8'>
            <Link to='/' className='text-lg font-bold hover:text-cyan-300'>Home</Link>
            <Link to='/about' className='text-lg font-bold hover:text-cyan-300'>About</Link>
            <Link to='/contact' className='text-lg font-bold hover:text-cyan-300'>Contact</Link>
            <Link to='/product' className='text-lg font-bold hover:text-cyan-300'>Product</Link>
            <Link to='/courses' className='text-lg font-bold hover:text-cyan-300'>Courses</Link>
        </div>
    </div>
  )
}

export default Navbar