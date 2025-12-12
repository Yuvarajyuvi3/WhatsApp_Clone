import React from 'react'
import Sidebar from './sidebar'
import Search from './search'
import Chats from './logo'


function App() {
  return (
    <div className='d-flex vh-100'>
      <div className="w-15"><Sidebar /></div>
      <div className="w-30"><Search /></div>
      <div className='w-55'><Chats /></div>
    </div>

  )
}

export default App





//npx json-server --watch data/db.json --port 3000 --static ./data
