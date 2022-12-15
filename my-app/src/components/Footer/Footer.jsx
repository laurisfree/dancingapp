import './Footer.scss';
import iconig from '../../assets/icons/instagram.png'
import iconfb from '../../assets/icons/facebook.png'

export default function Footer () {
    return(
        <>
        <div className='footer-wrpr'>
            {/* <p>Dancing studio</p> */}
            {/* <p>1st Ave. Vancouver BC</p>  */}
            <img src={iconig} alt="ig-icon" className='footer-wrpr__icon'/>
            <img src={iconfb} alt="ig-icon" className='footer-wrpr__icon'/>

        </div>
        
        </>
    )
}