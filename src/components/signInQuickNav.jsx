import React from 'react'
import { useNavigate } from 'react-router-dom'

const SignInQuickNav = ({toggle,setToggle}) => {
    const navigate = useNavigate()
  return (
    <div
    className={`${
      !toggle
        ? `hidden`
        : `bg-white w-[200px] h-[300px] rounded-md right-5 top-16 absolute overflow-hidden z-10`
    }`}
    onMouseLeave={() => setToggle(!toggle)}
   >
    <div className='w-full h-[14.2%] hover:bg-slate-200 pl-2 text-xs font-semibold flex items-center'>Messages</div>
    <div className='w-full h-[14.2%] hover:bg-slate-200 pl-2 text-xs font-semibold flex items-center'>Trips</div>
    <div className='w-full h-[14.2%] hover:bg-slate-200 pl-2 text-xs font-semibold flex items-center'onClick={()=>navigate('/wishlists')}>Wishlists</div>
    <div className='w-full h-[14.2%] hover:bg-slate-200 pl-2 text-xs font-semibold flex items-center'>Manage listings</div>
    <div className='w-full h-[14.2%] hover:bg-slate-200 pl-2 text-xs font-semibold flex items-center'>Account</div>
    <div className='w-full h-[14.2%] hover:bg-slate-200 pl-2 text-xs font-semibold flex items-center'>Help Center</div>
    <div className='w-full h-[14.2%] hover:bg-slate-200 pl-2 text-xs font-semibold flex items-center'>Log out</div>
    </div>
  )
}

export default SignInQuickNav