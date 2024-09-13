import react from 'react'
import './App.css'
import Navbar from './Navbar';


function App() {
  return (
    <div className='Body'>
      <Navbar />
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
          <a href="#" className="cta-button">Schedule a Demo</a>
          <p className="p-btn">TO SEE A PREIEW</p>
          </div>
        </div>
        <div className="col-md-6">
          <div className='image'>
          <img className='img-fluid img-illu' src="/images/illustration-devices.svg" alt="" />
          </div>
        </div>
    </div>
    </div>
    </div>
  );
}

export default App
