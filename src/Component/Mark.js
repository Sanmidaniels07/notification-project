import React from 'react'
import image from './images/mark.jpg'


const Mark = () => {
  return (
    <div>
    
        <div id="myDIV" className="notifi unread">
          <img src={image} alt=''></img>
          <div className="notif-info">
            <p>
              <strong>Mark Webber</strong> reacted to your recent post <b>My first tournament today!</b>
            </p>
            <p className="time">1m ago</p>
          </div>
        </div>
    
    
    </div>
  )
}

export default Mark