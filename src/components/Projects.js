import React from 'react';
import MoviesHub from '../images/MoviesHub.jpg';
import EWallet from '../images/EWallet.jpg';
import Generosity from '../images/Generosity.jpg'
import {FaGithub, FaLink} from 'react-icons/fa';

const Projects = () => {
    return ( 
     <div className="project-wraper" id="projects">
     <div className="container" >
      
      <h1 className="project-title display-4">Projects</h1>
  
    <div className="project-info card-deck ">

    <div className="card" style={{width: "18rem"}}>
    <div className="img-container">
     <img className="card-img-top" src={Generosity} alt="Card image cap" />
     </div>
     <div className="card-body">
      <h5 className="card-title">Real Generosity</h5>
      <p className="card-text">An app that provides a platform to connect people who have plenty to share with those in need.</p>
    </div>  
    <div className="card-footer">
           <a href="#" className="btn rounded"><FaGithub /></a>
           <a href="#" className="btn rounded"><FaLink /></a>
           </div>
       
      </div>

      <div className="card" style={{width: "18rem"}}>
      <div className="img-container">
     <img className="card-img-top" src={MoviesHub} alt="Card image cap" />
     </div>
     <div className="card-body">
      <h5 className="card-title">Movies Hub</h5>
      <p className="card-text">Online searchable source for movies information including rating cast, trailer and actress info.</p>
    </div>   
    <div className="card-footer">
           <a href="#" className="btn rounded"><FaGithub /></a>
           <a href="#" className="btn rounded"><FaLink /></a>
          
       </div>
      </div>


      <div className="card" style={{width: "18rem"}}>
        <div className="img-container">
       <img className="card-img-top" src={EWallet} alt="Card image cap" /></div>
      <div className="card-body">
      <h5 className="card-title">E-Wallet</h5>
      <p className="card-text">E-wallet and transaction manager Where you can add wallets in different types of currencies and manage your incomes and outcomes.</p>
      </div> 
      <div className="card-footer">
           <a href="#" className="btn rounded"><FaGithub /></a>
           <a href="#" className="btn rounded"><FaLink /></a>
       
       </div>
      </div>
 </div> 
 </div>
        </div>

    );
}
 
export default Projects;