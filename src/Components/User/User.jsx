import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Lottie from 'lottie-react';
import animation from '../../../public/animation/Animation - 1723806227222.json';
import {users} from '../Context/Context';

const User = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const { user, setUser } = useContext(users);

    useEffect(() => {
        const getUser = async () => {
            const res = await fetch(`https://reqres.in/api/users/${id}`);
            const data = await res.json();
            setUser(data.data);
            setLoading(false)
        }
        getUser();
    }, []);

    return (
        <>
            {loading && (
                <div className='absolute left-0 top-0 z-[1001] w-full h-full bg-[#000000f5] flex items-center justify-center'>
                    <Lottie className='w-[500px]' animationData={animation} loop={true} />
                </div>
            )}
            <div className='pt-[200px] container flex flex-col gap-10 items-center justify-center'>
                <div className="shadow-md p-10 w-[800px] rounded-md flex flex-col justify-center items-center gap-5">
                    <img className='rounded-full' src={user.avatar} alt="Avatar" />
                    <h1 className='text-[#2b71b4] text-[50px] font-bold'>{user.first_name} {user.last_name}</h1>
                    <span>{user.email}</span>
                </div>
                <Link to={'/'}>
                    <button className='bg-[#2b71b4] rounded-md py-2 px-4 text-white border border-[#2b71b4] hover:bg-transparent transition-all duration-300 hover:text-[#2b71b4]'>Go To Home</button>
                </Link>
            </div>
        </>

    )
}

export default User