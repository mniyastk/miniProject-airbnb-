import React from "react";
import dashBorad from "../../../assets/ChartDashboard.png";
import users from "../../../assets/usersIcon.png";
import listings from "../../../assets/listings.png";
import approval from "../../../assets/approval.png";
import settings from "../../../assets/vector-settings-icon.jpg";
import Users from "../users/Users";
import { Outlet, useNavigate } from "react-router-dom";

const AdminHome = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-full ">
      <div className="w-[240px] h-screen  bg-[#F1F2F7]  ">
        <div className="flex w-full h-16 items-center border-b px-5">
          <div className="w-6 h-6 rounded-full text-white bg-[#5A67BA] flex items-center justify-center font-bold text-xs">
            N
          </div>
          <h1 className="font-extrabold text-sm pl-4 text-[#5A67BA]"> NIYAS</h1>
        </div>
        <div className=" px-5 h-[500px] pt-5">
          <div
            className="w-full h-12 flex items-center pl-2  border rounded hover:cursor-pointer hover:bg-slate-200  "
            onClick={() => navigate("/admin/dashboard")}
          >
            {" "}
            <img src={dashBorad} alt="" className="w-5 h-5" />{" "}
            <h1 className="text-[#707FDD] font-semibold text-xs pl-2">
              Dashboard
            </h1>{" "}
          </div>
          <div
            className="w-full h-12 flex items-center pl-2  border rounded hover:cursor-pointer hover:bg-slate-200  "
            onClick={() => navigate("/admin/users")}
          >
            {" "}
            <img src={users} alt="" className="w-5 h-5" />{" "}
            <h1 className="text-[#707FDD] font-semibold text-xs pl-2">Users</h1>{" "}
          </div>
          <div
            className="w-full h-12 flex items-center pl-2  border rounded hover:cursor-pointer hover:bg-slate-200  "
            onClick={() => navigate("/admin/listings")}
          >
            {" "}
            <img src={listings} alt="" className="w-5 h-5" />{" "}
            <h1 className="text-[#707FDD] font-semibold text-xs pl-2">
              Listings
            </h1>
          </div>
          <div
            className="w-full h-12 flex items-center pl-2  border rounded hover:cursor-pointer hover:bg-slate-200  "
            onClick={() => {
              navigate("/admin/pending");
            }}
          >
            {" "}
            <img src={approval} alt="" className="w-5 h-5" />{" "}
            <h1 className="text-[#707FDD] font-semibold text-xs pl-2">
              Listings for review
            </h1>
          </div>
          {/* <div className="w-full h-12 flex items-center pl-2  border rounded hover:cursor-pointer hover:bg-slate-200  ">
            {" "}
            <img src={settings} alt="" className="w-5 h-5" />{" "}
            <h1 className="text-[#707FDD] font-semibold text-xs pl-2">
              Configuration
            </h1>
          </div> */}
        </div>
      </div>
      <div className=" h-screen w-full p-10">{<Outlet />}</div>
    </div>
  );
};

export default AdminHome;
