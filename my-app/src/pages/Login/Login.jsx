import React, {useEffect} from 'react'
import { useNavigate } from 'react-router-dom'


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
    <div>
      <h2>Home Page</h2>
      {!props.loggedIn ? (
        <form onSubmit={props.handleLogin}>
          <input type="email" name="email" placeholder="email" />
          <input type="password" name="password" placeholder="password" />
          <button type="submit">Login</button>
        </form>
      ) : (
        <div>
          <p>
            Welcome back {props.user.name}
          </p>
        </div>
      )}
    </div>
  )
}

export default Login