import React from 'react'
import image1 from '../images/wiz.jpg'
import { IoMdSettings } from 'react-icons/io';
import { FaBell } from 'react-icons/fa';


export default function () {
  return (
    <div>
        <div className="navbar-container">
          <div className="navbar-wrapper">
          <h1>Demo Company</h1>
            <ul className='navitems-container'>
           
                <li>Home</li>
                <li>About</li>
                <li>Work</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>


          </div>
            
            <div className="icons-container">
              
                <IoMdSettings size={24} color='white' className='gear'/>     
                <FaBell size={24} color="white" className='bell' />      
                <img src={image1} height={50} width={50} />
            </div>
         

        </div>
    </div>
  )
}
