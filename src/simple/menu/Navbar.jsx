import './Navbar.css'

function Navbar(props) {
  return (
    <nav>
      <ul>
        <li><div className='navbarIcon'><i className="fas fa-home"></i></div></li>
        <li><div className='navbarIcon' onClick={props.onDrawerClick}><i className="fas fa-bars"></i></div></li>
      </ul>
    </nav>
  )
}

export default Navbar;