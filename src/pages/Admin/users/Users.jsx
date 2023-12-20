import React, { useEffect, useState } from "react";
import user from "../../../assets/userForAdmin.jpeg";
import axios from "axios";

const Users = () => {
  const [users, setUsers] = useState([]);
  const data = fetch("https://api.postalpincode.in/pincode/673639")
  .then((data) =>data.json()).then(data=>console.log(data[0].PostOffice))
  .catch((e) => console.log(e));
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/users")
      .then((res) => setUsers(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(users);
  return (
    <div className="flex flex-col gap-y-3">
        {users.map((item,id)=>{
            return(
<div className="w-full h-14 border flex items-center justify-between px-3 rounded hover:cursor-pointer">
        <img src={user} alt="user" className="w-12 h-12 rounded" />
        <h1 className="font-semibold text-sm">{item.firstName +" "+item.lastName} </h1>
        <span className="font-semibold text-sm"> {item.email} </span>
        <span className="font-semibold text-sm"> {item.phone}</span>
        <span className="font-semibold text-sm">{item.userType}</span>
      </div>
            )
        })}
    </div>
  );
};

export default Users;
