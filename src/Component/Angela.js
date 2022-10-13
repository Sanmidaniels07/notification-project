import React from 'react'
import image from './images/angela.jpg'

const Angela = () => {
  return (
    <div>
    
    <div id="myDIV" className="notifi unread">
          <img src={image}/>
          <div class="notif-info">
            <p>
              <strong>Angela Gray</strong> followed you
            </p>
            <p className="time">5m ago</p>
          </div>
        </div>
    </div>
  )
}

export default Angela