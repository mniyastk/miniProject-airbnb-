import React from "react";
import logo from "../../../assets/black.png";
// import StepOne from "./stepOne.jsx";
import { Step2 } from "./step2.jsx";
import StepThree from "./stepThree.jsx";
import Location from "./location.jsx";
import { Link } from "react-router-dom";
import Address from "./address.jsx";
import HouseDetails from "./houseDetails.jsx";
import StepTwo from "./stepTwo.jsx";
import { One } from "./stepTwo/One.jsx";

export const AddListingLayout = () => {
  return (
    <div className="h-screen ">
      <div className="w-full h-[75px] border-b flex justify-between items-center px-8">
       <Link to={'/'}><img src={logo} alt="logo" className="h-[50px]"/></Link> 
        <div className="flex justify-between items-center w-[180px]">
          <button className="font-semibold text-xs border rounded-full h-10 px-2">Questions ?</button>{" "}
          <button className="font-semibold text-xs border rounded-full h-10 px-2"> Save & Exit</button>{" "}
        </div>
      </div>
<div className=" h-3/4 flex justify-center ">
{/* <StepOne/> */}
{/* <Step2/> */}
{/* <StepThree/> */}
{/* <Location/> */}
{/* <Address/> */}
{/* <HouseDetails/> */}
{/* <StepTwo/> */}
<One/>
</div>
      <div className="h-[75px] px-8 flex justify-between items-center">
        <button className="px-2 text-sm font-bold underline h-10 w-14 hover:bg-slate-100 rounded-md">Back</button>
        <button className="px-2 text-sm font-bold text-white bg-black rounded-md h-10 w-14"> Next</button>

      </div>
    </div>
  );
};
