import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Contacts() {

    const [chats, setChats] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3000/profile')
            .then((data) => data.json())
            .then((data) => setChats(data))
            .catch(err => console.log(err))
    }, []);


    const navigate = useNavigate();
    const handalchat = () => {
        navigate('/chat')
    }

    return (
        <div>
            <div>

                {chats.map((profile) => (
                    <div className='name' key={profile.id}>
                        <div onClick={handalchat} className='name1 w-100'>
                            <img className='image' src={profile.image} alt="" />
                            <div className='name2'>
                                <p> {profile.name}</p>
                                <p className='date'> {profile.date}</p>
                            </div>
                        </div>
                    </div>

                ))}
            </div>
        </div>
    );
}

export default Contacts;
