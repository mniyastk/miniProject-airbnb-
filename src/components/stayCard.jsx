import React from "react";
// import cardImage from '../assets/Rectangle 9.svg'
export const StayCard = ({data}) => {
  
  return (
    <div className=" w-[305px] h-[390px] flex flex-col">
      <img src={data.image} alt="images" className="w-[300px] h-[285px]" />
      <span className="text-sl font-semibold pl-2">{data.place}</span>
      <span className="text-xs font-normal pl-2">{data.description}</span>
      <span className="text-xs font-normal pl-2">{data.date}</span>
      <span className="text-xs font-normal pl-2">{data.price}</span>
    </div>
  );
};
