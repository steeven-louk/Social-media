import React, { useState } from 'react'
import PostCard from '../../components/Post/PostCard';
import SidebarLeft from '../../components/sidebarLeft/SidebarLeft'
import { SidebarRight } from '../../components/sidebarRight/SidebarRight'

import {Link} from 'react-router-dom';

import './style.scss';

const Home = () => {

   const getPost = JSON.parse(localStorage.getItem('post'))
  const [post, setPost] = useState(getPost);
  const [selectFile, setSelectFile] = useState();

  const [input, setInput] = useState('');
  const [error, setError] = useState('');

  console.log(post);
  console.log(selectFile);

  const handleChangeImg =(e)=>{
    let file = e.target.files[0];
    setSelectFile(file)
    const reader = new FileReader();

    reader.readAsDataURL(file.result);
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    let id = 0
    let getId = id ++;

    if(input.length <= 0){
      setError('Veuillez saisir un message');
    }else{
     setPost([...post, {
        text:input,
        id: getId,
        image:''
       }]);
      
      localStorage.setItem('post', JSON.stringify(post)) 
      ;
  setInput('');
    }

  }



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
                  <form  onSubmit={handleSubmit} method="POST">

                  <div className="user-profile">
                    <Link to="/profile">
                      <img src="./images/profile-pic.png" alt="" />
                    </Link>
                    <div className="user-name">
                      <p>John Nicholson</p>
                      <small>Public <i className="fas fa-caret-down"></i> </small>
                    </div>
                  </div>

                  <div className="post-input-container">
                    <textarea rows="3" placeholder="What's on your mind, John?" value={input} onChange={(e)=> setInput(e.target.value.toLowerCase())}></textarea>
                      {error && error}
                    <div className="add-post-links">
                      <a href="/"><img src="./images/live-video.png" alt="video" /> Live Video</a>
                      <a href="/"><img src="./images/photo.png" alt="video" /> Photo/Video</a>
                      <input type="file" onChange={handleChangeImg} id="" />
                      <a href="/"><img src="./images/feeling.png" alt="video" /> Feeling/Activity</a>
                    </div>
                    <input type='submit' value='submit'/>
                  </div>

                  </form>
                </div>

                <div className="post__container">
                  {post?.map(item =>(
                    <PostCard post={item}/>))}
                  
                  
                </div>

                <button className='loadMore'>Load More</button>
            </div>
            <SidebarRight />
        </div>
    </>
  )
}

export default Home