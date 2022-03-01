import React from "react";
import { ReactTypical } from "@deadcoder0904/react-typical";
import ScrollService from "../../../Utilities/ScrollService";
import "./Profile.css"
import '@deadcoder0904/react-typical/dist/styles.min.css'

export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
              <div className="colz-icon">
              <a href="https://www.linkedin.com/in/chris-mattox2021/">
            <i className="fa fa-linkedin"></i>
          </a>
          <a href="https://github.com/cmattox4846">
            <i className="fa fa-github"></i>
          </a>
          {/* <a href="#">
            <i className="fa fa-instagram"></i>
          </a> */}
          {/* <a href="#">
            <i className="fa fa-youtube-square"></i>
          </a> */}
          {/* <a href="#">
            <i className="fa fa-twitter"></i>
          </a> */}
          </div>

            
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {""}
              Hello, I'm <span className="highlighted-text">Chris Mattox</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {""}
              <h1>
                {""}
                <ReactTypical
                  loop={Infinity}
                  steps={[
                    "Enthusiastic Dev ",
                    2000 ,
                    "Full Stack Developer ",
                    2000 ,
                    "MERN Stack Developer",
                    2000 ,
                    "React/React Native Dev"	,
                    2000 ,
                    "Cross Platform Dev",
                    2000 ,
                  ]}
                />
              </h1>
              <span className="profile-role-tageline">
               At M3 Designs I strive to provide cutting edge application development <br/>with a focus on moving mankind into the future. 
              </span>
            </span>
          </div>
          <div className="profile-options">
            <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {""}
              Hire Me{" "}
            </button>
            <a href="Chris_Resume.pdf" download="Ehiedu Chris_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
            <div className="profile-picture-background">

            </div>
        </div>
      </div>
    </div>
  );
}
