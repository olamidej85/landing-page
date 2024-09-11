import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className='Body'>
      <div className=' d-flex justify-content-between'>
      <a href="index.html"> 
            <img src="/images/logo.svg" alt="logo" title="Homepage" class="logo "/>
           </a>
           <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      <li class="nav-item active">
        <a class="nav-link" href="#">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Features</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Pricing</a>
      </li>
      <li class="nav-item">
        <a class="nav-link " href="#">Login</a>
      </li>
    </ul>
  </div>
</nav>
    </div>
        <div className="App">
        <div className="row">
        <div className="col-md-6">
         <p className=' column1 d-flex'>
         <button className='n-btn'>NEW</button> <p className='p-mono'>MONOGRAPH DASHBOARD</p></p> 
          <h1 className='heading1'>
          POWERFUL INSIGHTS INTO YOUR TEAM <br />
          </h1>
          <p className='p-pro'>Project planing and time tracking for agile teams </p>
          <div className="button">
          <a href="#" class="cta-button">Schedule a Demo</a>
          <p className="p-btn">TO SEE A PREIEW</p>
          </div>
        </div>
        <div className="col-md-6">
        <img className='img-fluid img-illu' src="/images/illustration-devices.svg" alt="" />
        </div>
    </div>
    </div>
    </div>
  );
}

export default App
