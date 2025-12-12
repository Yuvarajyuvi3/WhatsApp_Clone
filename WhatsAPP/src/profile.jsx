import React from 'react'
import Sidebar from './sidebar'


function profile() {


  return (
    <>
      <Sidebar />
      <div className='profile'>
        <div className='profile1'>
          <h2>Profile</h2>
          <img src="public\assets\yuva.jpeg" alt="" />
          <div className='names'>
            <div className='names1'>
              <p>Name</p>
              <h5>Yuva❤️<i class="bi bi-pencil"></i></h5>
              <p>About</p>
              <h5>Hey there! I am using WhatsApp.<i class="bi bi-pencil"></i></h5>
              <p>Phone</p>
              <h5><i class="bi bi-telephone-fill"></i>+91 7708393484 <i class="bi bi-copy"></i></h5>
            </div>
          </div>
        </div>
        <div className='profile2'>
          <img src="public\assets\user-account.png" alt="" />
          <h1>Profile</h1>
        </div>
      </div>
    </>
  )
}

export default profile 