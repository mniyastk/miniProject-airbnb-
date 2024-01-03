import React, { useEffect, useState } from "react";
import user from "../../../assets/userForAdmin.jpeg";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const data = fetch("https://api.postalpincode.in/pincode/673639")
    .then((data) => data.json())
    .then((data) => console.log(data[0].PostOffice))
    .catch((e) => console.log(e));
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/users")
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(users);
  return (
    <div className="flex flex-col gap-y-3 ">
      <div className="flex w-full h-16 sticky top-0 px-3 items-center text-white rounded bg-[#5A67BA]">
        <div className="w-1/5 h-14  text-base font-bold flex justify-start items-center"></div>
        <div className="w-1/5 h-14  text-base font-bold flex justify-start items-center">
          Full Name
        </div>
        <div className="w-1/5 h-14  text-base font-bold flex justify-start items-center">
          Email Address
        </div>
        <div className="w-1/5 h-14  text-base font-bold flex justify-start items-center">
          Phone Number
        </div>
        <div className="w-1/5 h-14  text-base font-bold flex justify-start items-center">
          User Type
        </div>
      </div>
      {users.map((item, id) => {
        return (
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
                <button className=" bg-red-500 text-white p-2 rounded font-bold text-sm">
                  {" "}
                  Block
                </button>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Users;
