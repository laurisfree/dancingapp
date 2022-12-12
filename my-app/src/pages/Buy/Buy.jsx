import './Buy.scss'
import Header from '../../components/Header/Header';
import BuyPassess from '../../components/BuyPassess/BuyPassess';

export default function Buy(props) {
    return (
        <>
        
        <Header />
        <BuyPassess setActivePasses={props.setActivePasses} loadProfile={props.loadProfile}/>
        
        
        </>
    )
}