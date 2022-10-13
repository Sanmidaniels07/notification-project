import React from 'react'
import image from './images/avatar-nathan-peterson.webp'

const Nath = () => {
  return (
    <div>
    
    <div className="notifi">
          <img src={image}/>
          <div className="notif-info">
            <p>
              <strong>Nathan Peterson</strong> reacted to your recent post <b>5 end-game strategies to increase your win
                rate</b>
            </p>
            <p className="time">2 weeks ago</p>
          </div>
        </div>
    </div>
  )
}

export default Nath