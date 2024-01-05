import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/navbar";
import { navitems } from "../../data/menubar";
import filter from "../../assets/Frame.svg";
import rightArrow from "../../assets/rightArrow.svg";
import leftArrow from "../../assets/leftArrow.svg";

import { StayCard } from "../../components/stayCard";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";
import { myContext } from "../../App";
import { toast } from "react-toastify";

export const Home = () => {

  const search = true;
  const { favouritedStays,stays, setStays,defaultMessage, setDefaultMessage } = useContext(myContext);
  // const [stays, setStays] = useState([]);
  // const [defaultMessage, setDefaultMessage] = useState(false);

  useEffect(() => {
    axios
      .get("https://airbnb-2hlc.onrender.com/api/user/stays")
      .then((data) => {
        setDefaultMessage(false)
        setStays(data.data.data)})
      .catch(() => toast("Internal Server Error"));
  }, []);

  //TODO :eslint
  const [width, setWidth] = useState(0);
  const handleRight = (e) => {
    e.stopPropagation();
    if (width < Math.round(navitems.length / 9)) {
      setWidth((prevWidth) => prevWidth + 1);
    }
  };
  const handleLeft = (e) => {
    e.stopPropagation();
    if (width > 0) {
      setWidth((pre) => pre - 1);
    }
  };

  const handleCategory = (category) => {
    axios
      .get(
        `https://airbnb-2hlc.onrender.com/api/users/properties/category?stayType=${category}`
      )
      .then((res) => {
        if (res.data.data.length === 0) {
          setStays([]);
          setDefaultMessage(true);
          console.log("if");

        } else {
          setDefaultMessage(false);
          setStays(res.data.data);
          console.log("else");
        }
      })
      .catch(() => toast("Internal server error"));
  };

  return (
    <div className="relative">
      <Navbar {...{ search }} />
      <div className="h-[80px] flex sticky top-[80px] z-20 bg-white">
        <div className="h-full w-[70%] pl-10 overflow-hidden flex gap-10 justify-between relative">
          <div
            className="absolute right-2 top-6 border rounded-full hover:cursor-pointer bg-white w-[35px] h-[35px] p-[10px] backdrop-blur-2xl z-10"
            onClick={handleRight}
          >
            <img src={rightArrow} alt="rightArrow" />
          </div>

          <div
            className={`absolute left-10 top-6 border rounded-full hover:cursor-pointer bg-white w-[35px] h-[35px] p-[10px] backdrop-blur-2xl  z-10 ${
              width === 0 ? "invisible" : "visible"
            }`}
            onClick={handleLeft}
          >
            <img src={leftArrow} alt="leftArrow" />
          </div>

          <div
            className="flex transition-transform duration-700 "
            style={{ transform: `translateX(-${width * 15}%)` }}
          >
            {navitems.map((item, index) => (
              <div
                className="h-full w-[100px] flex flex-col justify-center items-center hover:cursor-pointer "
                key={index}
                onClick={() => handleCategory(item.title)}
              >
                <img src={item.src} alt="logo" className="w-[24px] h-[24px]" />
                <span className="text-xs font-normal mt-2 whitespace-nowrap">
                  {item.title}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="h-full w-[30%] flex items-center justify-around ">
          <button className="w-[93px] h-[50px] border flex justify-center items-center rounded-[20px]">
            <img src={filter} alt="logo" />
            <span className="font-medium text-xs">Filters</span>
          </button>
          <div className="border w-[220px] h-[50px] rounded-[20px] flex justify-around items-center">
            <span className="font-medium text-xs">
              Display total before taxes
            </span>
            <div className="w-[40px] h-[22px] bg-[#CDC3C3] rounded-[25px] flex justify-start items-center">
              {" "}
              <div className="rounded-full w-[20px] h-[18px] ml-1 bg-white "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-auto grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1  px-10  overflow-scroll">
        <div className={` ${defaultMessage ? "" : "hidden"}  w-[1300px] h-[500px] justify-center items-center flex font-extrabold text-2xl`}>
          No stays available in this category
        </div>
        {stays.map((data, index) => {
          return (
            <NavLink
              to={{
                pathname: `/user/stay/${data._id}`,
                search: `?data=${encodeURIComponent(
                  JSON.stringify({ admin: false ,host:false})
                )}`,
              }}
            >
              <StayCard {...{ data, favouritedStays }} key={index} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
