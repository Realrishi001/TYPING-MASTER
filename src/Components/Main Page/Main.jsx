import React from 'react'
import './Main.css';
import github from '../../Assests/github.png'
import linkedin from '../../Assests/linkedin.png'
import resume from '../../Assests/resume.png'
import image1 from '../../Assests/typingmasterfrontpage.png'
import image2 from'../../Assests/CodeImage.png'
import { NavLink } from 'react-router-dom';

function Main() {
  return (
    <>

    <div className="Home-page">

    <div className='Container1'>
    <h1>Master the <div className='typing-ani'><span>Art of Typing</span></div> – Boost Your Speed & Accuracy Every Day!</h1>  
    <p>Consistent practice is the key to improving your typing skills. Track your progress, challenge yourself, and type faster with precision. The more you practice, the better you get!</p>
    <div className='Container-btn'>
      <NavLink to='/typing'><button className='b11'>Start Practice</button></NavLink>
      <NavLink to='/'><button className='b22'>Read More</button></NavLink>
    </div>
    </div>
    </div>

    <div className='UImageSection'>
    <div className='ImageSection'>
      <img src={image1} width='100%' height='100%' style={{borderRadius: '8px'}} />
    </div>
    </div>

    <div className='Know-section'>
        <div className='sub-section'>
        <h2>Most people <span>Struggle</span> to improve their typing speed.</h2>
        <p>Many typing practice tools are either too basic and ineffective or too complex and discouraging. Without proper training, users fail to build muscle memory and accuracy, slowing their progress.</p>
        </div>
    </div>

    <div className='Features'>
      <h2>Our Features and Additions</h2>
      <div className='feature-box'>
        <div className='f-box1'>
        <div className='box1'><h2>box1</h2></div>
        <div className='box2'><h2>box2</h2></div>
        </div>
        <div className='f-box2'>
        <div className='box3'><h2>box3</h2></div>
        <div className='box4'><h2>box4</h2></div></div>
      </div>
    </div>

    <div className='OpenSource'>
      <div className='ImgS'>
        <div className='iamg'>
        <img src={image2} alt="" width='700px'  />
        </div>
      </div>
      <div className='info'>
        <h2>We are Open Source Soon</h2>
        <ul>
          <li>This project is shared to help others learn and improve their skills. It should not be used for commercial purposes, resold, or claimed as your own work.</li>
          <li>If you modify or share this code, you must give proper credit to the original author (Rishi). Do not remove or alter any existing credits in the project.</li>
          <li>Do not re-upload this project to repositories, marketplaces, or websites without significant modifications or improvements. If you share it, ensure it's linked to the original repository.</li>

        </ul>
      </div>
    </div>

    <div className='Footer'>
      <h4>Typing Master</h4>
      <div>
      <a href='https://www.linkedin.com/in/rishi-urankar-5760202b1/'><img src={linkedin}/></a>
      <a href='https://github.com/Realrishi001'><img src={github}/></a>
      <a href='#' download={resume} ><img src={resume}/></a>
      </div>
      <p>© 2025 TYPING MASTER. All Rights Reserved. Unauthorized reproduction or distribution is prohibited.</p>
    </div>

    </>
  );
}

export default Main;
