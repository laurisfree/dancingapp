// import logo from './logo.svg';
import {useState} from 'react';
import './App.css';
import Home from './pages/Home/Home'
import Book from './pages/Book/Book'
import Buy from './pages/Buy/Buy'
import Dancer from './pages/Dancer/Dancer'
import BookInfo from './pages/BookInfo/BookInfo'
import BookingConfirmation from './components/BookingConfirmation/BookingConfirmation';
// import Header from './components/Header/Header';
// import Schedule from './components/Schedule/Schedule';
// import TeacherInfo from './components/TeacherInfo/TeacherInfo'
// import UserUpcomingClass from './components/UserUpcomingClass/UserUpcomingClass';
// import BuyPasses from './components/BuyPasses/BuyPasses';

import { BrowserRouter, Routes, Route } from 'react-router-dom'



export default function App() {

  const [activePasses, setActivePasses] = useState(2);

 

  return (
    <div className="App">

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home activePasses={activePasses} setActivePasses={setActivePasses} />} />
          <Route path='/book' element={<Book />} />
          <Route path='/book/info' element={<BookInfo />} />
          <Route path='/book/confirmation' element={<BookingConfirmation />} />
          <Route path='/buy' element={<Buy setActivePasses={setActivePasses} />} />
          <Route path='/dancer' element={<Dancer />}/>
        </Routes>
      </BrowserRouter>

      {/* <Header />
      <Schedule />
      <TeacherInfo />
      <UserUpcomingClass />
      <BuyPasses /> */}
    </div>
  );
}


