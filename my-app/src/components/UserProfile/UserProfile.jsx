import './UserProfile.scss';
import avatar from '../../assets/avatar/avatar.png'
import background from '../../assets/background/background.png'


export default function UserProfile() {
  return (
    <>
    <div className='profile'>
      <div className='profile__wrpr-photo'>
          <img src={avatar} alt="" className='profile__photo'/>
      </div>
      <div className='profile__wrpr-name'>
        {/* <img src={background} alt="" className='profile__back-name'/> */}
        <p className='profile__name'>WELCOME FLORENCE</p>
      </div>
    </div>
    </>


     
  );
}