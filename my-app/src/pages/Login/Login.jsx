import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo/logo-dance-studio.png'
import './Login.scss';



const Login = (props) => {
  const navigate = useNavigate()

  if(props.loggedIn) {
    navigate('/')
  }

  useEffect(() => {
    if(props.loggedIn) {
      navigate("/")
    }
  }, [props.loggedIn])
  

  return (
    <div className='login'>
      {/* <video autoplay muted loop id="myVideo">
        <source src="rain.mp4" type="video/mp4">
      </video> */}
      <img src={logo} alt="dance app logo" className="login__logo" />
      <h2></h2>
      {!props.loggedIn ? (
        <form className='login__form' onSubmit={props.handleLogin}>
          <input type="email" name="email" placeholder="email" className='login__input'/>
          <input type="password" name="password" placeholder="password" className='login__input'/>
          <button type="submit" className="login__btn">LOGIN</button>
        </form>
      ) : (
        <div>
        {/* <div className="login-left"></div> */}
          {/* <p> */}
            {/* Welcome back {props.user.name} */}
          {/* </p> */}
        </div>
      )}
    </div>
  )
}

export default Login