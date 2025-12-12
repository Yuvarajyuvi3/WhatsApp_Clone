import React from 'react'
import Sidebar from './sidebar'

function chat() {
  return (
    <>
      <Sidebar />
      <div className='chat'>
        <div className='nav'>
          <img src="\public\assets\profile logo.png" alt="" />
          <p>Name</p>
          <div className='logo'>
            <i class="bi bi-camera-reels"></i>
            <i class="bi bi-search"></i>
            <i class="bi bi-three-dots-vertical"></i>
          </div>
        </div>
        <div className='chat1'>
          <p className='hai'>Hai</p>
          <p className='hai'>how are you?</p>
          <p className='hai1'>I'm fine </p>
          <p className='hai'>what are you doing?</p>
          <p className='hai1'>I'm in work...</p>
        </div>
        <div className='searchs'>
          <input type="search" placeholder='Message' />
          <img src="public\assets\mic.png" alt="" />
        </div>

      </div>
    </>
  )
}

export default chat