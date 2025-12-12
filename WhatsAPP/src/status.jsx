import React, { useEffect, useState } from 'react'
import Sidebar from './sidebar'

function status() {

    const [status, setStatus] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/status')
            .then((data) => data.json())
            .then((data) => setStatus(data))
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <Sidebar />
            <div className='statuslogo'>
                <div className='status'>
                    <div className='header'>
                        <p>status</p>
                        <div className='more'>
                            <i class="bi bi-plus-circle"></i>
                            <i class="bi bi-three-dots-vertical"></i>
                        </div>
                    </div>
                    <div className='mystatus'>
                        <img src="public\assets\yuva.jpeg" alt="" />
                        <p>My status</p>
                    </div>
                    <div>
                        <div className='top'>
                            <p>Recent</p>
                            <div>
                                {status.map((status) => (
                                    <div className='status1' key={status.id}>
                                        <div className='status2 w-100'>
                                            <img src={status.image} alt="" />
                                            <div>
                                                <p> {status.name}</p>
                                                <p className='time'> {status.time}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='profile2'>
                    <img src="public\assets\tl.webp" alt="" />
                    <p>Share status updates</p>
                    <p>share photos,videos and text that disappear sfter 24 hours.</p>
                </div>
            </div>
        </>
    )
}

export default status