import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import UserCard from "../../../components/users";
import { useSelector } from "react-redux";

const Users = () => {
  const {adminToken} = useSelector(data=>data.admin)
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(false);

  useEffect(() => {
    axios
      .get(`https://airbnb-2hlc.onrender.com/api/admin/users`,{headers:{
        Authorization:`Bearer ${adminToken}`
      }})
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [render]);
  const hanldeUser = (id, user_status) => {
    axios
      .put(`https://airbnb-2hlc.onrender.com/api/admin/users/block_unblock/${id}`, {
        
        input: { user_status: user_status },
        
      },{headers:{
        Authorization:`Bearer ${adminToken}`
      }})
      .then((res) => {
    
  
        if (res.status === 200) {
          toast("Success");
          setRender(!render);
        } else {
          toast("Server Error");
          setRender(!render);
        }
      })
      .catch(() => {
       
        toast("Internal server error");
      });
  };
  
  

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
          <UserCard {...{ item, hanldeUser}} key={id} />
        );
      })}
    </div>
  );
};

export default Users;
