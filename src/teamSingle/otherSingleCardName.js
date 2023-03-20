import "./otherSingleCardName.css";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";

export function OtherSingleCardName(props) {
  // console.log(props.props[1]);
  return (
      <div className="other-member-info" onClick={props.props[1]}>
        <p className="mFullname">{props.props[0].fullname}<br/><span>{props.props[0].country}</span></p>
        <ul>
          <ol><FaFacebookF /></ol>
          <ol><FaInstagram /></ol>
          <ol><FaLinkedin /></ol>
          <ol><FaTwitter /></ol>
        </ul>
        <p className="mail">{props.props[0].mail}</p>
      </div>
  );
}
