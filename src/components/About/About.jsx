import React from "react";
import "./About.css";

function About() {
  return (
    <div id="about" className="py-3 m-0 bg-white">
      <div className="container mt-4 py-5">
        <div className="row mt-4">
          <div className="col-md-6 mb-4 mb-md-0">
            <img
              className="profile-image"
              src="./assets/aboutr.jpg"
              alt="Profile"
            />
          </div>
          <div className="col-md-6 d-flex align-items-start">
            <div className="about-content">
              <div className="fs-3">
                  <h2>Hi, I'm <span>Mansoor</span>🤚</h2> 
                  <h4>I'm a Software Developer.</h4>
                 <p> <span role="img" aria-label="email">📧 </span> mansoorpathikonda@gmail.com</p>
              </div>
              <div className="social-icons"></div>
              <p>
                <a
                  className="btn btn-outline-dark btn-lg"
                  href="https://drive.google.com/file/d/1IiaZyDoXDIM38-UGxEcnxSamJYq9snX2/view?usp=sharing"
                >
                  Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
