import './BuyPassess.scss';

import {Link, useNavigate} from 'react-router-dom';

export default function BuyPassess(props) {

  const navigate = useNavigate();

  function updateActivePasses(){
    props.setActivePasses(10);
    navigate('/');
  }

  return (
    <>
      <h2>Purchase Passess for the studio</h2>
      <form className='buy-p'>
        <div className='buy-p__btn-wrpr'>
          <input type="radio" id="5-passess" name="passess" value="5 Passess" />
          <label for="">5 Passess. 1.5 hour class. $100 CND</label>
        {/* <br /> */}
        </div>
        <div className='buy-p__btn-wrpr'>
          {/* <div className='buy-p__input-wrpr'> */}
            <input type="radio" id="10-passess" name="passess" value="10 Passess" />
          {/* </div> */}
          {/* <div className='buy-p__label-wrpr'> */}
            <label for="javascript">10 Passess. 1.5 hour class. $200 CND</label>
         {/* </div> */}
        </div>
      </form>
      <div className='buy-p__total'>
        <p>You are going to purschase ....</p>
        <button onClick={updateActivePasses}>CONFIRM</button>
      </div>
    </>
  );
}

