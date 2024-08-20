import React from 'react';
import SwiperCom from './Swiper'
import Dashboard from './Dashboard';

const Landing = () => {

    return (
        <>
            <SwiperCom />
            <div className="container py-[50px]">
                <h1 className='text-center text-[#2b71b4] text-[40px] font-bold'>All Users</h1>
                <div className="flex items-center justify-between gap-5 mt-[50px]">
                    <Dashboard />
                </div>
            </div>
            <div className="">
                <div className="container flex items-center justify-center bg-[#f6f6f6] p-5">
                    <span className='text-[#2b71b4] capitalize'>All rights reserved to osama saif</span>
                </div>
            </div>
        </>
    )
}

export default Landing