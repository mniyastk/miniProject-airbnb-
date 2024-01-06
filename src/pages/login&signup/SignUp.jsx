import React, { useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { setAuthToken } from "../../redux/authSlice";


export const SignUp = ({setSignUp,setSignIn,signIn,signUp}) => {
  const formRef = useRef();
  const form = useForm();
  const { register, control, handleSubmit, formState, watch } = form;
  const [googleAuth, setGoogleAuth] = useState(null);
  const navigate = useNavigate();
  const { errors } = formState;
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    axios
      .post("https://airbnb-2hlc.onrender.com/api/user/register", { data })
      .then(() => {
        formRef.current.reset();
        toast.success("User registration successfull");
        setTimeout(() => {
          setSignUp(false);
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

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => setGoogleAuth(tokenResponse),
    onError: (error) => console.log("Login failed", error),
  });
  useEffect(() => {
    if (googleAuth) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${googleAuth.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${googleAuth.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res) => {
          axios
            .post("https://airbnb-2hlc.onrender.com/api/user/google/registration", { res })
            .then((res) => {
              dispatch(
                setAuthToken({
                  token: res.data.token,
                  user_id: res.data.user_id,
                })
              );
              if (res.status === 200) {
                toast.success("User Logged in successfull");
              } else {
                toast.success("User registration successfull");
              }
              axios
                .get("https://airbnb-2hlc.onrender.com/api/user/stays/wishlists", {
                  headers: {
                    Authorization: `Bearer ${res.data.token}`,
                    "Content-Type": "application/json",
                  },
                })
                .then((data) => setFavouritedStays(data.data.data))
                .catch((e) => console.log(e));
              setSignUp(false);
              navigate("/");
            })
            .catch((err) => {
              console.log(err);
            });
        })
        .catch((err) => console.log(err));
    }
  }, [googleAuth]);

  return (
    <div className="w-full flex flex-col justify-center items-center h-full bg-white z-[999] rounded-md overflow-scroll">
       <div className="w-6 h-6  flex justify-center items-center rounded-full text-lg font-bold border hover:cursor-pointer absolute top-0 right-0 m-2 bg-black text-white" onClick={()=>setSignUp(!signUp)}>X</div>
      <form
        className="flex flex-col w-3/5 justify-center h-max "
        onSubmit={handleSubmit(onSubmit)}
        noValidate
        ref={formRef}
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
            minLength: { value: 5, message: "Minimum 5 charecters" },
            maxLength: { value: 25, message: "Maximum 25 charecters" },
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
      <span className="font-semibold text-xs mt-2">
        already an user ?{" "}
        <span
          className=" underline hover:cursor-pointer hover:text-blue-400 ml-1"
          onClick={() => {
            setSignUp(false);
            setSignIn(true)
          }}
        >
          click here to login
        </span>
      </span>
      <div
        className=" flex justify-center items-center mt-4"
        onClick={() => login()}
      >
        <button className="gsi-material-button">
          <div className="gsi-material-button-state"></div>
          <div className="gsi-material-button-content-wrapper">
            <div className="gsi-material-button-icon">
              <svg
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                style={{ display: "block" }}
              >
                <path
                  fill="#EA4335"
                  d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
                ></path>
                <path
                  fill="#4285F4"
                  d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.78 7.18l7.73 6c4.51-4.18 7.09-10.36 7.09-17.65z"
                ></path>
                <path
                  fill="#FBBC05"
                  d="M10.53 28.59c-.48-1.45-.76-2.99-.76-4.59s.27-3.14.76-4.59l-7.98-6.19C.92 16.46 0 20.12 0 24c0 3.88.92 7.54 2.56 10.78l7.97-6.19z"
                ></path>
                <path
                  fill="#34A853"
                  d="M24 48c6.48 0 11.93-2.13 15.89-5.81l-7.73-6c-2.15 1.45-4.92 2.3-8.16 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.98 6.19C6.51 42.62 14.62 48 24 48z"
                ></path>
                <path fill="none" d="M0 0h48v48H0z"></path>
              </svg>
            </div>
            <span className="gsi-material-button-contents">
              Sign in with Google
            </span>
            <span style={{ display: "none" }}>Sign in with Google</span>
          </div>
        </button>
      </div>
      <DevTool control={control} />
    </div>
  );
};
