import React, { useState } from "react";
import logo from "../../../assets/black.png";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";


export const AddListingLayout = () => {
  const {state} = useSelector((data)=>data.data)

  const navigationPath = [
    "stepOne",
    "step2",
    "StepThree",
    "Location",
    "Address",
    "HouseDetails",
    "StepTwo",
    "One",
    "Two",
    "Three",
    "Four",
    "OneThree",
    "Price",
  ];
  console.log(state);
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const handleClick = (pCount) => {
    if ((count > 0) && (count <=12)) {
      setCount(pCount + 1);
      navigate(`${navigationPath[count]}`);
    }
    console.log(count);
  };
  const handleBack=()=>{
    if((count > 0) && (count <= 13)){
      setCount(count-1)
      navigate(-1)
    }
    console.log(count)
    
  }
  return (
    <div className="h-screen ">
      <div className="w-full h-[75px] border-b flex justify-between items-center px-8">
        <Link to={"/"}>
          <img src={logo} alt="logo" className="h-[50px]" />
        </Link>
        <div className="flex justify-between items-center w-[180px]">
          <button className="font-semibold text-xs border rounded-full h-10 px-2">
            Questions ?
          </button>{" "}
          <button className="font-semibold text-xs border rounded-full h-10 px-2">
            {" "}
            Save & Exit
          </button>{" "}
        </div>
      </div>
      <div className=" h-3/4 flex justify-center overflow-scroll">
        {<Outlet />}
      </div>
      <div className="h-[75px] px-8 flex justify-between items-center">
        <button className="px-2 text-sm font-bold underline h-10 w-14 hover:bg-slate-100 rounded-md" onClick={handleBack}>
          Back
        </button>
        <button
          className={`px-2 text-sm font-bold text-white bg-black rounded-md h-10 w-14 ${!state?"hover:cursor-not-allowed opacity-50":""}`}
          onClick={() => handleClick(count)}
        >
          {" "}
          Next
        </button>
      </div>
    </div>
  );
};
