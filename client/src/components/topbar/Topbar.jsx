import './topbar.css'
import { NavLink} from "react-router-dom"

const Topbar = () => {
  const user = false
  return (
    <div className='top'>
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
            <li className="topListItem"> <NavLink to='/' className='link' >HOME</NavLink></li>
            <li className="topListItem"> <NavLink to='/about' className='link' >ABOUT</NavLink></li>
            <li className="topListItem"> <NavLink to='/contact' className='link' >CONTACT</NavLink></li>
            <li className="topListItem"> <NavLink to='/write' className='link' >WRITE</NavLink></li>
            <li className="topListItem"> <NavLink to='/login' className='link' >{user ? 'LOGOUT' : ''}</NavLink></li>
        </ul>
      </div>
      <div className="topRight">
        {user ?  (<img className='topImg' src='https://dl.airtable.com/.attachments/a0cd0702c443f31526267f38ea5314a1/2447eb7a/paris.jpg' alt='rofile-image'></img>
        ) : (
          <ul className='topList'>
            <li className='topListItem'> <NavLink to='/login' className='link' >LOGIN</NavLink></li>     
            <li className='topListItem'> <NavLink to='/register' className='link' >REGISTER</NavLink></li>
          </ul>
        ) }
       <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  )
}

export default Topbar
