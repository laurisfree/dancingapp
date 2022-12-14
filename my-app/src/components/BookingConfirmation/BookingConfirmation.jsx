import "./BookingConfirmation.scss";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import moment from "moment";
import axios from "axios";
import logo from "../../assets/logo/logo-dance-studio.png"

export default function BookingConfirmation() {
  const location = useLocation();
  const navigate = useNavigate();
  const { data } = location.state;
  console.log(location.state);

  const onConfirmHanlder = () => {
    const jwtToken = localStorage.getItem("jwt_token");
    axios
      .post(
        "http://localhost:8080/booking",
        { bookingId: data._id },
        {
          headers: {
            Authorization: `Bearer ${jwtToken}`,
          },
        }
      )
      .then((data) => navigate("/"))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <div className="confirmation">
        <div className="confirmation__wrpr-up"></div>
        <img src={logo} alt="" className="confirmation__logo"/>
        {/* <p>You are Booking</p> */}
      </div>
      <div className="confirmation__info-wrpr">
        <p className="confirmation__text">THANK YOU FOR BOOKING:</p>
        <p>{data.classType}</p>
        <p>{data.teacher}</p>
        <p>{moment(data.date).format("dddd MMMM Do YYYY")}</p>
        <p>{moment(data.time).format("h:mm")}</p>
      </div>
      <div className="confirmation__btns-wrpr">
        {/* <Link to='/book/info'> <Link/> */}
        <button className="confirmation__btn-confirm" onClick={onConfirmHanlder}>CONFIRM</button>
        {/* <button>CONFIRM</button> */}
        {/* <p>Add to my Caledar</p> */}
        <div className="confirmation__btn-calendar">
        <a
          href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${
            data.classType
          }&dates=${moment(data.date).format(
            "dddd MMMM Do YYYY"
          )}&details=${"description"}&location=${"Vancover"}`}
          target="_blank"
          className="confirmation__btn-calendar-a"
        >
          ADD TO CALENDAR
        </a>
        </div>
        {/* console.log(Date.now()); */}
        {/* console.log(moment(data.time).format('h:mm')) */}
      </div>
    </>
  );
}
