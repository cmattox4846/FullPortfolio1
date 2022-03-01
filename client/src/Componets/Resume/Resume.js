import ScreenHeading from "../../Utilities/ScreenHeading/ScreenHeading";
import ScrollService from "../../Utilities/ScrollService";
import Animations from "../Animations";
import React, { useState } from "react";
import Footer from "../Home/Footer/Footer";
import "./Resume.css";

export default function Resume(props) {
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffSetStyle, setCarousalOffSetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;
    Animations.animations.fadeInScreen(props.id);
  };

  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading" >
            <div className="heading-bullet"></div>
                <span>{props.heading ? props.heading : " "}</span>
            
            {props.fromDate && props.toDate ? 
            (
              <div className="heading-date"> 
                {props.fromDate + "-" + props.toDate}
              </div>
            ) :
            (
              <div></div>
            )} 
            </div>
         
          <div className="resume-sub-heading">
            <span> {props.subHeading ? props.subHeading : ""}</span>
          </div>
          <div className="resume-heading-description">
            <span> {props.description ? props.description : ""}</span>
          </div>
        </div>
     
    );
  };

  const resumeBullets = [
    { label: "Education", logoSrc: "education.svg" },
    { label: "Work History", logoSrc: "work-history.svg" },
    { label: "Programming Skills", logoSrc: "programming-skills.svg" },
    { label: "Projects", logoSrc: "projects.svg" },
    { label: "Interests", logoSrc: "interests.svg" },
  ];

  const programmingSkillDetails = [
    { skill: "JavaScript", ratingPercentage: 85 },
    { skill: "Python", ratingPercentage: 85 },
    { skill: "React JS", ratingPercentage: 85 },
    { skill: "React Native", ratingPercentage: 70 },
    { skill: "Node JS", ratingPercentage: 85 },
    { skill: "CSS", ratingPercentage: 80 },
    { skill: "HTML", ratingPercentage: 85 },
    { skill: "SQL", ratingPercentage: 60 },
  ];

  const projectsDetails = [
    // {
    //   title: "Personal Portfolio Website",
    //   duration: { fromDate: "2021  ", toDate: "  2022" },
    //   description:
    //     "A Personal Portfolio website to showcase all my details and projects at one place.",
    //   subHeading:<p> Technologies Used: React JS, Bootsrap.
    //       <br/>
    //       <a href='https://github.com/cmattox4846/M3Portfolio'><i className="fa fa-github-square projectLink">&nbsp; Repo</i></a>
    // </p>,
    // },
    {
      title: "KnowYourRep",
      duration: { fromDate: "2021 ", toDate: " 2021" },
      description:
        "KnowYourRep is an application that allows novice users to keep informed about how well their elected officials are adhering to the platforms in which they were elected. ",
      subHeading: <p>
      Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.
      <br />
      <a href='https://github.com/cmattox4846/KnowYourRep'><i className="fa fa-github-square projectLink"> &nbsp; Frontend Repo</i></a>
      
      &nbsp;&nbsp;||&nbsp;&nbsp;
      <a href='https://github.com/cmattox4846/KnowYourRep-API'><i className="fa fa-github-square projectLink"> &nbsp; Backend Repo</i></a>
      &nbsp;&nbsp;||&nbsp;&nbsp;
      <a href='https://www.youtube.com/watch?v=I_87SmwHGUA'><i className="fa fa-play-circle icon projectLink"> 
      &nbsp; Watch Demo</i></a>
    </p>,
    },
    {
      title: "GoodGet Eccommerce Website",
      duration: { fromDate: "2021 ", toDate: " 2021" },
      description:
        "GoodGet is an e-commerce application that allows users to buy and sell items in a p2p sales experience.",
      subHeading: <p>
      Technologies Used:  React Native, Mongo DB, Express Js, Node Js, Redux.
      <br />
      <a href='https://github.com/cmattox4846/KnowYourRep'><i className="fa fa-github-square projectLink"> &nbsp; Frontend Repo</i></a>
      
      &nbsp;&nbsp;||&nbsp;&nbsp;
      <a href='https://github.com/cmattox4846/KnowYourRep-API'><i className="fa fa-github-square projectLink"> &nbsp; Backend Repo</i></a>
      </p>
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={"devCodeCamp"}
        subHeading={"FullStack Software Development Certification"}
        fromDate={"2021 "}
        toDate={" 2021"}
      />
      <ResumeHeading
        heading={"Western International University "}
        subHeading={"B.S. -  Business Minor in Information Technology"}
        fromDate={"2008 "}
        toDate={" 2012"}
      />
      <ResumeHeading
        heading={"Community College of the Air Force"}
        subHeading={"A.A.S. - Electronic Engineering"}
        fromDate={"2004  "}
        toDate={" 2006"}
      />
    </div>,

    <div className="resume-screen-container" key="work-experience">
      <ResumeHeading
        heading={"OnPoint Market Research Group"}
        subHeading={"IT Administrator (Contractor)"}
        fromDate={"2018 "}
        toDate={" 2021"}
      />
      <div className="experience-description">
        <span className="resume-description-text">
          OnPoint Market Research Group is a digital market company that focuses
          on led generation via sports and music venues
        </span>
      </div>
      <div className="experience-description">
        <span className="resume-description-text">
          - Developed and maintained Salesforce APIs, interfaces, and Custom
          database reports.
        </span>
        <br></br>
        <span className="resume-description-text">
          - Provided hardware and software support for end-users in the field.
        </span>
        <br />
        <span className="resume-description-text">
          - Interfaced with vendors and area staff to ensure proper installation
          of equipment.
        </span>
        <br />
        <span className="resume-description-text">
          - Maintaining custom CSS, WordPress, and JavaScript code in order to
          provide premier Website Design.
        </span>
      </div>
      </div>,
   
   

    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
            <span>{skill.skill}</span>
            <div className="skill-percentage">
              <div
                style={{ width: skill.ratingPercentage + "%" }}
                className="active-percentage-bar"
              ></div>
            </div>
          </div>
        
      ))}
    </div>,

    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Veteran Outreach"
        description="I am very active in the veteran community, helping fellow veteran get the benefits they deserve."
      />
      <ResumeHeading
        heading="Water Sports"
        description="Spend my weekend getting my fill of the outdoors by paddleboarding, scuba diving, and working as a Seatow Boat Captain."
      />
      <ResumeHeading
        heading="Learning"
        description="Everyday I find myself watching youtube to learn about new hobbies or how to perfect exsiting skills. "
      />
    </div>,

    // {
    //    <ResumeHeading
    //         heading = {"SeaTow"}
    //         subHeading={"Captain and Rigger (Seasonal)"}
    //         fromDate={"2021"}
    //         toDate={"2021"}/>
    //         <ResumeHeading
    //         heading = {"TriageLogic LLC"}
    //         subHeading={"IT Administrator/Customer Support (Contractor)	"}
    //         fromDate={"2020"}
    //         toDate={"2021"}/> 
    // },
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;
    let newCarousalOffset = {
      style: { transform: "translateY(" + index * offsetHeight * -1 + "px)" },
    };
    setCarousalOffSetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? "bullet selected-bullet" : "bullet"
        }
        key={index}
      >
        <img
          className="bullets-logo"
          src={require(`../../Assets/Resume/${bullet.logoSrc}`)}
          alt="Oops,,,, no internet connection"
        />
        <span className="bullets-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        className="resume-details-carousal"
        style={carousalOffSetStyle.style}
      >
        {resumeDetails.map((ResumeDetails) => ResumeDetails)}
      </div>
    );
  };

  return (
    <div className="resume-container screen-container fade-in" id={props.id || ""}>
      <div className="resume-content">
        <ScreenHeading title={"Resume"} subHeading={"My Formal Bio Details"} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullets-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>
          <div className="resume-bullets-details">{getResumeScreens()}</div>
        </div>
      </div>
      <div>
      <Footer />
      </div>
    </div>
  );
}
