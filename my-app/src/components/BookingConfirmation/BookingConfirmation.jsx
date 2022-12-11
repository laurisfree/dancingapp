import './BookingConfirmation.scss';
import {useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom'
import moment from 'moment';
import axios from 'axios'

export default function BookingConfirmation() {
  const location = useLocation()
  const navigate = useNavigate()
  const {data} = location.state
  console.log(location.state)

  const onConfirmHanlder = () => {
    const jwtToken = localStorage.getItem('jwt_token');
    axios
    .post('http://localhost:8080/booking', { bookingId: data._id },{
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then(data => navigate("/"))
    .catch(error => console.log(error));
  }

  return (

    <>
      <div>
        <p>You are Booking</p>
      </div>
      <div>
        <p>{data.classType}</p>
        <p>{data.teacher}</p>
        <p>{moment(data.date).format('dddd MMMM Do YYYY')}</p>
        <p>{moment(data.time).format('h:mm')}</p>
      </div>
      <div>
      {/* <Link to='/book/info'> <Link/> */}
      <button onClick={onConfirmHanlder}>CONFIRM</button>
      {/* <button>CONFIRM</button> */}
        {/* <p>Add to my Caledar</p> */}
        <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Birthday&dates=1670462264673&details=With%20clowns%20and%20stuff&location=North%20Pole" 
        target="_blank">add to calendar</a>
        {/* console.log(Date.now()); */}
        {/* console.log(moment(data.time).format('h:mm')) */}
      </div>
    </>
  );
}

