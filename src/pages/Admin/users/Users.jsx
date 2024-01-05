import React, { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "react-toastify";
import UserCard from "../../../components/users";

const Users = () => {
  const [users, setUsers] = useState([]);
  const [render, setRender] = useState(false);
  console.log(render);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/users")
      .then((res) => {
        setUsers(res.data.data);
      })
      .catch((err) => console.log(err));
  }, [render]);
  // const hanldeUser = (id, user_status) => {
  //   axios
  //     .put(`http://localhost:4000/api/admin/users/block_unblock/${id}`, {
  //       input: { user_status: user_status },
  //     })
  //     .then((res) => { 
  //       console.log("res");     
  //       if (res.status === 200) {
  //         toast("success");
  //         setRender(true)
  //       } else {
  //         toast("Server Error");
  //         setRender(true)
  //       }
  //     })
  //     .catch(() => {
  //       toast("Internal server error");
  //     });
  // };

  const hanldeUser = (id, user_status) => {
    axios
      .put(`http://localhost:4000/api/admin/users/block_unblock/${id}`, {
        input: { user_status: user_status },
      })
      .then((res) => {
        console.log("Response:", res); // Log the entire response for debugging
  
        if (res.status === 200) {
          toast("Success");
          setRender(!render); // Invert the value to trigger a re-render
        } else {
          toast("Server Error");
          setRender(!render); // Invert the value to trigger a re-render
        }
      })
      .catch((error) => {
        console.error("Error:", error); // Log the error for debugging
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
