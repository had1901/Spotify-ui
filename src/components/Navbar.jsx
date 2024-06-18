import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router';

function Navbar() {
    const navigate = useNavigate()
  return (
    <>
        <div className='w-full flex justify-between items-center font-semibold'>
            <div className='flex items-center gap-2'>
                <img onClick={() => navigate(-1)}className='w-8 bg-black p-2 roud2 cursor-pointer' src={assets.arrow_left}/>
                <img onClick={() => navigate(1)}className='w-8 bg-black p-2 roud2 cursor-pointer' src={assets.arrow_right}/>
            </div>
            <div className='flex items-center gap-4'>
                <p className='text-gray-400 text-[15px] px-4 py-1 hidden md:block cursor-pointer'>Đăng ký</p>
                <p className='bg-white text-black text-[15px] px-6 py-3 rounded-full hidden md:block cursor-pointer'>Đăng nhập</p>
                <p className='bg-black py-1 px-3 rounded-2xl text-[15px] cursor-pointer'>Tải xuống</p>
                <p className='bg-purple-500 text-black w-7 h-7 rounded-full flex items-center justify-center'>D</p>
            </div>
        </div>
        <div className='flex items-center gap-2 mt-4'>
            <p className=' bg-white text-black px-4 py-1 rounded-2xl'>Tất cả</p>
            <p className=' text-white bg-black  px-4 py-1 rounded-2xl'>Âm nhạc</p>
            <p className=' bg-black text-white  px-4 py-1 rounded-2xl'>Podcasts</p>
        </div>
    </>
  )
}

export default Navbar