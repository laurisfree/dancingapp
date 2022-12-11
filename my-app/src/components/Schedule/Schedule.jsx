import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
// import { bookingData } from '../../data/data';
import axios from 'axios';
import moment from 'moment'

import './Schedule.scss';

export default function Schedule() {

  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:8080/booking')
    .then(data => setBookingData(data.data))
    .catch(error => console.log(error));
  }, [])
  

  return (
    <>
      <div>
        {/* <div>When would you be dancing</div> */}
        {bookingData.map((item)=>(
        <div className='schedule'>
          <div className='schedule__day-wrpr'>
          <div>{moment(item.date).format('dddd MMMM Do YYYY')}</div>
        </div>
        <div className='schedule__info-wrpr'>
          <div >{moment(item.time).format('h:mm')}</div>
          <div>{item.classType}</div>
          <div>{item.teacher}</div>
          <Link to="/book/info"><button className='schedule__btn'>+</button></Link>
          <Link to="/book/confirmation" state={{data:item}}><button className='schedule__btn'>BOOK</button></Link>
        </div>
      </div>
          ))}
      </div>
    </>
  );
}

