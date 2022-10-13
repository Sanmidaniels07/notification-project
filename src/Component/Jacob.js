import React from 'react'
import image from './images/ajacob-thompson.jpg'

const Jacob = () => {
  return (
    <div>
     <div id="myDIV" className="notifi unread">
          <img src={image}/>
          <div className="notif-info">
            <p>
              <strong>Jacob Thompson</strong> has joined your group <strong>Chess Club</strong> 
            </p>
            <p className="time">1 day ago</p>
          </div>
        </div>
    
    </div>
  )
}

export default Jacob