import axios from "axios";
import React, { useState ,} from "react";
import  {toast} from "react-toastify"
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setAdminToken } from "../../../redux/adminAuth";

export const AdminLogin = () => {
  const navigate = useNavigate()
  const dispatch= useDispatch()
  const [admin, setAdmin] = useState("");
  const [password, setPassword] = useState("");
  const handleAdmin = (e) => {
    e.preventDefault()
    
    axios
      .post("https://airbnb-2hlc.onrender.com/api/admin/login", { admin, password })
      .then((res) => {
        // console.log(res.data.data.token);
        dispatch(setAdminToken(res.data.data.token))
    toast("Login successfull")
    navigate("/admin/operations")
      })
      .catch(() => toast("incorrect login or password"));
  };
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center bg-white ">
      <form
        className="w-1/2  h-2/3 flex flex-col justify-center items-center border"
        // ref={formRef}
      >
        <input
          placeholder="admin"
          className="w-2/3 border rounded-md h-12 pl-2 outline-1"
          onChange={(e) => setAdmin(e.target.value)}
        />
        <br />
        <input
          type="password"
          placeholder="password"
          className="w-2/3 border rounded-md h-12 pl-2 outline-1"
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          className=" w-[150px] h-8 border mt-5 rounded-md bg-rose-600 font-bold text-sm text-white"
      
          onClick={(e)=>handleAdmin(e)}
        >
          {" "}
          Sign In{" "}
        </button>
      </form>
    </div>
  );
};
