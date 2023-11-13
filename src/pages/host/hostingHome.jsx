import React, { useEffect, useState } from "react";
import { HostNavBar } from "../../components/hostNavbar";
import { Footer } from "../../components/footer";
import task from "../../assets/tasks-tick-svgrepo-com.svg";
import { Link } from "react-router-dom";

export const HostHome = () => {
  const data = {
    CheckingOut: [],
    CurrentlyHosting: [],
    ArrivingSoon: [],
    comingsoon:[]
  };
  const initialShowData =
    data.CheckingOut.length === 0
      ? "You don’t have any guests checking out today or tomorrow."
      : data.CheckingOut;
  const [showData, setShowData] = useState(initialShowData);

  const checkingOut = () => {
    if (data.CheckingOut.length === 0) {
      setShowData("You don’t have any guests checking out today or tomorrow.");
    } else {
      setShowData(data.CheckingOut);
    }
  };
  const currentHostings = () => {
    if (data.CurrentlyHosting.length === 0) {
      setShowData("You don’t have any guests staying with you right now.");
    } else {
    }
  };
  const ArrivingSoon=()=>{
    if(data.ArrivingSoon.length===0){
        setShowData("You don’t have any guests arriving today or tomorrow.")
    }else{
        setShowData(data.ArrivingSoon)
    }
  }
  const upcoming=()=>{
    if(data.comingsoon.length===0){
        setShowData('You currently don’t have any upcoming guests.')
    }else{
        setShowData(data.comingsoon)
    }
  }
  
  return (
    <>
      <HostNavBar />
      <div className="w-full p-20 ">
        <div className="w-full h-screen">
          <div className="flex justify-between items-center h-24">
            <h1 className="font-bold text-2xl"> Welcome , Muhammed !</h1>
          <Link to={'/addListings'}> <button className="w-[150px] h-10 border rounded hover:bg-slate-100 font-semibold text-sm">
              {" "}
              Complete your listing
            </button></Link> 
          </div>
          <div className="flex h-32 justify-between items-center">
            {" "}
            <h2 className="font-semibold text-xl">Your reservations</h2>{" "}
            <span className="font-semibold text-sm underline ">
              {" "}
              All reservations (0)
            </span>
          </div>
          <div className="flex justify-start items-center">
            <button
              className="border rounded-full w-32 h-8 hover:bg-slate-100 text-xs font-semibold mr-2"
              onClick={checkingOut}
            >
              Checking out (0)
            </button>
            <button
              className="border rounded-full w-32 h-8 hover:bg-slate-100 text-xs font-semibold mr-2"
              onClick={currentHostings}
            >
              Currently hosting (0)
            </button>
            <button className="border rounded-full w-32 h-8 hover:bg-slate-100 text-xs font-semibold mr-2 " onClick={ArrivingSoon}>
              Arriving soon (0)
            </button>
            <button className="border rounded-full w-32 h-8 hover:bg-slate-100 text-xs font-semibold mr-2"  onClick={upcoming}>
              Upcoming(0)
            </button>
          </div>
          <div className=" w-full h-[300px] bg-slate-100 rounded-md mt-5 flex justify-center items-center">
            <div className="flex flex-col justify-center items-center w-32">
              <img src={task} alt="task" className="w-8 h-8" />{" "}
              <p className="text-sm font-semibold">{showData}</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
