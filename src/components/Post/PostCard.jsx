import React from 'react'

import './style.scss';

import {Link} from 'react-router-dom'

const PostCard = () => {
  return (
    <>
        <div className="card">
      <div className="card__user-profile">
        <Link to="/profile">
            <img src="./images/profile-pic.png" alt="" />
        </Link>
        <div className="card__user-name">
          <p>John Nicholson</p>
          <span>June 24 2021, 13:40 pm</span>
        </div>
      </div>
      <div className="card__body">
        <p className='card__body__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          excepturi officia quasi quam exercitationem cum dignissimos dolore?
          Dicta ullam libero omnis. Dolorem fugiat nam sapiente!
        </p>
        <img src="./images/feed-image-1.png" className='card__body__post-media' alt="" />
        <div className="post-row">
            <div className="activity-icons">
                <div><img src="./images/like-blue.png" width="18" alt="" /> 120</div>
                <div><img src="./images/comments.png" width="18" alt="" /> 45</div>
                <div><img src="./images/share.png" width="18" alt="" /> 20</div>
            </div>
            <div className="post-profile-icon">
                <img src="./images/profile-pic.png" alt="" />
                <i className="fas fa-caret-down"></i>
            </div>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card__user-profile">
        <img src="./images/profile-pic.png" alt="" />
        <div className="card__user-name">
          <p>John Nicholson</p>
          <span>June 24 2021, 13:40 pm</span>
        </div>
      </div>
      <div className="card__body">
        <p className='card__body__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          excepturi officia quasi quam exercitationem cum dignissimos dolore?
          Dicta ullam libero omnis. Dolorem fugiat nam sapiente!
        </p>
        <img src="./images/feed-image-1.png" className='card__body__post-media' alt="" />
        <div className="post-row">
            <div className="activity-icons">
                <div><img src="./images/like-blue.png" width="18" alt="" /> 120</div>
                <div><img src="./images/comments.png" width="18" alt="" /> 45</div>
                <div><img src="./images/share.png" width="18" alt="" /> 20</div>
            </div>
            <div className="post-profile-icon">
                <img src="./images/profile-pic.png" alt="" />
                <i className="fas fa-caret-down"></i>
            </div>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card__user-profile">
        <img src="./images/profile-pic.png" alt="" />
        <div className="card__user-name">
          <p>John Nicholson</p>
          <span>June 24 2021, 13:40 pm</span>
        </div>
      </div>
      <div className="card__body">
        <p className='card__body__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          excepturi officia quasi quam exercitationem cum dignissimos dolore?
          Dicta ullam libero omnis. Dolorem fugiat nam sapiente!
        </p>
        <img src="./images/feed-image-2.png" className='card__body__post-media' alt="" />
        <div className="post-row">
            <div className="activity-icons">
                <div><img src="./images/like-blue.png" width="18" alt="" /> 120</div>
                <div><img src="./images/comments.png" width="18" alt="" /> 45</div>
                <div><img src="./images/share.png" width="18" alt="" /> 20</div>
            </div>
            <div className="post-profile-icon">
                <img src="./images/profile-pic.png" alt="" />
                <i className="fas fa-caret-down"></i>
            </div>
        </div>
      </div>
    </div>

    <div className="card">
      <div className="card__user-profile">
        <img src="./images/profile-pic.png" alt="" />
        <div className="card__user-name">
          <p>John Nicholson</p>
          <span>June 24 2021, 13:40 pm</span>
        </div>
      </div>
      <div className="card__body">
        <p className='card__body__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          excepturi officia quasi quam exercitationem cum dignissimos dolore?
          Dicta ullam libero omnis. Dolorem fugiat nam sapiente!
        </p>
        <img src="./images/feed-image-3.png" className='card__body__post-media' alt="" />
        <div className="post-row">
            <div className="activity-icons">
                <div><img src="./images/like.png" width="18" alt="" /> 120</div>
                <div><img src="./images/comments.png" width="18" alt="" /> 45</div>
                <div><img src="./images/share.png" width="18" alt="" /> 20</div>
            </div>
            <div className="post-profile-icon">
                <img src="./images/profile-pic.png" alt="" />
                <i className="fas fa-caret-down"></i>
            </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card__user-profile">
        <img src="./images/profile-pic.png" alt="" />
        <div className="card__user-name">
          <p>John Nicholson</p>
          <span>June 24 2021, 13:40 pm</span>
        </div>
      </div>
      <div className="card__body">
        <img src="./images/feed-image-4.png" className='card__body__post-media' alt="" />
        <div className="post-row">
            <div className="activity-icons">
                <div><img src="./images/like-blue.png" width="18" alt="" /> 120</div>
                <div><img src="./images/comments.png" width="18" alt="" /> 45</div>
                <div><img src="./images/share.png" width="18" alt="" /> 20</div>
            </div>
            <div className="post-profile-icon">
                <img src="./images/profile-pic.png" alt="" />
                <i className="fas fa-caret-down"></i>
            </div>
        </div>
      </div>
    </div>
    <div className="card">
      <div className="card__user-profile">
        <img src="./images/profile-pic.png" alt="" />
        <div className="card__user-name">
          <p>John Nicholson</p>
          <span>June 24 2021, 13:40 pm</span>
        </div>
      </div>
      <div className="card__body">
        <p className='card__body__text'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
        </p>
        <img src="./images/feed-image-5.png" className='card__body__post-media' alt="" />
        <div className="post-row">
            <div className="activity-icons">
                <div><img src="./images/like-blue.png" width="18" alt="" /> 120</div>
                <div><img src="./images/comments.png" width="18" alt="" /> 45</div>
                <div><img src="./images/share.png" width="18" alt="" /> 20</div>
            </div>
            <div className="post-profile-icon">
                <img src="./images/profile-pic.png" alt="" />
                <i className="fas fa-caret-down"></i>
            </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default PostCard