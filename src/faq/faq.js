import "./faq.css";
import pQuestion from "../images/projectQuestion.jpg";
import eQuestion from "../images/everyQuestion.jpg";
import { IoIosArrowForward } from "react-icons/io";
import { useState } from "react";

export function Faq() {
    const [showQ1, setShowQ1] = useState(false);
    const [showQ2, setShowQ2] = useState(false);
    const [showQ3, setShowQ3] = useState(false);
    const [showQ4, setShowQ4] = useState(false);
    const [showQ5, setShowQ5] = useState(false);
    const [showQ6, setShowQ6] = useState(false);
    const [showQ7, setShowQ7] = useState(false);
    const [showQ8, setShowQ8] = useState(false);
    const [showQ9, setShowQ9] = useState(false);
    const [showQ10, setShowQ10] = useState(false);

  return (
    <div className="faq">
      <div className="faq-header">
        <h1>
          Faq's<p>Home / Faq</p>
        </h1>
      </div>
      <h1 className="faq-title">Every Question Answered</h1>
      <div className="e-question">
        <div className="ep-questions">
          <div className="ep-q">
            <p
              className="q-title"
              onClick={() => {
                setShowQ1(!showQ1);
              }}
            >
              What is the Hipcouch Interior Design Service?{" "}
              <IoIosArrowForward />
            </p>

            {showQ1 ? (
              <p className="q-content">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </p>
            ) : null}
          </div>
          <div className="ep-q">
            <p
              className="q-title"
              onClick={() => {
                setShowQ2(!showQ2);
              }}
            >
              What is the Hipcouch Interior Design Service?{" "}
              <IoIosArrowForward />
            </p>

            {showQ2 ? (
              <p className="q-content">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </p>
            ) : null}
          </div>
          <div className="ep-q">
            <p
              className="q-title"
              onClick={() => {
                setShowQ3(!showQ3);
              }}
            >
              What is the Hipcouch Interior Design Service?{" "}
              <IoIosArrowForward />
            </p>

            {showQ3 ? (
              <p className="q-content">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </p>
            ) : null}
          </div>
          <div className="ep-q">
            <p
              className="q-title"
              onClick={() => {
                setShowQ4(!showQ4);
              }}
            >
              What is the Hipcouch Interior Design Service?{" "}
              <IoIosArrowForward />
            </p>

            {showQ4 ? (
              <p className="q-content">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </p>
            ) : null}
          </div>
          
          <div className="ep-q">
            <p
              className="q-title"
              onClick={() => {
                setShowQ5(!showQ5);
              }}
            >
              What is the Hipcouch Interior Design Service?{" "}
              <IoIosArrowForward />
            </p>

            {showQ5 ? (
              <p className="q-content">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </p>
            ) : null}
          </div>
        </div>
        <div className="ep-q-img">
          <img src={eQuestion} alt="everyquestion"></img>
        </div>
      </div>



      <h1 className="faq-title">Project related questions</h1>
      <div className="p-question">
        <div className="ep-q-img">
          <img src={pQuestion} alt="projectquestion"></img>
        </div>
        <div className="ep-questions">
          <div className="ep-q">
            <p
              className="q-title"
              onClick={() => {
                setShowQ6(!showQ6);
              }}
            >
              What is the Hipcouch Interior Design Service?{" "}
              <IoIosArrowForward />
            </p>

            {showQ6 ? (
              <p className="q-content">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </p>
            ) : null}
          </div>
          <div className="ep-q">
            <p
              className="q-title"
              onClick={() => {
                setShowQ7(!showQ7);
              }}
            >
              What is the Hipcouch Interior Design Service?{" "}
              <IoIosArrowForward />
            </p>

            {showQ7 ? (
              <p className="q-content">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </p>
            ) : null}
          </div>
          <div className="ep-q">
            <p
              className="q-title"
              onClick={() => {
                setShowQ8(!showQ8);
              }}
            >
              What is the Hipcouch Interior Design Service?{" "}
              <IoIosArrowForward />
            </p>

            {showQ8 ? (
              <p className="q-content">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </p>
            ) : null}
          </div>
          <div className="ep-q">
            <p
              className="q-title"
              onClick={() => {
                setShowQ9(!showQ9);
              }}
            >
              What is the Hipcouch Interior Design Service?{" "}
              <IoIosArrowForward />
            </p>

            {showQ9 ? (
              <p className="q-content">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </p>
            ) : null}
          </div>
          
          <div className="ep-q">
            <p
              className="q-title"
              onClick={() => {
                setShowQ10(!showQ10);
              }}
            >
              What is the Hipcouch Interior Design Service?{" "}
              <IoIosArrowForward />
            </p>

            {showQ10 ? (
              <p className="q-content">
                Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae
                turpmaximus.posuere in.Contrary popular belief. There are many
                variations of passages of Lorem Ipsum available, but the
                majority randomised.
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
