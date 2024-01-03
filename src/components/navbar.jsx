import React, { useContext, useState } from "react";
import logo from "../assets/pngegg 1.png";
import searchLogo from "../assets/49-Search.svg";
import globe from "../assets/Vector 1.svg";
import tLines from "../assets/Vector (1).svg";
import { SignUp } from "../pages/login&signup/SignUp";
import SignIn from "../pages/login&signup/signIn";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useDispatch, useSelector } from "react-redux";

import LoginQuickAccess from "./loginQuickAccess";
import SignInQuickNav from "./signInQuickNav";
import { myContext } from "../App";
export const Navbar = ({search}) => {
  const { authToken } = useSelector((data) => data.auth);

  const { signUp, setSignUp, signIn, setSignIn } = useContext(myContext);

  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const handleSignUp = () => {
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
    <div className="w-full h-[80px] flex border-b border-b-slate-300 sticky top-0 z-30 bg-white">
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
        <div className={`"w-[360px] h-[50px] rounded-[25px] border-solid border-black border-[.5px] border-opacity-20 flex items-center justify-around shadow-lg " ${!search?"hidden":""}`}>
          <input
            className="h-full ml-6 w-3/4 border-0 outline-none"
            placeholder="Anywhere | Any week | Add guests"
          />
          <div className="w-[32px] h-[32px] rounded-full flex items-center justify-center bg-[#FF385C]">
            <img src={searchLogo} alt="search" />
          </div>
        </div>
      </div>
      <div className="flex-1  flex items-center justify-end ">
        <button
          className="w-[150px] h-[35px] font-semibold hover:"
          onClick={() => {
            authToken
              ? navigate("/host")
              : toast("Please Login first") && setSignIn(!signIn);
          }}
        >
         <span className={`${!search?"hidden":""}`}> Switch to hosting</span> <span className={`${search?"hidden":""}`}> airbnb your home</span>
        </button>

        <button className="w-[30px] h-[30px] rounded-full">
          <img
            src={globe}
            alt="language"
            // onClick={() => dispatch(setState(true))}
          />
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
        <div>
          {" "}
          {!authToken ? (
            <LoginQuickAccess
              {...{
                toggle,
                setToggle,
                signIn,
                setSignIn,
                signUp,
                setSignUp,
                handleSignUp,
                handleBackground,
              }}
            />
          ) : (
            <SignInQuickNav {...{ toggle, setToggle }} />
          )}
        </div>

        <div
          className={`${
            signUp || signIn
              ? "fixed top-0  bottom-0 right-0 left-0 m-auto bg-slate-600 opacity-40 z-20"
              : "hidden"
          }`}
          onClick={handleBackground}
        ></div>
        <div
          className={`${
            signUp
              ? "fixed top-0 bottom-0 left-0 right-0 m-auto w-1/3 h-[90%] bg-white z-[200] rounded-md "
              : "hidden"
          }`}
        >
          <SignUp setSignUp={setSignUp} />
        </div>
        <div
          className={`${
            signIn
              ? "fixed top-0 bottom-0 left-0 right-0 m-auto w-1/3 h-3/4 bg-white z-50 rounded-md flex justify-center items-center"
              : "hidden"
          }`}
        >
          <SignIn signIn={SignIn} setSignIn={setSignIn} />
        </div>
      </div>
      <div className="signIN">
       
      </div>
    </div>
  );
};
