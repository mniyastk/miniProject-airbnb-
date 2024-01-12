import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ResetPassword = () => {
    const navigate = useNavigate()
  const form = useForm();
  const { register, watch, formState, handleSubmit } = form;
  const { errors } = formState;
  const password = watch("password");
  const params = new URLSearchParams(location.search);
  const email = JSON.parse(decodeURIComponent(params.get("data")));
  console.log(errors);

  const handlePassword = () => {
    axios
      .post("http://localhost:4000/user/resetPassword", {
        email: email,
        password: password,
      })
      .then((res) =>{
    //   navigate('/')
console.log(res);
      toast("password changed successfully")})
      .catch((e) => console.log(e));
  };
  return (
    <div className="w-full h-screen flex justify-center items-center bg-slate-100 ">
      <div className="w-1/2 h-4/5 flex flex-col justify-center items-center bg-white max-sm:w-full  m-4 ">
        <form
          className="w-3/4 h-4/6 flex flex-col justify-center items-center max-sm:w-2/3 border"
          onSubmit={handleSubmit(handlePassword)}
          // ref={formRef}
        >
          <input
            type="password"
            placeholder="password"
            className={" w-5/6 border rounded-md h-12 pl-2 outline-1 "}
            {...register("password", {
              required: { value: true, message: "password is required" },
              minLength: { value: 5, message: "Minimum 5 charecters" },
            })}
          />
          <input
            type="password"
            placeholder="confirm password"
            className={" w-5/6 border rounded-md h-12 pl-2 outline-1 "}
            {...register("confirm_password", {
              required: { value: true, message: "password is required" },
              minLength: { value: 5, message: "Minimum 5 charecters" },
              validate: (fieldValue) => {
                // console.log(fieldValue)
                return fieldValue === password || "Passwords do not match";
              },
            })}
          />
          <p className="pt-1 font-semibold text-red-700 text-sm">
            {errors.confirm_password?.message}
          </p>
          <button className=" w-[150px] h-8 border mt-5 rounded-md bg-rose-600 font-bold text-sm text-white">
            {" "}
            Change password
          </button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
