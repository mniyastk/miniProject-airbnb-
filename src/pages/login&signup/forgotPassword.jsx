import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const form = useForm();
//   const formRef = useRef();
  const { register, formState } = form;
  const { errors } = formState;
//   const navigate = useNavigate();
//   const dispatch = useDispatch();
  const [optSend,setOtpSend]= useState(false)
  const handleSentOtp =()=>{
    
  }
  return (
    <div className="w-3/4 flex flex-col justify-center items-center bg-white max-sm:w-full ">
      {/* <div
        className="w-6 h-6  flex justify-center items-center rounded-full text-lg font-bold border hover:cursor-pointer absolute top-0 right-0 m-2 bg-black text-white"
        // onClick={() => setSignIn(!signIn)}
      >
        X
      </div> */}
      <form
        className="w-full flex flex-col justify-center items-center max-sm:w-2/3"
        // onSubmit={handleSubmit(handleClick)}
        // ref={formRef}
      >
        <p className="font-light text-sm my-4">Please enter your registered email to recieve 4 digit OTP </p>
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
          type="String"
          placeholder="Enter the OTP"
          className={` " w-full border rounded-md h-12 pl-2 outline-1 "  ${optSend?"":"hidden"} `}
          {...register("otp", {
            required: { value: true, message: "otp is required" },
            minLength: { value: 5, message: "Minimum 4 charecters" },
          })}
        />
        <p className="pt-1 font-semibold text-red-700 text-sm">
          {errors.otp?.message}
        </p>
        <button
          className=" w-[150px] h-8 border mt-5 rounded-md bg-rose-600 font-bold text-sm text-white"
        //   type="submit"
          onClick={(e)=>{
           e.preventDefault() 
            setOtpSend(!optSend)
            handleSentOtp()
        }}
        >
          {" "}
         Send OTP{" "}
        </button>

      </form>
     
    </div>
  );
};

export default ForgotPassword;
