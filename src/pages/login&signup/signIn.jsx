import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";


function  SignIn(props) {
  // const dispatch =useDispatch
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleClick = async (e) => {
    e.preventDefault();
    if (email === "" || password === "") {
      setError("Please enter email and password !!");
    } else {
      await axios
        .post("http://localhost:3000/api/user/login", { email, password })
        .then(() => {
          toast.success("login successfull");
          setTimeout(()=>{
            props.setSignIn(false);
          },4000)
        
          setError("");
          setEmail("");
          setPassword("");
        })
        .catch((e) => {
          console.log(e);
          setError("Invalid credentials");
        });
    }
  };
  return (
    <div className="w-3/4 flex flex-col justify-center items-center">
      <form
        className="w-full flex flex-col justify-center items-center"
      
      >
        <input
          value={email}
          type="email"
          placeholder="E-mail"
          className="w-full border rounded-md h-12 pl-2 outline-1"
          onChange={(e) => {
            setEmail(e.target.value);
            setError("");
          }}
        />
        <br />
        <br />

        <input
          value={password}
          type="password"
          placeholder="password"
          className="w-full border rounded-md h-12 pl-2 outline-1"
          onChange={(e) => {
            setPassword(e.target.value);
            setError("");
          }}
        />
        <button
          className=" w-[150px] h-8 border mt-5 rounded-md bg-rose-600 font-bold text-sm text-white"
          type="submit"
          onClick={(e) => handleClick(e)}
        >
          {" "}
          Sign In{" "}
        </button>
        {/* <input type="submit" value="dgdf" /> */}
        
        
      </form>
     
      <p className="mt-3 font-bold text-red-800">{error}</p>
     
    </div>
  );
}

export default SignIn;
