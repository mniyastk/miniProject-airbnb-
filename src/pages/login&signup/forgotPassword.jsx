import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const form = useForm();

  //   const formRef = useRef();
  const { register, formState, watch } = form;
  const email = watch("email");
  const password = watch("password");
  const { errors } = formState;
  const [otp, setOtp] = useState("");
  const userOtp = watch("otp");
  // const [resetPassword, setResetPassword] = useState(false);
  const navigate = useNavigate();
  //   const dispatch = useDispatch();

  const [verifyOtp, setVerifyOtp] = useState(false);
  const handleSentOtp = () => {
    axios
      .post("http://localhost:4000/user/verifyOtp", {
        userOtp: userOtp,
        otp: otp,
      })
      .then(() => {
        navigate({
          pathname: "/user/reset",
          search: `?data=${encodeURIComponent(JSON.stringify(email))}`,
        });
      })
      .catch((e) => console.log(e));
  };
  return (
    <div className="w-3/4 flex flex-col justify-center items-center bg-white max-sm:w-full ">
      <form
        className="w-full flex flex-col justify-center items-center max-sm:w-2/3"
        // onSubmit={handleSubmit(handleClick)}
        // ref={formRef}
      >
        <p className="font-light text-sm my-4">
          Please enter your registered email to recieve 4 digit OTP{" "}
        </p>

        <input
          type="email"
          placeholder="E-mail"
          className={` " w-full border rounded-md h-12 pl-2 outline-1 "  `}
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
          className={` " w-full border rounded-md h-12 pl-2 outline-1 "  ${
            otp === "" ? "hidden" : ""
          } `}
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
          onClick={(e) => e.preventDefault()}
        >
          {" "}
          <span
            className={`${verifyOtp ? "hidden" : ""} w-full h-full`}
            onClick={() => {
              setVerifyOtp(true);
              axios
                .post("http://localhost:4000/user/forgotPassword", {
                  email: email,
                })
                .then((res) => {
                  setOtp(res.data.otp);
                })
                .catch((e) => console.log(e));
            }}
          >
            Send OTP{" "}
          </span>
          <span
            className={`${verifyOtp ? "" : "hidden"}  w-full h-full`}
            onClick={handleSentOtp}
          >
            verify Otp
          </span>
        </button>
      </form>
    </div>
  );
};

export default ForgotPassword;
