import './Home.scss'
import Header from '../../components/Header/Header';
import UserUpcomingClass from '../../components/UserUpcomingClass/UserUpcomingClass';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserPassPurchases from '../../components/UserPassPurchases/UserPassPurchases';

export default function Home (props){
    return (
        <>
        
        <Header />
        <UserProfile handleLogout={props.handleLogout} user={props.user}/>
        <UserUpcomingClass />
        <UserPassPurchases activePasses={props.activePasses} user={props.user}/>
        
        
        </>
    )
}