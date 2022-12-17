// import logo from './logo.svg';
import {useState, useEffect} from 'react';
import axios from 'axios'
import './App.css';
import { Navigate } from 'react-router-dom'
import Home from './pages/Home/Home'
import Book from './pages/Book/Book'
import Buy from './pages/Buy/Buy'
import Dancer from './pages/Dancer/Dancer'
import BookInfo from './pages/BookInfo/BookInfo'
import Login from './pages/Login/Login'
import BookingConfirmation from './components/BookingConfirmation/BookingConfirmation';
// import Header from './components/Header/Header';
// import Schedule from './components/Schedule/Schedule';
// import TeacherInfo from './components/TeacherInfo/TeacherInfo'
// import UserUpcomingClass from './components/UserUpcomingClass/UserUpcomingClass';
// import BuyPasses from './components/BuyPasses/BuyPasses';

import { BrowserRouter, Routes, Route } from 'react-router-dom'

export default function App() {

  const [activePasses, setActivePasses] = useState(2);
  const [loggedIn, setLoggedIn] = useState(false);
  const [user, setUser] = useState(null);

  /*
   * Component Mount, check if localStorage has JWT token
   * if token exists verify JWT and login user
   */
  useEffect(() => {
    const jwtToken = localStorage.getItem('jwt_token');
    // if JWT token exists try to load the user profile, user object
    if (jwtToken) {
      loadProfile(jwtToken);
      setLoggedIn(true)
    }
  }, []);

  /*
   * Get user data
   * send JWT token as part of request headers
   * token is decoded on the server and if valid sends back a user object
   */
  const loadProfile = (jwtToken) => {

    axios
      .get('http://localhost:8080/user/login', {
        headers: {
          Authorization: `Bearer ${jwtToken}`,
        },
      })
      .then((response) => {
        setLoggedIn(true);
        setUser(response.data.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*
   * Login function
   * post email and password to server
   * returns JWT if login success
   */
  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(`http://localhost:8080/user/login`, {
        email: event.target.email.value,
        password: event.target.password.value,
      })
      .then((response) => {
        if (response.data.token) {
          loadProfile(response.data.token); // loadProfile, get user object
          localStorage.setItem('jwt_token', response.data.token);
          setLoggedIn(true)
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  /*
   * Logout user
   */
  const handleLogout = () => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem('jwt_token');
  };
 

  return (
    <div className="App">

      <BrowserRouter>
      {/* {
        loggedIn ? */}
        <Routes>
          <Route path='/' element={loggedIn ? <Home activePasses={activePasses} setActivePasses={setActivePasses} handleLogout={handleLogout} user={user}/> : <Navigate to="/login"/> }/>
          <Route path='/book' element={loggedIn ? <Book />: <Navigate to="/login"/> } />
          <Route path='/book/info' element={loggedIn ? <BookInfo />: <Navigate to="/login"/>} />
          <Route path='/book/confirmation' element={loggedIn ? <BookingConfirmation />: <Navigate to="/login"/>} />
          <Route path='/buy' element={loggedIn ? <Buy setActivePasses={setActivePasses} loadProfile={loadProfile} />: <Navigate to="/login"/>} />
          <Route path='/dancer' element={loggedIn ? <Dancer />: <Navigate to="/login"/>}/> 
        {/* </Routes> : 
        <Routes> */}
          <Route
            path="/login"
            element={
              !loggedIn ?
              <Login
                loggedIn={loggedIn}
                user={user}
                handleLogin={handleLogin}
              /> :
              <Navigate to="/"/>
            }
          />
        </Routes>
        {/* }  */}
      </BrowserRouter>

      {/* <Header />
      <Schedule />
      <TeacherInfo />
      <UserUpcomingClass />
      <BuyPasses /> */}
    </div>
  );
}