 import React from 'react';
 import {FaGithub, FaReact, FaCss3, FaHtml5} from 'react-icons/fa'
 import {DiJavascript1} from 'react-icons/di'
 import {SiFirebase} from 'react-icons/si'
 const Technologies = () => {
     return (
      <div className="jumbotron jumbotron-fluid" id="technologies">
       <div className="container technologies">
          <h1 className="technologies-title display-4">Experienced In</h1>
          <div className="tec container-sm d-flex">
          <div className="row row-cols-3 mx-auto">
          <div className="icon row mx-auto">
          <FaHtml5 size={100} color="#5A0000" style={{margin:"auto"}}  />
          </div>
          <div className="icon row mx-auto">
          <FaCss3 size={100} color="#5A0000" style={{margin:"auto"}}  />
          </div>

          <div className="icon row mx-auto">
          <FaGithub size={100} color="#5A0000" style={{margin:"auto"}}  />
          </div>
          <div className="icon row mx-auto">
          <DiJavascript1 size={100} color="#5A0000" style={{margin:"auto"}} />
          </div>
          <div className="icon row mx-auto">
          <FaReact size={100} color="#5A0000" style={{margin:"auto"}}  />
          </div>
          <div className="icon row mx-auto">
          <SiFirebase size={100} color="#5A0000" style={{margin:"auto"}} />
          </div>
         
          </div>
          </div>
        </div>
      </div>
       );
 }
  
 export default Technologies;