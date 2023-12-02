import React, { useState } from "react";
import logo from "../assets/pngegg 1.png";
import search from "../assets/49-Search.svg";
import globe from "../assets/Vector 1.svg";
import tLines from "../assets/Vector (1).svg";
import { SignUp } from "../pages/login&signup/SignUp";
import SignIn from "../pages/login&signup/signIn";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";
import { setState } from "../redux/slices";
export const Navbar = () => {
  const { property } = useSelector((data) => data.data);
  const {state} = useSelector((data)=>data.data)
  const dispatch =useDispatch()
  console.log(property);
  console.log(state)
  const [toggle, setToggle] = useState(false);
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);
  // const [isBack,setIsBack]=useState(false)
  const handleSignUp = () => {
    // setToggle(!toggle);
    setSignUp(!signUp);
  };
  const handleBackground = () => {
    if (signUp) {
      setSignUp(!signUp);
    } else {
      setSignIn(!signIn);
    }
  };
  if (signIn || signUp) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
  return (
    <div className="w-full h-[80px] flex border-b border-b-slate-300">
      <div className="flex-1 flex items-center ">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[104px] h-[31px] ml-10 hover:cursor-pointer"
          />
        </Link>
      </div>
      <div className="flex-1 flex justify-center items-center ">
        <div className="w-[360px] h-[50px] rounded-[25px] border-solid border-black border-[.5px] border-opacity-20 flex items-center justify-around shadow-lg">
          <input
            className="h-full ml-6 w-3/4 border-0 outline-none"
            placeholder="Anywhere | Any week | Add guests"
          />
          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[#FF385C]">
            <img src={search} alt="search" />
          </div>
        </div>
      </div>
      <div className="flex-1  flex items-center justify-end ">
        <Link to={"/host"}>
          <button className="w-[150px] h-[35px] font-normal ">
            Switch to hosting
          </button>
        </Link>
        <button className="w-[30px] h-[30px] rounded-full">
          <img src={globe} alt="language"  onClick={()=>dispatch(setState(true))}/>
        </button>
        <div
          className=" w-[85px] h-[40px]  rounded-[45px] mr-5 border-solid border-[.5px] border-slate-400 flex items-center justify-around relative hover:shadow-2xl cursor-pointer"
          onClick={() => setToggle(!toggle)}
        >
          <img src={tLines} alt="3liens" />{" "}
          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[#000000] text-white ">
            M
            <div className="w-[15px] h-[15px] rounded-full absolute bg-[#FF385C] top-0 right-0 flex justify-center items-center border ">
              <p className="text-xs">3</p>
            </div>
          </div>
        </div>
        <div
          className={`${
            !toggle
              ? `hidden`
              : `bg-white w-[200px] h-[200px] rounded-md right-5 top-16 absolute overflow-hidden`
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
              <span > Help Center </span>
            </div>
          </div>
        </div>
        <div
          className={`${
            signUp || signIn
              ? "absolute top-0 bottom-0 right-0 left-0 m-auto bg-slate-600 opacity-40 z-10"
              : "hidden"
          }`}
          onClick={handleBackground}
        ></div>
        <div
          className={`${
            signUp
              ? "absolute top-0 bottom-0 left-0 right-0 m-auto w-1/3 h-3/4 bg-white z-20 rounded-md"
              : "hidden"
          }`}
        >
          <SignUp state={setSignUp} />
        </div>
        <div
          className={`${
            signIn
              ? "absolute top-0 bottom-0 left-0 right-0 m-auto w-1/3 h-3/4 bg-white z-20 rounded-md flex justify-center items-center"
              : "hidden"
          }`}
        >
          <SignIn signIn={SignIn} setSignIn={setSignIn} />
        </div>
      </div>
      <div className="signIN">
        <ToastContainer
          position="top-center"
          autoClose={2000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      </div>
    </div>
  );
};
