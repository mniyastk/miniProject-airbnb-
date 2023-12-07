import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar";
import { navitems } from "../../data/menubar";
import filter from "../../assets/Frame.svg";
import { StayCard } from "../../components/stayCard";
import { staysData } from "../../data/stays";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import axios from "axios";

export const Home = () => {
  console.log(navitems);
  const { listings } = useSelector((data) => data.data);
  const [stays,setStays]= useState([])
  console.log(stays)
  console.log();
  console.log(listings);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/stays")
      .then((data) => setStays(data.data.data))
      .catch((e) => console.log(e));
  }, []);

  //TODO :eslint
  return (
    <div>
      <Navbar />
      <div className="h-[80px] flex">
        <div className="h-full w-[70%] pl-10 overflow-hidden flex justify-between flex-wrap">
          {navitems.map((item, index) => {
            return (
              <div
                className=" h-full w-[85px] flex flex-col justify-center items-center "
                key={index}
              >
                <img
                  src={item.image}
                  alt="logo"
                  className="w-[24px] h-[24px]"
                />
                <span className="text-xs font-normal">{item.title}</span>
              </div>
            );
          })}
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
      <div className="h-auto flex flex-wrap justify-between px-10 ">
        {stays.map((item, index) => {
          return (
            <NavLink to={`/${item._id}`}>
              <StayCard data={item} key={index} />
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
