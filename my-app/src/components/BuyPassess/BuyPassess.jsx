import './BuyPassess.scss';
import axios from 'axios'
import {Link, useNavigate} from 'react-router-dom';
import { useState } from 'react'

export default function BuyPassess(props) {
  const [value, setValue] = useState(0)
  const navigate = useNavigate();

  const onSubmitHandler = () => {
    const jwtToken = localStorage.getItem('jwt_token');
    axios.post('http://localhost:8080/user/buy',{ numberOfPasses: +value },{
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
    })
    .then(data => {
      props.loadProfile()
      navigate('/')
    })
    .catch(error => console.log(error));
  }

  return (
    <>
      <h2>Purchase Passess for the studio</h2>
      {/* <form className='buy-p'> */}
        <div className='buy-p__btn-wrpr'>
          <input type="radio" id="5-passess" name="passess" value="5" onChange={(e)=>setValue(e.target.value)}/>
          <label for="">5 Passess. 1.5 hour class. $100 CND</label>
        {/* <br /> */}
        </div>
        <div className='buy-p__btn-wrpr'>
          {/* <div className='buy-p__input-wrpr'> */}
            <input type="radio" id="10-passess" name="passess" value="10" onChange={(e)=>setValue(e.target.value)}/>
          {/* </div> */}
          {/* <div className='buy-p__label-wrpr'> */}
            <label for="javascript">10 Passess. 1.5 hour class. $200 CND</label>
         {/* </div> */}
        </div>
        <div className='buy-p__total'>
          <p>You are going to purschase ....</p>
        <button onClick={onSubmitHandler}>CONFIRM</button>
      </div>
      {/* </form> */}
    </>
  );
}

