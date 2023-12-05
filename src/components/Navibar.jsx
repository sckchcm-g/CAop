import React from 'react'
import './Navibar.css'
import DarkModeButton from './Darkmodebtn'

const navbar = () => {
  return (
    <div className='questionarea'>
      <div>
        <h1>Kalvium</h1>
        {/* <img src="./images/arrow.png" alt="" /> */}
      </div>
      <div>
        <DarkModeButton />
      </div>

    </div>
  )
}

export default navbar
