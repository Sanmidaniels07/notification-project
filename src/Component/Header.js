import React from 'react'

const Header = () => {
  return (
    <div>
   
 <div role="notification" className="notification-section-card">
 <header>
  <div className="header-notifications">
    <h3>Notifications</h3>
    <button className='three'></button>
    
    <span id="badge-count">3</span>
  </div>
  <button onClick="markRead()"> Mark all as read</button> 
  </header>
</div>
 
    </div>
  )
}

export default Header