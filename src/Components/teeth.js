import React, {useState} from 'react';
import './Teeth.css';
import {Link} from 'react-router-dom';

function Teeth() {
   

  return (
    <div className="main_cantainer">
       <div className="teeths">
         <div className="text">
           <p>Where do you experience pain in your mouth? Select tooth/teeth </p>
         </div>
         <div className="TeethsIcon">
           <div className="icon">
             <div className="icon1" >
               
             </div>
             <div className="icon2" >

             </div>
             <div className="icon3">

             </div>
             <div className="icon4">
               
             </div>
             <div className="icon5">
               
             </div>
             <div className="icon6">
               
             </div>
             <div className="icon7">
               
             </div>
             <div className="icon8">
               
             </div>
             <div className="icon9">
               
             </div>
             <div className="icon10">
               
             </div>
             <div className="icon11">
               
             </div>
             <div className="icon12">
               
             </div>
             <div className="icon13">
               
             </div>
             <div className="icon14">
               
             </div>
             <div className="icon15">
               
             </div>
             <div className="icon16">
               
             </div>
             <div className="icon17">
               
             </div>
             <div className="icon18">
               
             </div>
             <div className="icon19">
               
             </div>
             <div className="icon20">
               
             </div>
             <div className="icon21">
               
             </div>
             <div className="icon22">
               
             </div>
             <div className="icon23">
               
             </div>
             <div className="icon24">
               
             </div>
             <div className="icon25">
               
             </div>
             <div className="icon26">
               
             </div>
             <div className="icon27">
               
             </div>
             <div className="icon28">
               
             </div>
             <div className="icon29">
               
             </div>
             <div className="icon30">
               
             </div>
             <div className="icon31">
               
             </div>
             <div className="icon32">
               
             </div>
           </div>
           <nav className='navbar'>
             <ul>
               <li>UPPER JAW</li>
               <li>incisors</li>
               <li>canine</li>
               <li>pre malars</li>
               <li>molars</li>
             </ul>
             <div className='submmit'>
               <a href="#">Left</a>
               <Link to="/Info" className='btn-primary'>submit</Link>
               <a href="#">Right</a>
             </div>
             <ul>
               <li>molars</li>
               <li>pre molars</li>
               <li>canine</li>
               <li>incisors</li>
               <li>LOWER JAW</li>
             </ul>
           </nav>
         </div>
       </div>
    </div>
  )
}

export default Teeth;