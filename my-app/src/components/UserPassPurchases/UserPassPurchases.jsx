import './UserPassPurchases.scss';


export default function UserPassPurchases(props) {

  console.log(props)
  return (
    <>
       <div className='user-purchases'>
            <div className='user-purchases__active-wrpr'>
              <p>ACTIVE PASSESS</p>
              <p>{props.user?.passesBought}</p>
            </div>
            <div className='user-purchases__used-wrpr'>
              <p>USED PASSESS</p>
              <p>{props.user?.passesUsed}</p>
            </div>
        </div>

    </>

  );
}