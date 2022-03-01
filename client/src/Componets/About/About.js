import ScreenHeading from '../../Utilities/ScreenHeading/ScreenHeading';
import React, {useEffect} from 'react';
import ScrollService from '../../Utilities/ScrollService';
import Animations from '../Animations';
import Footer from '../Home/Footer/Footer';
import "./About.css"

export default function About(props) {
    let fadeInScreenHandler = (screen)=>{
        if (screen.fadeInScreen !== props.id)
        return
        Animations.animations.fadeInScreen(props.id)
    }

    const fadeInSubscription = ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler)

    const Screen_Constsants ={
        description :"Full stack web developer with background knowledge of MERN stacks with redux and Python and Django, along with a knack for learning new languages and frameworks. Strong professional with years of experice with Agile and Lean.",
        highlights: {
            bullets:
            [
                "Full Stack web development",
                "Interactive Front End as per the design",
                "React and React Native",
                "Python and Django",
                "Building REST API",
                "Managing database",
                "Agile and Lean Coach",
                "USAF Veteran",
            ],
                heading: "Here are a Few Highlights:"
        }
    }

    const renderHighlights=()=>{
        return(
        Screen_Constsants.highlights.bullets.map((value, i)=>(
            <div className='highlight' key={i}>
                <div className='highlight-blob'></div>
                <span>{value}</span>
            </div>
        ))
        )
    }

  return <div className='about-me-container screen-container fade-in ' id={props.id || ""}>
      <div className='about-me-parent'>
          <ScreenHeading title={'About Me'} subHeading={'Why Choose Me?'}/>
          <div className='about-me-card'>
              <div className='about-me-profile'></div>
              <div className='about-me-details'>
                  <span className='about-me-description'>{Screen_Constsants.description}</span>
                  <div className='about-me-highlights'>
                      <div className='highlight-heading'>
                          <span>{Screen_Constsants.highlights.heading}</span>
                      </div>
                      <div className='highlight-heading'>
                          {renderHighlights()}
                      </div>

                  </div>
                  <div className='about-me-options'>
                  <button className="btn primary-btn" onClick={() => ScrollService.scrollHandler.scrollToHireMe()}>
              {""}
              Hire Me{" "}
            </button>
            <a href="Chris_Resume.pdf" download="Ehiedu Chris_Resume.pdf">
              <button className="btn highlighted-btn">Get Resume</button>
            </a>
                  </div>
              </div>
          </div>
      </div>
      <div>
      <Footer />
      </div>
  </div>;
}
