import React from 'react'
import image1 from '../images/wiz.jpg'
import data from '../data/data'
import 'typeface-poppins';

import { FiGrid } from 'react-icons/fi';
import { GrGrid } from 'react-icons/gr';


export default function Tiles(props) {
  const styles = {
    fontFamily: 'Poppins, sans-serif',
    // ...other styles
  };
  
  
return (
<div className="container-tiles-main">
            <div className="container-grids">
                  <FiGrid size={34} color="#757B8C" className='container-grids-fi'/>
                   
                </div>

                <div className="container-tiles">
             

          {data
            .filter((i) => i.tag === props.state_name || props.state_name === 'all')
            .map((item, index) => (
              <div className="card" key={index}>
                <div className="card-image">
                  <img src={item.image} alt="Image" />
                </div>
                <div className="card-content">
                  <div className="card-header">
                    <span className="card-tag">{(item.tag).toUpperCase()}</span>
                    <span className="card-text">{item.time} hours ago</span>
                  </div>
                  <h2 className="card-title" style={styles}>{item.title}</h2>
                  <div className="card-lines">
                    <p>{item.content}</p>
                  </div>
                </div>
                <h4>Read More &nbsp;&nbsp;&nbsp;&nbsp;<span>---></span></h4>
              </div>
              
            ))}
             
        </div>
</div>
 
        
      );


 
      
}



