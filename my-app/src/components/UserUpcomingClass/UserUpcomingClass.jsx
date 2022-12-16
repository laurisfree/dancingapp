import './UserUpcomingClass.scss';
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'

export default function UserUpcomingClass(props) {
  const [bookingData, setBookingData] = useState([]);

  useEffect(() => {
    getUserClasses();
  }, [])

  const getUserClasses = () => {
    const jwtToken = localStorage.getItem('jwt_token');
    axios.get('http://localhost:8080/booking/userbookings',{
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then(response => {

      response.data.sort((a, b)=> new Date(b.date) - new Date(a.date) )

      setBookingData(response.data)
    })
    .catch(error => console.log(error));
  }

  const onCancelClass = (id) => {
    console.log(id);
    const jwtToken = localStorage.getItem('jwt_token');
    axios.delete(`http://localhost:8080/booking/userbookings?id=${id}`,{
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then(response => {
      getUserClasses()
    })
    .catch(error => console.log(error));
  }

  
  return (
    <>
      <div className='upcoming-header__mainwrpr'>
        <div className='upcoming-header'>
          <p className='upcoming-header__text'>YOUR UPCOMING CLASSES</p>
        </div>
        
                  {bookingData.map((item)=>(
                            <div className='upcoming'>
                            <div className='upcoming__date-wrpr'>
                              <div className='upcoming__date'>{moment(item.date).format('dddd MMMM Do YYYY')}</div>
                              {/* <div className='upcoming__hour-wrpr'> */}
                              <div className='upcoming__time'> 
                                {/* <p>@</p> */}
                               {moment(item.time).format('h:mm')}</div>
                              {/* </div> */}
                            </div>
                            <div className='upcoming__info-wrpr'>
                              <div className='upcoming__info'>{item.classType}</div>
                              <div className='upcoming__info'>{item.teacher}</div>
                              <button className='upcoming__cancel-btn' onClick={() => onCancelClass(item._id)}>CANCEL</button>
                            </div>
                          </div>
                              ))}
      </div>
    </>


  );
}