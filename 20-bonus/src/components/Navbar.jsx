
const Navbar = (props) => {
  return (
    <div>
        <p>Theme: {props.theme}</p>
        <button onClick={()=>{props.setTheme(props.theme === 'light' ? 'dark' : 'light')}}>Change theme</button>
    </div>
  )
}

export default Navbar