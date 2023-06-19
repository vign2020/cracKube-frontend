import React from 'react'
import { useState } from 'react'
import Tiles from './Tiles'

export default function () {

  const [tags,Settags]=useState('all')
  const [color,Setcolor]=useState(false)

  const buttonStyle = {
    color:'white',
    
  };
  const inbuttonStyle = {
    color:"#141518",
    backgroundColor: '#FFBB29'
    // backgroundColor: '#FFBB29',
  };
  
  
  return (
    <div>
        <div className="tags-container">
        <button className={tags === 'all' ? 'active' : ''} onClick={() => { Settags('all');}}
        style={tags === 'all' ? inbuttonStyle : buttonStyle}>all</button>

<button
  className={tags === 'technology' ? 'technology active' : 'technology'}
  onClick={() => {
    Settags('technology');
  }}
  style={tags === 'technology' ? inbuttonStyle : buttonStyle}
>
  Technology
</button>
<button
  className={tags === 'education' ? 'education active' : 'education'}
  onClick={() => {
    Settags('education');
  }}
  style={tags === 'education' ? inbuttonStyle : buttonStyle}
>
  Education
</button>
<button
  className={tags === 'lifestyle' ? 'lifestyle active' : 'lifestyle'}
  onClick={() => {
    Settags('lifestyle');
  }}
  style={tags === 'lifestyle' ? inbuttonStyle : buttonStyle}
>
  Lifestyle
</button>
<button
  className={tags === 'healthcare' ? 'healthcare active' : 'healthcare'}
  onClick={() => {
    Settags('healthcare');
  }}
  style={tags === 'healthcare' ? inbuttonStyle : buttonStyle}
>
  Healthcare
</button>
<button
  className={tags === 'sports' ? 'sports active' : 'sports'}
  onClick={() => {
    Settags('sports');
  }}
  style={tags === 'sports' ? inbuttonStyle : buttonStyle}
>
  Sports
</button>
<button
  className={tags === 'food' ? 'food active' : 'food'}
  onClick={() => {
    Settags('food');
  }}
  style={tags === 'food' ? inbuttonStyle : buttonStyle}
>
  Food
</button>
        </div>

        <Tiles state_name={tags} state_color={color}/>
    </div>

  )
}
