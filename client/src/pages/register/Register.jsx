import './register.css'
import { NavLink} from "react-router-dom"

const Register = () => {
  return (
    <div className='register'>
        <span className="registerTitle">Register</span>
        <form className="registerForm">
            <label>Username</label>
            <input className='registerInput' type="text" placeholder='Enter your Username'/>
            <label>Email</label>
            <input className='registerInput' type="email" placeholder='Enter your email'/>
            <label>Password</label>
            <input className='registerInput'  type="password" placeholder='Enter your password'/>
            <button className="registerButton">Register</button>
        </form>
            <button className="registerLoginButton"><NavLink to='/login' className="link">Login</NavLink></button>
    </div>
  )
}

export default Register