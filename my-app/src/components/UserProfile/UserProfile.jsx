import './UserProfile.scss';
import avatar from '../../assets/avatar/avatar.png'
import background from '../../assets/background/background.png'


export default function UserProfile(props) {

  return (
    <>
    <div className='profile'>
      {/* <div className='profile__wrpr-photo'>
          <img src={avatar} alt="" className='profile__photo'/>
      </div> */}
      <div className='profile__wrpr-name'>
        {/* <img src={background} alt="" className='profile__back-name'/> */}
        <p className='profile__name'>WELCOME {props.user?.name}</p>
      </div>
      <div className='profile__btn-wrpr'><button onClick={props.handleLogout} className="profile__btn">SIGN OUT</button></div>
    </div>
    </>


     
  );
}