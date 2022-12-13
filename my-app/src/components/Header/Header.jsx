import './Header.scss';
import logo from '../../assets/logo/logo-dance-studio.png'
import {Link} from 'react-router-dom'


export default function Header() {
	return (
		<>
            <div className="header-main">
                <div className="header-main__img-wrp">
                    <img src={logo} alt="" className='header-main__img'/>
                </div>
                <div className='header-main__wrp-nav'>
                    <div className="header-main__nav">
                        <Link to="/">
                            <li className="header-main__nav-li">HOME</li>
                        </Link>
                    </div>
                    <div className="header-main__nav">
                        <Link to="/book">
                            <li className="header-main__nav-li">BOOK</li>
                        </Link>
                    </div>
                    <div className="header-main__nav">
                        <Link to="/buy">
                            <li className="header-main__nav-li">BUY</li>
                        </Link>
                    </div>
                    {/* <div className="header-main__nav">
                        <Link to="/dancer">
                            <li className="header-main__nav-li">DANCER</li>
                        </Link>
                    </div> */}

                </div>
            </div>
		</>
	);
}