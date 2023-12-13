import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../../redux/authSlice";

function SignIn(props) {
  // const dispatch =useDispatch
  const form = useForm();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { authToken } = useSelector((data) => data.auth);
  console.log(authToken);

  const handleClick = (data) => {
    console.log(data);
    axios
      .post("http://localhost:4000/api/user/login", { data })
      .then((data) => {
        dispatch(setAuthToken(data.data.token));
        toast.success("login successfull");

        props.setSignIn(false);

        navigate("/");
      })
      .catch((e) => {
        console.log(e);
        toast("invalid email or Password");
      });
  };
  return (
    <div className="w-3/4 flex flex-col justify-center items-center">
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleClick)}
      >
        <input
          type="email"
          placeholder="E-mail"
          className="w-full border rounded-md h-12 pl-2 outline-1"
          {...register("email", {
            required: { value: true, message: "email is required" },
            pattern: {
              value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
              message: "Invalid email format",
            },
          })}
        />
        <p className="pt-1 font-semibold text-red-700 text-sm">
          {errors.email?.message}
        </p>
        <br />
        <br />

        <input
          type="password"
          placeholder="password"
          className="w-full border rounded-md h-12 pl-2 outline-1"
          {...register("password", {
            required: { value: true, message: "Password is required" },
            minLength: { value: 5, message: "Minimum 5 charecters" },
          })}
        />
        <p className="pt-1 font-semibold text-red-700 text-sm">
          {errors.password?.message}
        </p>
        <button
          className=" w-[150px] h-8 border mt-5 rounded-md bg-rose-600 font-bold text-sm text-white"
          type="submit"
        >
          {" "}
          Sign In{" "}
        </button>
        {/* <input type="submit" value="dgdf" /> */}
      </form>
    </div>
  );
}

export default SignIn;
