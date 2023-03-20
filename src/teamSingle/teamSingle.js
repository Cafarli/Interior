import "./teamSingle.css";
import photo from "../images/team/member5.png";
import { GiWorld } from "react-icons/gi";
import { HiOutlineMail } from "react-icons/hi";
import { BsTelephone } from "react-icons/bs";
import { BsArrowRight } from "react-icons/bs";
import {
  FaInstagram,
  FaFacebookF,
  FaTwitter,
  FaLinkedin,
} from "react-icons/fa";
import data from "../team/team_members.json";
import { useState } from "react";
import { OtherSingleCard } from "./otherSingleCard";
import { OtherSingleCardName } from "./otherSingleCardName";

export function TeamSingle() {

    const [show, setShow] = useState(true)
    const handleChange=()=>{
      console.log('clicked');
      setShow(!show)
    }
  return (
    <div className="teamSingle">
      <div className="single-header">
        <h1>
          Professional Single<p>Home / Team Single</p>
        </h1>
      </div>
      <div className="personal-detail">
        <div className="personal-img">
          <img src={photo} alt="player"></img>
        </div>
        <div className="p-d-content">
          <div className="p-d-info">
            <h1>John Smith</h1>
            <p className="job">Designer</p>
            <p className="subcontent">
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in.Contrpobelie frandomised words which don't
              look even slightly believable.
            </p>
          </div>
          <div className="icons">
            <p>
              <span className="icon">
                <HiOutlineMail />
              </span>
              <a href="mailto: info@yourdomain.com">info@yourdomain.com</a>
            </p>
            <p>
              <span className="icon">
                <BsTelephone />
              </span>
              +1 (378) 400-1234
            </p>
            <p>
              <span className="icon">
                <GiWorld />
              </span>
              <a href="www.yourdomain.com">www.yourdomain.com</a>
            </p>
          </div>
          <div className="single-smedias">
            <ul>
              <li>
                <a href="https://www.facebook.com/">
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com/">
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/">
                  <FaLinkedin />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="biography">
        <div className="bio">
          <h1>Short Biography</h1>
          <p>
            Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
            turpmaximus.posuere in.Contrary to popular belief.There are many
            variations of passages of Lorem Ipsum available, but the majority
            have suffered alteration in some form, njecthumour randomised words
            which don't look even slightly believable. <br />
            <br />
            Embarrassing hidden in the middle of text. All the Lorem Ipsum
            generators on the Internet tend to repeat predefined but the
            majority have suffered alteration in some form chunks as necessary.
          </p>
        </div>
        <div className="bio-skill">
          <div className="skill">
            <h3>Simplicity and Functionality</h3>
            <p>
              Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
              turpmaximus.posuere in belief. <br />
            <br />There are many variations of
              passages of Lorem Ipsum from available, but the majority have
              suffered alteration in some form, njecthumour
            </p>
          </div>
          <div className="questions">
            <h3>Question and Answer</h3>
            <p>Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpmaximus.posuere in.</p>
          </div>
        </div>
      </div>
      <div className="others">
        <h1>Our Team Members</h1>
        {show ?
        <div className="other-members">
        {data.members!==undefined && !!data.members.length && data.members.filter((m,ind)=>ind<4).map((mem,i)=> {
          return (
            <OtherSingleCard props={handleChange} />
            )
        })}</div>

        : 
        <div className="other-members">
            {data.members!==undefined && !!data.members.length && data.members.filter((m,ind)=>ind<4).map((mem,i)=> {
          return (
            <OtherSingleCardName props={[mem, handleChange]} />
            )
        })}
            
        </div>
        }
        {/* </div> */}
      </div>
      <div className="single-contact">
        <h1>Contact Me</h1>
        <div className="nameEmail">
            <input name="fulname" type="text" placeholder="Name" required />
            <input name="email" type="text" placeholder="Email" required />
        </div>
        <div className="single-mail-content">
        <textarea name="emailContent" type="text" placeholder="Sent your message" required />
        </div>
        <div className="single-mail-send">
            <div className="saving">
            <input type="checkbox" name="remember-mail"/>
            <label>Save my name, email, and website in this browser for the next time I comment.</label>
            </div>
            <div className="send-button">
            <button>
                Send Now
                <BsArrowRight style={{ marginLeft: "5px" }} color="#CDA274" />
            </button>
            </div>
        </div>
      </div>
    </div>
  );
}
