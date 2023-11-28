import React from "react";
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
  return (
    <div className="w-1/2 h-full bg-slate-100">
      <div>
        <h1 className="text-[32px] font-semibold leading-[36px] py-5 ">
          Tell guests what your place has to offer
        </h1>
        <p className="text-lg font-normal">
          You can add more amenities after you publish your listing.
        </p>
      </div>
      <div className="w-full h-[400px] p-2 flex flex-wrap justify-around">
        {data.map((item, index) => {
          return (
            <div className="w-[32%] h-1/3 rounded-md flex flex-col items-start justify-center pl-3">
              <img src={wifi} alt="imgs" className="my-2" />
              <h2 className="font-semibold">Wifi</h2>
            </div>
          );
        })}

        <div className="w-[32%] h-1/3 rounded-md bg-slate-500"></div>
        <div className="w-[32%] h-1/3 rounded-md bg-slate-500"></div>
      </div>
    </div>
  );
};
