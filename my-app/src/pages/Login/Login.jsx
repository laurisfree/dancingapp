import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import logo from '../../assets/logo/logo-dance-studio.png'
import './Login.scss';
import video from '../../assets/video/Dancing.mp4'



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
    <>
    <div className='login'>
    {/* <video width="100%" height="100%"  preload='auto'>
      <source src={video} type="video/mp4" />
    </video> */}
      <div>
      {/* <video preload='auto' className="login__video">
        <source src={video} type="video/mp4" />
      </video> */}
      </div>
      <img src={logo} alt="dance app logo" className="login__logo" />
      {/* <h2></h2> */}
      {!props.loggedIn ? (
        <form className='login__form' onSubmit={props.handleLogin}>
          <input type="email" name="email" placeholder="email" className='login__input'/>
          <input type="password" name="password" placeholder="password" className='login__input'/>
          <button type="submit" className="login__btn">LOGIN</button>
        </form>  
      ) : (
      //   <video width="100%" height="100%"  preload='auto'>
      //   <source src={video} type="video/mp4" />
      // </video>
        <div className='login__wrapper-right'>
        </div>
      )}
    </div>
    {/* <video preload='auto' className="login__video">
      <source src={video} type="video/mp4" />
    </video> */}
    </>
  )
}

export default Login