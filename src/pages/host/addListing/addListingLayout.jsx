import React from "react";
import logo from "../../../assets/black.png";
import StepOne from "./stepOne.jsx";

export const AddListingLayout = () => {
  return (
    <div className="h-screen">
      <div className="w-full h-[75px] border-b flex justify-between items-center px-8">
        <img src={logo} alt="logo" className="h-[50px]"/>
        <div className="flex justify-between items-center w-[180px]">
          <button className="font-semibold text-xs border rounded-full h-10 px-2">Questions ?</button>{" "}
          <button className="font-semibold text-xs border rounded-full h-10 px-2"> Save & Exit</button>{" "}
        </div>
      </div>
<div className=" h-3/4">
<StepOne/>
</div>
      <div className="h-[75px] px-8 flex justify-between items-center">
        <button className="px-2 text-sm font-bold underline h-10 w-14 hover:bg-slate-100 rounded-md">Back</button>
        <button className="px-2 text-sm font-bold text-white bg-black rounded-md h-10 w-14"> Next</button>

      </div>
    </div>
  );
};
