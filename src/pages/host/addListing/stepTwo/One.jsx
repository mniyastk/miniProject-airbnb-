import React, { useState } from "react";
import wifi from "../../../../assets/wifi.svg";
import Tv from "../../../../assets/tv.svg";
import kitchen from "../../../../assets/kitchen.svg";
import washingMachine from "../../../../assets/washingMachine.svg";
import car from "../../../../assets/car.svg";
import scale from "../../../../assets/scale.svg";
import ac from "../../../../assets/ac.svg";
import workspace from "../../../../assets/workspace.svg";
export const One = () => {
  const data = [
    {
      title: "Wifi",
      src: wifi,
    },
    {
      title: "TV",
      src: Tv,
    },
    {
      title: "Kitchen",
      src: kitchen,
    },
    {
      title: "Washing Machine",
      src: washingMachine,
    },
    {
      title: "Free parking on premises",
      src: car,
    },
    {
      title: "Paid parking on premises",
      src: scale,
    },
    {
      title: "Air conditioning",
      src: ac,
    },
    {
      title: "Dedicated workspace",
      src: workspace,
    },
  ];
  const [toggle, setToggle] = useState([]);

  const handleClick = (e) => {
    if (toggle.includes(e)) {
      setToggle(toggle.filter((item) => item !== e));
    } else {
      setToggle([...toggle, e]);
    }
  };
  return (
    <div className="w-1/2 h-max">
      <div>
        <h1 className="text-[32px] font-semibold leading-[36px] py-5 ">
          Tell guests what your place has to offer
        </h1>
        <p className="text-lg font-normal">
          You can add more amenities after you publish your listing.
        </p>
      </div>
      <div className="w-full h-[300px] p-2 flex flex-wrap justify-start ">
        {data.map((item, index) => {
          return (
            <div
              className={`w-[27%] h-1/3 rounded-md flex flex-col items-start justify-center pl-3 m-3 border hover:outline outline-2 ${
                toggle.includes(item.title)
                  ? "outline outline-2 bg-slate-100"
                  : ""
              }`}
              key={index}
              onClick={() => handleClick(item.title)}
            >
              <img src={item.src} alt="imgs" className="" />
              <h2 className="font-semibold">{item.title}</h2>
            </div>
          );
        })}
    
         
      
      </div>
    </div>
  );
};
