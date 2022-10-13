import React from 'react'
import image from './images/avatar-rizky-hasanuddin.webp'

const Rizky = () => {
  return (
    <div>
    
    <div className="notifi">
          <img src={image}/>
          <div class="notif-info">
            <p className='riz'>
              <strong>Rizky Hasanuddin</strong> sent you a private message
            </p>
            <p className="time">5 days ago</p>
            
            <div className="notif-message">
              <p className='rizky'>Hello, thanks for setting up the Chess Club. I've been a member for a few weeks <br></br>now and
                I'm already having lots of fun and improving<br/> my game.</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Rizky