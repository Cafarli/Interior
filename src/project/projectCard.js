import "./projectCard.css";
import project1 from "../images/project/project1.jpg";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

export function ProjectCard(props) {
    return(
        <div className="op-project">
          <div className="op-pro-img">
            <img src={project1} alt="project"></img>
          </div>
          <div className="op-pro-detail">
            <div className="op-pro-info">
              <p className="op-prj-title">{props.props.project_name}</p>
              {/* {props.data.projects.projectName} */}
              <p className="op-prj-path">Decor / Architecture</p>
            </div>
            <div className="op-pro-btn">
              <Link to={`/project-details`}>
                <button>
                  <IoIosArrowForward />
                </button>
              </Link>
            </div>
          </div>
        </div>
    );
}