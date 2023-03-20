import "./otherSingleCard.css";
import photo from "../images/team/member5.png";

export function OtherSingleCard(props) {
  return (
      <div className="other-member-photo" onClick={props.props}>
        <img src={photo} alt="member"></img>
      </div>
  );
}
