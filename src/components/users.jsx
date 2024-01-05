import React from "react";
import user from "../assets/userForAdmin.jpeg";
const UserCard = ({ item, hanldeUser }) => {
  return (
    <div>
      <div className="w-full h-14 border flex  px-3 rounded hover:cursor-pointer ">
        <div className=" w-1/5 h-full flex justify-start items-center">
          {" "}
          <img src={user} alt="user" className="w-12 h-12 rounded" />
        </div>
        <div className=" w-1/5 h-full flex justify-start items-center">
          {" "}
          <h1 className="font-semibold text-sm">
            {item.firstName + " " + item.lastName}{" "}
          </h1>
        </div>
        <div className=" w-1/5 h-full flex justify-start items-center">
          <span className="font-semibold text-sm"> {item.email} </span>
        </div>
        <div className=" w-1/5 h-full flex justify-start items-center">
          {" "}
          <span className="font-semibold text-sm"> {item.phone}</span>
        </div>
        <div className=" w-1/5 h-full flex justify-between items-center">
          {" "}
          <span className="font-semibold text-sm">{item.userType}</span>
          <div>
            <button
              className={` "  text-white w-20 p-2 rounded font-semibold text-xs " ${
                item.user_status === "active" ? "bg-red-500" : "bg-green-700"
              }  `}
              onClick={() => {
                if (item.user_status === "active") {
                  hanldeUser(item._id, "blocked");
                } else {
                  hanldeUser(item._id, "active");
                }
              }}
            >
              <span
                className={`${
                  item.user_status !== "active" ? "hidden" : ""
                } text-xs`}
              >
                Block
              </span>
              <span
                className={`${
                  item.user_status !== "blocked" ? "hidden" : ""
                } text-xs`}
              >
                Unblock
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserCard;
