import React from 'react';
import { useNavigate } from 'react-router-dom'

function sidebar() {
  const navigate = useNavigate();
  const handalProfile = () => {
    navigate('/profile')
  }
  const handalchat = () => {
    navigate('/')
  }
  const handalstatus = () => {
    navigate('/status')
  }

  return (
    <div className='pad'>
      <div className='d-flex flex-column gap-4 position-fixed'>
        <div onClick={handalchat}><i className="bi bi-chat-left-text-fill"></i></div>
        <div onClick={handalstatus}><i className="bi bi-bullseye"></i></div>
        <div><i className="bi bi-chat-quote-fill"></i></div>
        <div><i className="bi bi-people-fill"></i></div>
        <div><i className="bi bi-meta"></i></div>
      </div>
      <div className='position-fixed bottom-0 d-flex flex-column gap-4'>
        <div><i className="bi bi-gear"></i></div>
        <div onClick={handalProfile}><i className="bi bi-person-circle"></i></div>
      </div>
    </div>
  )
}

export default sidebar