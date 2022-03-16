import React from 'react';
import {Link} from 'react-router-dom';
import Teeth from "./teeths.jpg";
import Problem from "./2277671.jpg";
import './Info.css';

function Info() {
  return (
    <div className='Information'>
        <div className="smile">
            <h2>SMILE <br /> SECURE</h2>
            <div className="appointment">
                <a href="#" className='appoint'>For appointment</a>
            </div>
        </div>
        <div className="toot_selected">
            <p> <span className='span_selected'>Tooth selected is/are</span> 
            <a href="#" className='incisor'>INCISOR</a>  CANINE, PRE MOLAR, MOLARS 
            <Link to="/" className='selected_again'>SELECT AGAIN</Link> </p>
        </div>
        <div className="incisors">
            <div className="number">
                <p className='inciso'>Incisors</p>
                <span className='num'>#7,8,9,10,23,25,28</span>
            </div>
        </div>
        <div className="contente">
            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam esse vitae animi est unde quasi distinctio, consequuntur vero quibusdam quis eveniet, facilis nesciunt placeat officia hic consequatur deserunt necessitatibus in provident, magni cupiditate quod.</p>
            <img className='img1' src={Teeth} alt="" srcset="" />
        </div>
        <div className="rules">
            <h3 className='h3'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <div className="rules2">
               <div className="lable">
                    <label>1.</label>
                    <p className='ptag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam perferendis beatae quas?</p>
                </div> 
               <div className="lable">
                    <label>2.</label>
                    <p className='ptag'>consectetur adipisicing elit. Totam perferendis beatae quas?</p>
                </div> 
               <div className="lable">
                    <label>3.</label>
                    <p className='ptag'>reiciendis exercitationem, veniam  Unde vero exercitationem recusandae nihil. Voluptatum, laborum!</p>
                </div> 
               <div className="lable">
                    <label>4.</label>
                    <p className='ptag'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam perferendis beatae quas?</p>
                </div> 
               <div className="lable">
                    <label>5.</label>
                    <p className='ptag'>Quisquam eveniet sit provident laborum ipsam voluptate aliquid quod similique optio molestiae, dolorum odit?</p>
                </div> 
               
            </div>
        </div>
        <div className="problem">
            <h2 className="h2tag">Our case with similar problem</h2>
            <p className='problem_text'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe modi voluptatum iure deserunt debitis, ratione accusantium quisquam eveniet sit provident laborum ipsam voluptate aliquid quod similique optio molestiae, dolorum odit?</p>
        </div>
        <div className="problem_img">
            <img  className='similerimg' src={Problem} alt="" srcset="" />
            <a href="#" className='Know_solution'>Know solution</a>
        </div>
    </div>
  )
}

export default Info