import React from 'react'
import image from './images/avatar-kimberly-smith.webp'
import Image from './images/image-chess.webp'

const Kim = () => {
  return (
    <div>
    
    <div className="notifi space-between">
          <div className="notif-info flex-row">
            <img src={image}/>
            <div>
              <p>
                <strong>Kimberly Smith</strong> commented on your picture
              </p>
              <p className="time">1 week ago</p>
            </div>
          </div>
          <img src={Image}/>
        </div>
    </div>
  )
}

export default Kim