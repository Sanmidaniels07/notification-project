import React from 'react'
import image from './images/anna-kim.jpg'

const Anna = () => {
  return (
    <div>
    <div className="notifi">
          <img src={image}/>
          <div className="notif-info">
            <p>
              <strong>Anna Kim</strong> left the group <strong>Chess Club</strong>
            </p>
            <p className="time">2 weeks ago</p>
          </div>
        </div>

    
    </div>
  )
}

export default Anna