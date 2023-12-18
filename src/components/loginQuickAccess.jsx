import React from 'react'

function LoginQuickAccess({toggle,setToggle,signIn,setSignIn,signUp,setSignUp,handleSignUp,handleBackground}) {

  return (
    
    <div
    className={`${
      !toggle
        ? `hidden`
        : `bg-white w-[200px] h-[200px] rounded-md right-5 top-16 absolute overflow-hidden `
    }`}
    onMouseLeave={() => setToggle(!toggle)}
   >
    <div className="flex w-full h-1/2 flex-col border-b">
      <div
        className="text-sm h-1/2  hover:bg-slate-200 w-full hover:cursor-pointer font-bold pl-3 flex items-center"
        onClick={() => setSignIn(!signIn)}
      >
        <span> Login</span>
      </div>
      <div
        className="text-sm h-1/2  hover:bg-slate-200 w-full hover:cursor-pointer font-bold pl-3 flex items-center"
        onClick={handleSignUp}
      >
        <span> Sign Up</span>
      </div>
    </div>
    <div className="flex w-full h-1/2 flex-col ">
      <div
        className="text-sm h-1/2  hover:bg-slate-200 w-full hover:cursor-pointer font-bold pl-3 flex items-center"
        onClick={() => setToggle(!toggle)}
      >
        <span> Airbnb your home</span>
      </div>
      <div
        className="text-sm h-1/2  hover:bg-slate-200 w-full hover:cursor-pointer font-bold pl-3 flex items-center"
        onClick={() => setToggle(!toggle)}
      >
        <span> Help Center </span>
      </div>
    </div>
  </div>
  )
}

export default LoginQuickAccess