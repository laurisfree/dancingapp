import './UserPassPurchases.scss';
import axios from 'axios'
import { useEffect, useState } from 'react'


export default function UserPassPurchases(props) {
  const [passesBought, setpassesBought] = useState(0)
  const [passesUsed, setpasseUsed] = useState(0)

  useEffect(() => {
    const jwtToken = localStorage.getItem('jwt_token');
    axios.get('http://localhost:8080/user/buy',{
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then(data => {
      setpassesBought(data.data.passesBought)
      setpasseUsed(data.data.passesUsed)
    })
    .catch(error => console.log(error));
  }, [])
  
  return (
    <>
       <div className='user-purchases'>
            <div className='user-purchases__active-wrpr'>
              <p>ACTIVE PASSESS</p>
              <p>{passesBought - passesUsed}</p>
            </div>
            <div className='user-purchases__used-wrpr'>
              <p>USED PASSESS</p>
              <p>{passesUsed}</p>
            </div>
        </div>

    </>

  );
}