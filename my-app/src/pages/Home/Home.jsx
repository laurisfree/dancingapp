import './Home.scss'
import Header from '../../components/Header/Header';
import UserUpcomingClass from '../../components/UserUpcomingClass/UserUpcomingClass';
import UserProfile from '../../components/UserProfile/UserProfile';
import UserPassPurchases from '../../components/UserPassPurchases/UserPassPurchases';

export default function Home (props){
    return (
        <>
        
        <Header />
        <UserProfile />
        <UserUpcomingClass />
        <UserPassPurchases activePasses={props.activePasses} />
        
        
        </>
    )
}