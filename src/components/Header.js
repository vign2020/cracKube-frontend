import React from 'react'
import 'typeface-poppins';
import { FaSearch } from 'react-icons/fa';
import { useState } from 'react';

export default function () {

  const styles = {
    fontFamily: 'Poppins, sans-serif',
    // ...other styles
  };

  const [isEmpty, setIsEmpty] = useState(true);

  const handleInputChange = (e) => {
    if (e.target.value === '') {
      setIsEmpty(true);
    } else {
      setIsEmpty(false);
    }
  };


  return (
    <div>
        <div className="heading-container">
        
            <h1 style={styles}>We tackle interesting topics every day</h1>
            <div className="search-bar-container">
            <input type="text" className={`search-input ${isEmpty ? 'empty' : ''}`}
            placeholder="       Find Courses"
            onChange={handleInputChange} />
          
            </div>
        </div>


    </div>
  )
}
