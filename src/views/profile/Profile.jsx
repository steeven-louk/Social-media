import React from "react";
import PostCard from "../../components/Post/PostCard";

import "./style.scss";

const Profile = () => {

  return (
    
    <div className="profile">
      <img
        src="./images/cover.png"
        className="profile__cover-img"
        alt="cover"
      />
      <div className="profile__details">
        <div className="profile__details-left">
          <div className="pd-row">
            <img src="./images/profile.png" className="profile-img" alt="" />
            <div className="user-info">
              <h3>Jack Nicholson</h3>
              <p>120 Friends - 20 mutual</p>
              <img src="./images/member-1.png" alt="member" />
              <img src="./images/member-2.png" alt="member" />
              <img src="./images/member-3.png" alt="member" />
              <img src="./images/member-4.png" alt="member" />
              <img src="./images/member-5.png" alt="member" />
            </div>
          </div>
        </div>
        <div className="profile__details-right">
          <button type="button">
            <img src="./images/add-friends.png" alt="friend" /> Friend
          </button>
          <button type="button">
            <img src="./images/message.png" alt="message" /> Message
          </button>
          <br />
          <a href="/">
            <img src="./images/more.png" alt="more" />
          </a>
        </div>
      </div>

      <div className="profile__info">
        <div className="info-col">
          <div className="profile-intro">
            <h3>Intro</h3>
            <p className="intro-text">
              Believe in yourself and you can do unbelievable things.
              <img src="./images/feeling.png" alt="feeling" />
            </p>
            <hr />

            <ul>
              <li>
                <img src="./images/profile-job.png" alt="" /> Director at
                99media Ltd
              </li>
              <li>
                <img src="./images/profile-study.png" alt="" />
                Studied at Amity University
              </li>
              <li>
                <img src="./images/profile-study.png" alt="" />
                Went to DPS Delhi
              </li>
              <li>
                <img src="./images/profile-home.png" alt="" />
                Lives in Bangalore, India
              </li>
              <li>
                <img src="./images/profile-location.png" alt="" />
                From Bangalore, India
              </li>
            </ul>
          </div>

          <div className="profile-intro">
            <div className="title-box">
              <h3>Photos</h3>
              <a href="/">All Photos</a>
            </div>

            <div className="photo-box">
              <div>
                <img src="./images/photo1.png" alt="" />
              </div>
              <div>
                <img src="./images/photo2.png" alt="" />
              </div>
              <div>
                <img src="./images/photo3.png" alt="" />
              </div>
              <div>
                <img src="./images/photo4.png" alt="" />
              </div>
              <div>
                <img src="./images/photo5.png" alt="" />
              </div>
              <div>
                <img src="./images/photo6.png" alt="" />
              </div>
            </div>
          </div>

          <div className="profile-intro">
            <div className="title-box">
              <h3>Friends</h3>
              <a href="/">All Friends</a>
            </div>
            <p>120 (10 mutual)</p>

            <div className="photo-box">
              <div>
                <img src="./images/member-1.png" alt="" />
              </div>
              <div>
                <img src="./images/member-2.png" alt="" />
              </div>
              <div>
                <img src="./images/member-3.png" alt="" />
              </div>
              <div>
                <img src="./images/member-4.png" alt="" />
              </div>
              <div>
                <img src="./images/member-5.png" alt="" />
              </div>
              <div>
                <img src="./images/member-6.png" alt="" />
              </div>
              <div>
                <img src="./images/member-7.png" alt="" />
              </div>
              <div>
                <img src="./images/member-8.png" alt="" />
              </div>
              <div>
                <img src="./images/member-9.png" alt="" />
              </div>
              <div>
                <img src="./images/member-10.png" alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="post-col">
          <div className="write-post-container">
            <div className="user-profile">
              <img src="./images/profile-pic.png" alt="" />
              <div className="user-name">
                <p>John Nicholson</p>
                <small>
                  Public <i className="fas fa-caret-down"></i>{" "}
                </small>
              </div>
            </div>

            <div className="post-input-container">
              <textarea
                rows="3"
                placeholder="What's on your mind, John?"
              ></textarea>
              <div className="add-post-links">
                <a href="/">
                  <img src="./images/live-video.png" alt="video" /> Live Video
                </a>
                <a href="/">
                  <img src="./images/photo.png" alt="video" /> Photo/Video
                </a>
                <a href="/">
                  <img src="./images/feeling.png" alt="video" />{" "}
                  Feeling/Activity
                </a>
              </div>
            </div>
          </div>

          {/* -------------------- */}
          <div className="post__container">
            <PostCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
