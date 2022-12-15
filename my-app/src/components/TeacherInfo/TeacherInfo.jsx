import './TeacherInfo.scss';
import imgclass1 from '../../assets/photos/class1.png'
import imgclass2 from '../../assets/photos/class2.png'
import imgclass3 from '../../assets/photos/class3.png'
import imgclass4 from '../../assets/photos/class4.png'
import imgcteacher1 from '../../assets/photos/teacher1.png'
import imgcteacher2 from '../../assets/photos/teacher2.png'
import imgcteacher3 from '../../assets/photos/teacher3.png'
import imgcteacher4 from '../../assets/photos/teacher4.png'
import {Link} from 'react-router-dom';


export default function TeacherInfo() {
  return (
    <>
        <div className='class-info'>
          <div className='class-info__main-wrpr'>
            <div>
            <Link to="/book"><button className='class-info__btn'>BACK</button></Link>
            </div>
            <p> 🩰 BALLET ADVANCED</p>
          </div>
          <div className='class-info__text-wrpr'>
            <p>CHALLENGING CLASS FOR PEOPLE YOU HAVE BEEN PRACTISING BALLET FOR MORE THAN 3 YEARS. 
            BARRE, CENTER. LIVE PIANO WHEN AVAILABLE.</p>
            {/* <p>Challenging class for people who have been practising Ballet for more than 3 years. 
              Barre and center. Live Piano when available. </p> */}
          </div>
          <div className='class-info__gallery'>
            {/* <span> */}
            <img src={imgclass1} alt="" className='class-info__gallery-img' />
            <img src={imgclass2} alt="" className='class-info__gallery-img' />
            {/* </span> */}
            {/* <span> */}
            <img src={imgclass3} alt="" className='class-info__gallery-img' />
            <img src={imgclass4} alt="" className='class-info__gallery-img' />
            {/* </span> */}
          </div>
        </div>
        {/* Info of the teacher */}
        <div className='teacher-info'>
          <div className='teacher-info__main-wrpr'>
            {/* <Link to="/book"><button>BACK</button></Link> */}
            <p>MARY SHELLBY</p>
          </div>
          <div className='teacher-info__text-wrpr'>
            <p>MARY STARTED HER CARRER IN 1990 SHE DANCED FOR THE ROYAL PARIS OPERA FOR 10 YEARES, 
              SHE HAS COLABORATED WITH HIG COREOGRAPHES IN THE INDUSTY</p>
          </div>
          <div className='teacher-info__gallery'>
            <img src={imgcteacher1} alt="" className='teacher-info__gallery-img'/>
            <img src={imgcteacher2} alt="" className='teacher-info__gallery-img'/>
            <img src={imgcteacher3} alt="" className='teacher-info__gallery-img'/>
            <img src={imgcteacher4} alt="" className='teacher-info__gallery-img'/>
          </div>
        </div>
        
    </>
  );
}
