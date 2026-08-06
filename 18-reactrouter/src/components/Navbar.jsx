import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <div className="navbar">
        <h3>NAVBAR</h3>
        <div>
            <Link to='/'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/product'>Product</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar