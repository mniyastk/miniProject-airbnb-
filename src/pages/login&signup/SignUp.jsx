import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

export const SignUp = (props) => {
  const form = useForm();
  const { register, control, handleSubmit, formState, watch } = form;
  const navigate = useNavigate();
  const { errors } = formState;

  const onSubmit = (data) => {
    console.log(data);
    axios
      .post("http://localhost:4000/api/user/register", { data })
      .then((data) => {
        console.log(data);
        toast.success("User registration successfull");
        setTimeout(() => {
          props.setSignUp(false);
        }, 1000);
        navigate("/");
      })
      .catch((e) => {
        if (e.response.status === 409) {
          toast.warn("user already exists with the same email or phone number");
        } else {
          console.log(e);
        }
      });
  };
  const password = watch("password");
  return (
    <div className="w-full flex justify-center items-center h-full">
      <form
        className="flex flex-col w-3/5 justify-center h-full py-3"
        onSubmit={handleSubmit(onSubmit)}
        noValidate
      >
        {/* <label htmlFor="firstName"></label> */}
        <input
          className=" text-sm font-semibold border h-10 rounded-md "
          type="text"
          placeholder="First Name"
          {...register("firstName", { required: "First name is required" })}
        />
        <p className="pt-1 font-semibold text-red-700 text-sm">
          {errors.firstName?.message}
        </p>
        <br />

        {/* <label htmlFor="lastName"> </label> */}
        <input
          className=" text-sm font-semibold border h-10 rounded-md "
          type="text"
          placeholder="Last Name"
          {...register("lastName", { required: "Last name is required" })}
        />
        <p className="pt-1 font-semibold text-red-700 text-sm">
          {errors.lastName?.message}
        </p>
        <br />

        {/* <label htmlFor="email"></label> */}
        <input
          className=" text-sm font-semibold border h-10 rounded-md "
          type="email"
          placeholder="E-mail"
          {...register("email", {
            required: {
              value: true,
              message: " Email is required",
            },
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

        {/* <label htmlFor="phone"></label> */}
        <input
          className=" text-sm font-semibold border h-10 rounded-md "
          type="tel"
          id=""
          placeholder="Phone number"
          {...register("phone", { required: "Phone number is required" })}
        />
        <p className="pt-1 font-semibold text-red-700 text-sm">
          {errors.phone?.message}
        </p>
        <br />

        <input
          className=" text-sm font-semibold border h-10 rounded-md "
          type="password"
          placeholder="Password"
          {...register("password", {
            required: { value: true, message: "Password is required" },
            minLength:{value:5,message:"Minimum 5 charecters"},
            maxLength:{value:25,message:"Maximum 25 charecters"}
          })}
        />
        <p className="pt-1 font-semibold text-red-700 text-sm">
          {errors.password?.message}
        </p>
        <br />

        {/* <label htmlFor="confirmPassword"></label> */}
        <input
          className=" text-sm font-semibold border h-10 rounded-md "
          // type="password"
          name="confirmPassword"
          placeholder="confirm password"
          {...register("confirmPassword", {
            required: "Confirm password is required",
            validate: (fieldValue) => {
              // console.log(fieldValue)
              return fieldValue === password || "Passwords do not match";
            },
          })}
        />
        <p className="pt-1 font-semibold text-red-700 text-sm">
          {errors.confirmPassword?.message}
        </p>
        {/* <label htmlFor=""></label> */}
        {/* {errors} */}

        <button
          className=" w-13 h-8 border mt-3 rounded-md bg-rose-600 font-bold text-sm text-white"
          // onClick={(e) => handlesubmit(e)}
        >
          Sign Up
        </button>
      </form>
      <DevTool control={control} />
    </div>
  );
};
