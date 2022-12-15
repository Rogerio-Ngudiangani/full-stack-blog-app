import './login.css'
import {NavLink} from "react-router-dom"

const Login = () => {
  return (
    <div className='login'>
        <span className="loginTitle">login</span>
        <form className="loginForm">
            <label>Email</label>
            <input className='loginInput' type="email" placeholder='Enter your email'/>
            <label>Password</label>
            <input className='loginInput'  type="password" placeholder='Enter your password'/>
            <button className="loginButton">Login</button>
        </form>
            <button className="loginRegisterButton">
             <NavLink to='/register' className="link">Register</NavLink></button>
    </div>
  )
}

export default Login