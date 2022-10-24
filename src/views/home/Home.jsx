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
                homr
            </div>
            <SidebarRight />
        </div>
    </>
  )
}

export default Home