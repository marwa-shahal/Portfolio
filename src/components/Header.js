import React from 'react';
import Typed from 'react-typed';
import {Link } from 'react-scroll';
import {FaLinkedin, FaGithub} from"react-icons/fa";
import {MdEmail} from "react-icons/md";

const Header = () => {
    return (
        <div className="header-wraper" id="home">
            <div className="main-info">
             <h2>Hi there!</h2>
             <h1> I'm  Marwa Al-Shahal </h1> 
             <Typed
               className="typed-text"
               strings={[ "Front-End Web Developer", "Mathematics Teacher"]}
               speed={40}
               backSpeed={60}
               loop
             />
             <div className="d-flex">
               <a className="contact-icon" href="https://www.linkedin.com/in/marwa-al-shahal/" target="_blank"> 
               <FaLinkedin size={30} color="white" />
               </a>
               <a className="contact-icon" href="https://github.com/marwa-shahal" target="_blank">
               <FaGithub size={30} color="white" />
               </a>
               <a className="contact-icon" href="mailto:marwa.al.shahal@gmail.com" target="_blank">
               <MdEmail size={30} color="white" />
               </a>
             </div>
          <Link  className="btn btn-outline-light main-info-btn"
           to="contact"
           smooth={true}
           durartion={500}
           spy={true}
           exact='true' offset={-50}
           style={{maxWidth:"15rem", marginTop:"2rem" , paddingTop:"1rem" , paddingBottom:"1rem"}}
            >
             Get in Touch
           </Link>
        </div>
        
        </div>
      );
}
 
export default Header;