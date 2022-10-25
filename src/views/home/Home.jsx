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

                <div className="write-post-container">
                  <div className="user-profile">
                    <img src="./images/profile-pic.png" alt="" />
                    <div className="user-name">
                      <p>John Nicholson</p>
                      <small>Public <i className="fas fa-caret-down"></i> </small>
                    </div>
                  </div>

                  <div className="post-input-container">
                    <textarea rows="3" placeholder="What's on your mind, John?"></textarea>
                    <div className="add-post-links">
                      <a href="/"><img src="./images/live-video.png" alt="video" /> Live Video</a>
                      <a href="/"><img src="./images/photo.png" alt="video" /> Photo/Video</a>
                      <a href="/"><img src="./images/feeling.png" alt="video" /> Feeling/Activity</a>
                    </div>
                  </div>
                </div>

            </div>
            <SidebarRight />
        </div>
    </>
  )
}

export default Home