import "./pricingPlan.css";
import { BsArrowRight } from "react-icons/bs";

export function PricingPlan() {
  return (
    <div className="pricingPlan">
      <div className="pricing-header">
        <h1>
          Pricing & Plan<p>Home / Pricing</p>
        </h1>
      </div>
      <div className="plans">
        <div className="first plan">
          <div className="price">
            <p>Design advices</p>
            <p className="all-price">
              <span>$</span>29
            </p>
            <p>/month</p>
          </div>
          <div className="plan-content">
            <p>
              General living space advices
              <br />
              Rennovation advices
              <br />
              Interior design advices
              <br />
              Furniture reorganization
              <br />
              Up to 5 hours meetings
            </p>
          </div>
          <div className="getStarted">
            <button>
              Get Started{" "}
              <BsArrowRight style={{ color: "#292F36", marginLeft: "2%" }} />
            </button>
          </div>
        </div>
        <div className="second plan">
        <div className="price">
            <p>Complete Interior</p>
            <p className="all-price">
              <span>$</span>39
            </p>
            <p>/month</p>
          </div>
          <div className="plan-content">
            <p>
Complete home redesign<br/>
Interior and exterior works<br/>
Modular interior planning<br/>
Kitchen design<br/>
Garages organization
            </p>
          </div>
          <div className="getStarted">
            <button>
              Get Started{" "}
              <BsArrowRight style={{ color: "#cda274", marginLeft: "2%" }} />
            </button>
          </div>
        </div>
        <div className="third plan">
        <div className="price">
            <p>Design advices</p>
            <p className="all-price">
              <span>$</span>29
            </p>
              <p>/month</p>
          </div>
          <div className="plan-content">
            <p>
            Furniture for living room<br/>
Furniture refurbishment<br/>
Sofas and amchairs<br/>
Tables and chairs<br/>
Kitchens
            </p>
          </div>
          <div className="getStarted">
            <button>
              Get Started{" "}
              <BsArrowRight style={{ color: "#292F36", marginLeft: "2%" }} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
