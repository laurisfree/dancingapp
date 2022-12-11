import './UserPassPurchases.scss';


export default function UserPassPurchases(props) {
  return (
    <>
       <div className='user-purchases'>
            <div className='user-purchases__active-wrpr'>
              <p>ACTIVE PASSESS</p>
              <p>{props.activePasses}</p>
            </div>
            <div className='user-purchases__used-wrpr'>
              <p>USED PASSESS</p>
              <p>10</p>
            </div>
        </div>

    </>

  );
}