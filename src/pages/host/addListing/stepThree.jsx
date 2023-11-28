import React, { useState } from "react";
import home from "../../../assets/home.svg";
import door from "../../../assets/door.svg";
import shared from "../../../assets/shared room.svg";

const StepThree = () => {
  const data = [
    {
      id: 0,
      title: "An entire place ",
      decription: "Guests have the whole place to themselves",
      src: home,
    },
    {
      id: 1,
      title: "A room",
      decription:
        "Guests have their own room in a home, plus access to shared spaces.",
      src: door,
    },
    {
      id: 2,
      title: "A shared room ",
      decription:
        "Guests sleep in a room or common area that may be shared with you or others.",
      src: shared,
    },
  ];
  const [toogle, setToggle] = useState("");
  const handleToggle = (e) => {
    setToggle(e);
  };
  return (
    <div className="w-1/2 ">
      <h1 className="text-[32px] font-semibold leading-[36px] py-5 ">
        What type of place will guests have?
      </h1>
      <div className=" w-full h-full">
        {data.map((item) => {
          return (
            <div
              className={`"w-full h-1/5 border rounded-md hover:outline outline-2 flex justify-between items-center mt-3 "${
                toogle === item.id ? " bg-slate-200 outline" : ""
              }`}
              key={item.id}
              onClick={() => handleToggle(item.id)}
            >
              <div className="">
                <h1 className="font-semibold text-lg">{item.title}</h1>{" "}
                <p className="font-medium text-sm">{item.decription}</p>
              </div>{" "}
              <img className="w-[40px] h-[40px]" src={item.src} alt="images" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StepThree;
