import './UserUpcomingClass.scss';
import { useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios';
import moment from 'moment'

export default function UserUpcomingClass(props) {
  const [bookingData, setBookingData] = useState([]);

  // const location = useLocation()
  // const { data } = location.state

  // console.log(location.state)

  useEffect(() => {
    axios.get('http://localhost:8080/booking')
    .then(data => {
      console.log(data.data)
      const filteredData = data.data.filter( element => element.userId && element.userId === "test User" );
      setBookingData(filteredData)
    })
    .catch(error => console.log(error));
  }, [])

  return (
    <>
      <div className='upcoming-header__mainwrpr'>
        <div className='upcoming-header'>
          <p className='upcoming-header__text'>YOUR UPCOMING CLASSES</p>
        </div>
        
                  {bookingData.map((item)=>(
                    // <div className='schedule'>
                    //           <div className='schedule__day-wrpr'>
                    //           <div>{moment(item.date).format('dddd MMMM Do YYYY')}</div>
                    //         </div>
                    //         <div className='schedule__info-wrpr'>
                    //           <div >{moment(item.time).format('h:mm')}</div>
                    //           <div>{item.classType}</div>
                    //           <div>{item.teacher}</div>
                    //           <Link to="/book/info"><button className='schedule__btn'>+</button></Link>
                    //           <Link to="/book/confirmation" state={{data:item}}><button className='schedule__btn'>BOOK</button></Link>
                    //         </div>
                    // </div>
                            <div className='upcoming'>
                            <div className='upcoming__date-wrpr'>
                              <div className='upcoming__date'>{moment(item.date).format('dddd MMMM Do YYYY')}</div>
                              <div className='upcoming__date'>{moment(item.time).format('h:mm')}</div>
                            </div>
                            <div className='upcoming__info-wrpr'>
                              <div className='upcoming__info'>{item.classType}</div>
                              <div className='upcoming__info'>{item.teacher}</div>
                            </div>
                          </div>
                              ))}

        {/* <div className='upcoming'>
          <div className='upcoming__date-wrpr'>
            <div className='upcoming__date'>THURSDAY 01 DEC</div>
            <div className='upcoming__date'>10:00 PST</div>
          </div>
          <div className='upcoming__info-wrpr'>
            <div className='upcoming__info'>ADV. BALLET</div>
            <div className='upcoming__info'>MARY SHELLBY</div>
          </div>
        </div> */}
        <div className='upcoming__btn-wrpr'>
          <button className='upcoming__btn-cancel'>CANCEL</button>
        </div>
      </div>
    </>


  );
}