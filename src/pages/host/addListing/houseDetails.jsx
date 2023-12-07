import React from "react";
import CountButton from "../../../components/countButton";
import { useSelector } from "react-redux";

const HouseDetails = () => {
  const {property}= useSelector(data=>data.data)
  console.log(property)
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
          <div><CountButton data={"maxGuests"}/></div>
        </div>
        <div className="w-full h-1/4 flex justify-between text-xs font-normal  border-b">
          <div className="flex justify-start items-center text-[18px] font-normal">Bedrooms </div>
          <div><CountButton data={"bedRooms"}/></div>
        </div>
        <div className="w-full h-1/4 flex justify-between text-xs font-normal  border-b">
          <div className="flex justify-start items-center text-[18px] font-normal">Beds </div>
          <div><CountButton data={"beds"}/></div>
        </div>
        <div className="w-full h-1/4 flex justify-between text-xs font-normal  ">
          <div className="flex justify-start items-center text-[18px] font-normal">Bathrooms </div>
          <div><CountButton data={"bathrooms"}/></div>
        </div>
      </div>
      {/* <div>
        <button onClick={}> confirm</button>
      </div> */}
    </div>
  );
};

export default HouseDetails;
