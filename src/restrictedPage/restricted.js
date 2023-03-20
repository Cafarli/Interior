import "./restricted.css";
import { BsArrowRight } from "react-icons/bs";

export function RestrictedPage() {
    return(
        <div className="restricted">
        <div className="restricted-header">
          <h1>Restricted Page<p>Home / Restricted Page</p></h1>
          
        </div>
            <div className="passwordPart">
                <div className="p-text-part">
                <h1>Password Protected</h1>
                <p>This page is password protected. If you are the website admin, or have access to this page, please type your password below.
</p>
                </div>
                <div className="enterPassword">
                    <input placeholder="Enter Your Password"/>
                    <button>Submit Now <BsArrowRight style={{marginLeft:"5px"}} color="#CDA274"/></button>
                </div>
                    
            </div>
        </div>
    );
}