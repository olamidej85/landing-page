import React from "react";
import './App.css'



    export default function () {
        return(
            <div className="app">
                <div className=' d-flex justify-content-between'>
          <a href="index.html"> 
          <img src="/images/logo.svg" alt="logo" title="Homepage" className="logo "/>
               </a>
               <nav className="navbar navbar-expand-lg navbar-light bg-light">
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Features</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Pricing</a>
            </li>
             <li className="nav-item">
              <a className="nav-link" href="#">Login</a>
            </li>
          </ul>
      </div>
    </nav>
        </div>
            </div>
        );
};