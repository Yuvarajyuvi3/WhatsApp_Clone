import React from 'react'

function logo() {
  return (
    <>
      <div className='chats position-fixed'>
        <img src="public\assets\chats image.png" alt="" />
        <h1>Download WhatsApp for Windows</h1>
        <p>Make call, share your screen and get a faster experience when you download the Windows app.</p>
        <button onClick={() => window.open("https://www.whatsapp.com/download")} className='bttn'>Download</button>
      </div>
    </>
  )
}

export default logo