import React from 'react'
import Contacts from './contacts'

function search() {
  return (
    <>
      <div className='search'>
        <div className='d-flex justify-content-between'>
          <div className='logo'>WhatsApp</div>
          <div className=' d-flex gap-5 p-4'>
            <div><i className="bi bi-chat-left-quote-fill"></i></div>
            <div><i className="bi bi-three-dots-vertical"></i></div>
          </div>
        </div>

        <div>
          <input className='input d-flex' type="search" placeholder='Search or start a new chat' />
        </div>

        <div className='d-flex gap-3 m-3 '>
          <button className='button'>All</button>
          <button className='button'>Unread</button>
          <button className='button'>Groups</button>
        </div>
      </div>
      <div><Contacts /></div>
    </>
  )
}

export default search