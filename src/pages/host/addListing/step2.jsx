import React, { useState } from "react";
import house from "../../../assets/house-door.svg";
import apartment from "../../../assets/buildings.svg";
import barn from "../../../assets/barn-svgrepo-com.svg";
import bread from "../../../assets/coffee-svgrepo-com.svg";
import boat from "../../../assets/boat-svgrepo-com.svg";
import cabin from "../../../assets/cabin-svgrepo-com.svg";
import carvan from "../../../assets/campervan-svgrepo-com.svg";
import casa from "../../../assets/casa-particular-svgrepo-com.svg";
import castle from "../../../assets/castle-svgrepo-com.svg";
import cave from "../../../assets/cave-svgrepo-com.svg";
import containrt from "../../../assets/container-svgrepo-com.svg";
import Cycladic from "../../../assets/cycladic-home-svgrepo-com.svg";
import Dammuso from "../../../assets/dammuso-svgrepo-com.svg";
import Dome from "../../../assets/dome-svgrepo-com.svg";
import earthHome from "../../../assets/plant-house-svgrepo-com.svg";
import farm from "../../../assets/farm-svgrepo-com.svg";
import guestHouse from "../../../assets/guest-house-svgrepo-com.svg";
import Hotel from "../../../assets/hotel-svgrepo-com.svg";
import houseBoat from "../../../assets/houseboat-svgrepo-com.svg";
import Kezhan from "../../../assets/kezhan-svgrepo-com.svg";
import Minsu from "../../../assets/minsu-svgrepo-com.svg";
import riad from "../../../assets/riad.svg";
import Ryokan from "../../../assets/ryokan-svgrepo-com.svg";
import hut from "../../../assets/shepardhut.svg";
import tent from "../../../assets/tent-svgrepo-com.svg";
import TinyHome from "../../../assets/tiny-home-svgrepo-com.svg";
import Tower from "../../../assets/tower-svgrepo-com.svg";
import treeHouse from "../../../assets/tree-house-svgrepo-com.svg";
import Trullo from "../../../assets/trullo-svgrepo-com.svg";
import Windmill from "../../../assets/windmill-svgrepo-com.svg";
import Yurt from "../../../assets/yurt-svgrepo-com.svg";

export const Step2 = () => {
  const data = [
    {
      title: "House",
      src: house,
    },
    {
      title: "Flat/apartment",
      src: apartment,
    },
    {
      title: "Barn",
      src: barn,
    },
    {
      title: "Bed & breakfast",
      src: bread,
    },
    {
      title: "Boat",
      src: boat,
    },
    {
      title: "Cabin",
      src: cabin,
    },
    {
      title: "Campervan/motorhome",
      src: carvan,
    },
    {
      title: "Casa particular",
      src: casa,
    },
    {
      title: "Casle",
      src: castle,
    },
    {
      title: "Cave",
      src: cave,
    },
    {
      title: "Container",
      src: containrt,
    },
    {
      title: "Cycladic home",
      src: Cycladic,
    },
    {
      title: "Dammuso",
      src: Dammuso,
    },
    {
      title: "Earth home",
      src: earthHome,
    },
    {
      title: "Farm",
      src: farm,
    },
    {
      title: "Dome",
      src: Dome,
    },
    {
      title: "Guest house",
      src: guestHouse,
    },
    {
      title: "Hotel",
      src: Hotel,
    },
    {
      title: "House boat ",
      src: houseBoat,
    },
    {
      title: "Kezhan ",
      src: Kezhan,
    },
    {
      title: "Minsu",
      src: Minsu,
    },
    {
      title: "Riad",
      src: riad,
    },
    {
      title: "Ryokan",
      src: Ryokan,
    },
    {
      title: "Shepherd’s hut",
      src: hut,
    },
    {
      title: "Trullo",
      src: Trullo,
    },
    {
      title: "Tiny home",
      src: TinyHome,
    },
    {
      title: "Tower",
      src: Tower,
    },
    {
      title: "Tree house",
      src: treeHouse,
    },
    {
      title: "Windmill",
      src: Windmill,
    },
    {
      title: "Tent",
      src: tent,
    },
    {
      title: "Yurt",
      src: Yurt,
    },
  ];
  const [toggle, setToggle] = useState("");
  const handleToggle = (e) => {
    setToggle(e);
  };
  return (
    <div className="flex w-full h-full justify-center overflow-scroll">
      <div className=" w-5/12 h-full">
        <h1 className="text-[32px] font-semibold leading-[36px] py-5 ">
          Which of these best describes your place?
        </h1>
        <div className="w-full flex justify-between flex-wrap gap-3  h-full p-1">
          {data.map((item, index) => {
            return (
              <div
                className={`"bg-orange-500 w-[170px] rounded-md h-[80px] flex flex-col border hover:outline outline-2 justify-center" ${
                  toggle === item.title ? "bg-slate-200 outline outline-2" : ""
                }`}
                key={index}
                onClick={() => handleToggle(item.title)}
              >
                <img src={item.src} alt="logo" className="w-[30px] h-[30px]" />
                <h3 className="font-semibold text-base pt-1"> {item.title}</h3>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
