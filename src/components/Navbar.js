import React from 'react';
import {FaBars} from "react-icons/fa";
import {Link } from 'react-scroll';
//import {HashLink as Link} from "react-router-hash-link";
import {animateScroll as scroll} from 'react-scroll'

const Navbar = () => {
  const toggleHome=()=>{
    scroll.scrollToTop();
  }

    return (
<nav id="navbar"  className="navbar navbar-expand-lg navbar-light " style={{backgroundColor:"#5A0000"}}>
 <div className="container">
  {/* <Link className="navbar-brand" to="/" onClick={toggleHome}>
    <img className="logo" src="https://banner2.cleanpng.com/20180504/pew/kisspng-koszalin-logo-rose-logo-5aebf8f1180c42.9590656715254141290985.jpg" alt="logo" ></img>
    </Link> */}
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
  
    <FaBars style={{color:"#fff"}} />
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ml-auto">

      <li className="nav-item active">
        <Link  className="nav-link" to="/" onClick={toggleHome}>Home <span className="sr-only">(current)</span></Link >
      </li>
      
      <li className="nav-item">
        <Link  className="nav-link" 
           to="about"
           smooth={true}
           durartion={500}
           spy={true}
           exact='true' offset={-50}
        >
          about me
          </Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link" 
           to="technologies"
           smooth={true}
           durartion={500}
           spy={true}
           exact='true' offset={-40}
        >
          skills
          </Link >
      </li>
      <li className="nav-item">
        <Link className="nav-link" 
           to="projects"
           smooth={true}
           durartion={500}
           spy={true}
           exact='true' offset={-50}
           >
             projects
             </Link >
      </li>
      <li className="nav-item">
        <Link  className="nav-link"
           to="contact"
           smooth={true}
           durartion={500}
           spy={true}
           exact='true' offset={-50}
            >
              contacts
        </Link >
      </li>
    </ul>
  </div>
  </div>
</nav>
      );
}
 
export default Navbar;