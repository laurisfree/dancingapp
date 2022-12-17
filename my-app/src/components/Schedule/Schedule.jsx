import { useEffect, useState } from 'react'
import {Link} from 'react-router-dom'
import { groupBy } from "lodash"
// import { bookingData } from '../../data/data';
import axios from 'axios';
import moment from 'moment'


import './Schedule.scss';

export default function Schedule() {

  const [bookingData, setBookingData] = useState({});

  useEffect(() => {
    axios.get('http://localhost:8080/booking')
    .then(data => {
      // setBookingData(data.data)
      // const mappedData = data.data.map(item => ({[item.time.split("T")[0]]: item}))
      
      // console.log(mappedData)
      const mappedData = data.data.map(item => ({...item, date: item.date.split("T")[0]}))
      console.log(mappedData)
      console.log(groupBy(mappedData,'date'))
      setBookingData(groupBy(mappedData,'date'));
    }).catch(error => console.log(error))

  }, [])
  
  {

  return (
    <>
      <div>
        {/* <div>When would you be dancing</div> */}
        {Object.keys(bookingData).map((item, index )=>(
        <div className='schedule' key={index}>
          <div className='schedule__day-wrpr'>
          <div>{moment(item).format('dddd MMMM Do YYYY')}</div>
        </div>
          {
            bookingData[item].map((element, index) => <TimeSchedule key={index} item={element}/>)
          }
      </div>
          ))}
      </div>
    </>
  );
}
}
const TimeSchedule = ({item}) => (
  <div className='schedule__info-wrpr'>
  <div >{moment(item.time).format('h:mm')}</div>
  <div>{item.classType}</div>
  <div>{item.teacher}</div>
  <div className='schedule-btns-wrpr'>
  <Link to="/book/info"><button className='schedule__btn-2'>+</button></Link>
  <Link to="/book/confirmation" state={{data:item}}><button className='schedule__btn'>BOOK</button></Link>
  </div>
  </div>
)

//     "2022-12-31": [
//         {
//             "_id": "63979128e24d85c828096b4b",
//             "date": "2022-12-31",
//             "time": "2022-12-31T14:31:39.000Z",
//             "classType": "Tap Begginer",
//             "teacher": "Raul Hernandez",
//             "__v": 0,
//             "createdAt": "2022-12-12T20:34:44.000Z",
//             "updatedAt": "2022-12-12T20:34:44.000Z"
//         }
//     ],
//     "2022-12-28": [
//         {
//             "_id": "6394dfb9e13f114183c4ad08",
//             "date": "2022-12-28",
//             "time": "2022-12-28T19:30:00.000Z",
//             "classType": "Tap Begginer",
//             "teacher": "Susan Meyer",
//             "__v": 0,
//             "createdAt": "2022-12-10T19:36:25.024Z",
//             "updatedAt": "2022-12-10T19:36:25.024Z"
//         },
//         {
//             "_id": "63961e77e24d85c828096b47",
//             "date": "2022-12-28",
//             "time": "2022-12-28T21:30:00.000Z",
//             "classType": "Tap Advanced",
//             "teacher": "Sara Garcia",
//             "__v": 0,
//             "createdAt": "2022-12-10T19:36:25.024Z",
//             "updatedAt": "2022-12-10T19:36:25.024Z"
//         }
//     ],
//     "2022-12-27": [
//         {
//             "_id": "6394dfb9e13f114183c4ad06",
//             "date": "2022-12-27",
//             "time": "2022-12-27T19:30:00.000Z",
//             "classType": "Tap Advanced",
//             "teacher": "John Mathews",
//             "__v": 0,
//             "createdAt": "2022-12-10T19:36:25.024Z",
//             "updatedAt": "2022-12-10T19:36:25.024Z"
//         },
//         {
//             "_id": "6394dfb9e13f114183c4ad07",
//             "date": "2022-12-27",
//             "time": "2022-12-27T20:30:00.000Z",
//             "classType": "Jazz Begginer",
//             "teacher": "Jen Serrano",
//             "__v": 0,
//             "createdAt": "2022-12-10T19:36:25.024Z",
//             "updatedAt": "2022-12-10T19:36:25.024Z"
//         }
//     ],
//     "2022-12-25": [
//         {
//             "_id": "6394dfb9e13f114183c4ad05",
//             "date": "2022-12-25",
//             "time": "2022-12-25T19:30:00.000Z",
//             "classType": "Tap Advanced",
//             "teacher": "Sara Fredman",
//             "__v": 0,
//             "createdAt": "2022-12-10T19:36:25.024Z",
//             "updatedAt": "2022-12-10T19:36:25.024Z"
//         }
//     ]
// }