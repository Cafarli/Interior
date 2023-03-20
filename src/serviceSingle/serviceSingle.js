import "./serviceSingle.css";
import brand1 from "../images/brand1.svg";
import brand2 from "../images/brand2.svg";
import brand3 from "../images/brand3.svg";
import brand4 from "../images/brand4.svg";
import brand5 from "../images/brand5.svg";
import servicePhoto from "../images/serviceSingle.jpg";
import ReactPlayer from "react-player/youtube";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";


export function ServiceSingle() {
  return (
    <div className="serviceSingle">
      <div className="serviceS-header">
        <h1>
          Service Single<p>Home / Service Single</p>
        </h1>
      </div>
      <div className="serviceS-info">
        <div className="ss-info-detail">
          <h1>We set the trends of modern living Services.</h1>
          <p>
            <span>
              It is a long established fact that a reader will be distracted by
              the of readable content of a page{" "}
            </span>
            <br />
            <br />
            when lookings at its layouts the points spriof using that it has a
            more less normal.A wonderful serenity has taken pgossession of my
            entire soul, like thesce sweet morndsings of sphring which I enjoy
            with my forwhole heart. I am alone, and feel the charm of
            excgistence in this spot, which was created for the bliss of souls
            like mine. <br />
            <br />
            When lookings at its layouts the points spriof using that it has a
            more less normal.A wonderful serenity has taken pgossession of my
            entire soul, like thesce sweet morndsings of sphring which I enjoy
            with my forwhole heart. I am alone, and feel the charm of
            excgistence in this spot, which was created for the bliss of souls
            like mine.
          </p>
        </div>
        <div className="ss-info-brands">
          <ul>
            <ol>
              <img src={brand1} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand2} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand3} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand4} alt="brand"></img>
            </ol>
            <ol>
              <img src={brand5} alt="brand"></img>
            </ol>
          </ul>
        </div>
        <div className="ss-info-video">
          <ReactPlayer
            width="100%"
            height="350px"
            className="react-player"
            controls
            light
            url="https://www.youtube.com/embed/PqvlU9WI5pU"
          />
        </div>
        <div className="ss-pointers">
          <div className="ss-pointer one">
            <h1>Use of Interior</h1>
            <ul>
              <li>We provide high quality design services.</li>
              <li>Project on time and Latest Design.</li>
              <li>Scientific Skills For getting a better result.</li>
              <li>Renovations Benefit of Service.</li>
              <li>We are confident about our projects.</li>
            </ul>
          </div>
          <div className="ss-pointer two">
            <h1>Make an Art</h1>
            <ul>
              <li>We provide high quality design services.</li>
              <li>Project on time and Latest Design.</li>
              <li>Scientific Skills For getting a better result.</li>
              <li>Renovations Benefit of Service.</li>
              <li>We are confident about our projects.</li>
            </ul>
          </div>
        </div>
        <div className="go-portfolio">
            <div className="gp-img">
                <img src={servicePhoto} alt="service"></img>
            </div>
            <div className="gp-text">
                <h1>We love design.That's how we got here.</h1>
                <p>It is a long established fact that a reader will be distracted by the of readable content .</p>
                <Link to={`/ourportfolio`}><button>Our Portfolio <BsArrowRight style={{marginLeft:"2%", color:"#CDA274"}} /></button></Link>
            </div>
        </div>
        
      </div>
      <div className="experience">
            <div className="years">
                <p className="year num">12</p>
                <p>Years Of Experience</p>
            </div>
            <div className="s-project">
                <p className="sp num">85</p>
                <p>Success Project</p>
            </div>
            <div className="a-project">
                <p className="ap num">15</p>
                <p>Active Project</p>
            </div>
            <div className="customers">
                <p className="cust num">95</p>
                <p>Happy Customers</p>
            </div>
        </div>
    </div>
  );
}
