import React from "react";
import CountButton from "../../../components/countButton";

const HouseDetails = () => {
  return (
    <div className="h-full pt-5 w-1/2">
      <h1 className=" font-extrabold text-[32px] my-3">
        Share some basics about your place
      </h1>{" "}
      <p className="mb-3 text-[18px] font-semibold text-[#717171]">
        You will add more details later , such as bed types.
      </p>
      <div className="w-full h-1/2">
        <div className="w-full h-1/4 flex justify-between text-xs font-normal  border-b ">
          {" "}
          <div className="flex justify-start items-center text-[18px] font-normal">Guests</div>
          <div><CountButton/></div>
        </div>
        <div className="w-full h-1/4 flex justify-between text-xs font-normal  border-b">
          <div className="flex justify-start items-center text-[18px] font-normal">Bedrooms </div>
          <div><CountButton/></div>
        </div>
        <div className="w-full h-1/4 flex justify-between text-xs font-normal  border-b">
          <div className="flex justify-start items-center text-[18px] font-normal">Beds </div>
          <div><CountButton/></div>
        </div>
        <div className="w-full h-1/4 flex justify-between text-xs font-normal  ">
          <div className="flex justify-start items-center text-[18px] font-normal">Bathrooms </div>
          <div><CountButton/></div>
        </div>
      </div>
    </div>
  );
};

export default HouseDetails;
