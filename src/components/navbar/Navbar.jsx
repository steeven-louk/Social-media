import React from 'react'
import './style.scss';


const Navbar = () => {
  return (
        <nav className='navbar'>
            <div className="navbar__left">
                <img src="./images/logo.png"  className="navbar__left__logo" alt="logo" />
                <ul>
                    <li><img src="./images/notification.png" alt="" /></li>
                    <li><img src="./images/inbox.png" alt="" /></li>
                    <li><img src="./images/video.png" alt="" /></li>
                </ul>
            </div>
            <div className="navbar__right">
                <div className="navbar__right__search">
                    <img src="./images/search.png" alt="" />
                    <input type="text" placeholder='Search' />
                </div>
                <div className="navbar__right__user online">
                    <img src="./images/profile-pic.png" alt="" />
                </div>
            </div>
        </nav>
  )
}

export default Navbar