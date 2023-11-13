import React from 'react'
import logo from '../assets/pngwing.com.png.png'
import bell from '../assets/bell-fill.svg'
export const HostNavBar = () => {
  return (
    <div className='w-full  h-[80px] flex border-b border-b-slate-300'>
<div className='w-1/3 h-full flex justify-start items-center'> <img src={logo} alt="logo" className='pl-5 h-10'/></div>
<div className='w-1/3 h-ful flex items-center'> 
<button className='w-1/5 h-1/2 rounded-full hover:bg-slate-100 font-semibold text-sm'>Today</button>
<button className='w-1/5 h-1/2 rounded-full hover:bg-slate-100 font-semibold text-sm'>Inbox</button>
<button className='w-1/5 h-1/2 rounded-full hover:bg-slate-100 font-semibold text-sm'>Calender</button>
<button className='w-1/5 h-1/2 rounded-full hover:bg-slate-100 font-semibold text-sm'>Insights</button>
<button className='w-1/5 h-1/2 rounded-full hover:bg-slate-100 font-semibold text-sm'>Menu </button>
</div>
<div className='w-1/3 h-ful flex justify-end items-center pr-5'>
  <button className='w-[40px] h-[40px] ml-2 rounded-full border flex justify-center items-center'><img src={bell} alt="" /></button>
  <button className='w-[40px] h-[40px] ml-2 rounded-full border flex items-center justify-center bg-black text-sm font-bold text-white'>M</button>
</div>
    </div>
  )
}
