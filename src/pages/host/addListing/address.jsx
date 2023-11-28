import React from 'react'

const Address = () => {
  return (
    <div className='pt-5 h-full'>
        <div><h1 className='font-bold text-2xl'>Confirm your address </h1></div>
        <p className='font-light text-sm mt-3'>Your address is only shared with guests after they've made a reservation .</p>
        <div className='h-3/4 rounded-md overflow-hidden border'>
            <div className='h-[14.3%] border-collapse border'> <input className='w-full h-full px-4 text-sm' type="text" placeholder='Plot,house,etc. (if applicable)' /> </div>
            <div className='h-[14.3%] border-collapse border'> <input className='w-full h-full px-4 text-sm' type="text" placeholder='Street address' /> </div>
            <div className='h-[14.3%] border-collapse border'> <input className='w-full h-full px-4 text-sm' type="text" placeholder='Nearby landmark (if applicable)' /> </div>
            <div className='h-[14.3%] border-collapse border'> <input className='w-full h-full px-4 text-sm' type="text" placeholder='District/localty (if applicable)' /> </div>
            <div className='h-[14.3%] border-collapse border'> <input className='w-full h-full px-4 text-sm' type="text" placeholder='city/town' /> </div>
            <div className='h-[14.3%] border-collapse border'> <input className='w-full h-full px-4 text-sm' type="text" placeholder='State/Union territory' /> </div>
            <div className='h-[14.3%] border-collapse border'> <input className='w-full h-full px-4 text-sm' type="text" placeholder='PIN code' /> </div>

        </div>
    </div>
  )
}

export default Address