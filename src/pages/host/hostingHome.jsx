import React, { useState } from 'react'
import { HostNavBar } from '../../components/hostNavbar'
import { Footer } from '../../components/footer'

export const HostHome = () => {
    const data={
        CheckingOut:[],CurrentlyHosting:[],ArrivingSoon:[]
    }
    const [showData,setShowData]=useState();
    const checkingOut=()=>{
        if(data.CheckingOut.length===0){
            setShowData("You don’t have any guests checking out today or tomorrow.")
        }else{
            setShowData(data.CheckingOut)
        }
    }
    const currentHostings=()=>{
        if(data.CurrentlyHosting.length===0){
            setShowData("You don’t have any guests staying with you right now.")
        }else{
            
        }
    }
  return (
<>
<HostNavBar/>
<div className='w-full p-20 '>
<div className='w-full h-screen'>
    <div className='flex justify-between items-center h-24'>
        <h1 className='font-bold text-2xl'> Welcome , Muhammed !</h1>
        <button className='w-[150px] h-10 border rounded hover:bg-slate-100 font-semibold text-sm'> Complete your listing</button>
    </div>
    <div className='flex h-32 justify-between items-center'> <h2 className='font-semibold text-xl'>Your reservations</h2> <span className='font-semibold text-sm underline '> All reservations (0)</span></div>
    <div className='flex justify-start items-center'>
        <button className='border rounded-full w-32 h-8 hover:bg-slate-100 text-xs font-semibold mr-2' onClick={checkingOut}>Checking out (0)</button>
        <button className='border rounded-full w-32 h-8 hover:bg-slate-100 text-xs font-semibold mr-2' onClick={currentHostings}>Currently hosting (0)</button>
        <button className='border rounded-full w-32 h-8 hover:bg-slate-100 text-xs font-semibold mr-2'>Arriving soon (0)</button>
        <button className='border rounded-full w-32 h-8 hover:bg-slate-100 text-xs font-semibold mr-2'>Upcoming</button>
    </div>
    <div className=' w-full h-[300px] bg-slate-100 rounded-md mt-5'>
{showData}
    </div>
</div>
</div>
<Footer/>
</>
  )
}
