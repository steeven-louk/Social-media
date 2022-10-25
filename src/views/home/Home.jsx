import React from 'react'
import SidebarLeft from '../../components/sidebarLeft/SidebarLeft'
import { SidebarRight } from '../../components/sidebarRight/SidebarRight'

import './style.scss';

const Home = () => {
  return (
    <>
        <div className="home">
            <SidebarLeft/>
            <div className="container">
                
                <div className="story-gallery">
                  <div className="story">
                    <img src="./images/upload.png" alt="upload" className='upload' />
                    <img src="./images/status-1.png" alt="" className='profil' />
                    <p>Post Story</p>
                  </div>

                  <div className="story profil">
                    <img src="./images/member-1.png" alt="member-1" className='upload' />
                    <img src="./images/status-2.png" alt="" className='profil' />
                    <p>Post Story</p>
                  </div>
                  <div className="story profil">
                    <img src="./images/member-2.png" alt="member-1" className='upload' />
                    <img src="./images/status-3.png" alt="" className='profil' />
                    <p>Post Story</p>
                  </div>
                  <div className="story profil">
                    <img src="./images/member-3.png" alt="member-1" className='upload' />
                    <img src="./images/status-4.png" alt="" className='profil' />
                    <p>Post Story</p>
                  </div>
                  <div className="story profil">
                    <img src="./images/member-4.png" alt="member-1" className='upload' />
                    <img src="./images/status-5.png" alt="" className='profil' />
                    <p>Post Story</p>
                  </div>
                </div>

            </div>
            <SidebarRight />
        </div>
    </>
  )
}

export default Home