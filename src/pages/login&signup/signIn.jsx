import React, { useContext, useEffect, useRef, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { setAuthToken } from "../../redux/authSlice";
import { myContext } from "../../App";
import { useGoogleLogin } from "@react-oauth/google";

function SignIn({ setSignUp, setSignIn, signIn, signUp }) {
  const form = useForm();
  const formRef = useRef();
  const { register, handleSubmit, formState } = form;
  const { errors } = formState;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [googleAuth, setGoogleAuth] = useState(null);
  const { setFavouritedStays } = useContext(myContext);
  const handleClick = (data) => {
    axios
      .post("https://airbnb-2hlc.onrender.com/api/user/login", { data })
      .then((data) => {
        formRef.current.reset();
        dispatch(
          setAuthToken({
            token: data.data.data.token,
            user_id: data.data.data.user_id,
          })
        );
        toast.success("login successfull");
        axios
          .get("https://airbnb-2hlc.onrender.com/api/user/stays/wishlists", {
            headers: {
              Authorization: `Bearer ${data.data.data.token}`,
              "Content-Type": "application/json",
            },
          })
          .then((data) => setFavouritedStays(data.data.data))
          .catch((e) => console.log(e));
        setSignIn(false);
        navigate("/");
      })
      .catch((e) => {
        console.log(e.message);
        toast(e.response.data.message);
      });
  };

  const login = useGoogleLogin({
    onSuccess: (tokenresponse) => setGoogleAuth(tokenresponse),
    onError: (err) => console.log("login failed ", err),
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
              setSignIn(false);
              navigate("/");
            })
            .catch((err) => {
              console.log(err);
             toast(err.response.data.message)
            });
        })
        .catch((err) => toast(err.response.data.message));
    }
  }, [googleAuth]);

  return (
    <div className="w-3/4 flex flex-col justify-center items-center bg-white">
      <form
        className="w-full flex flex-col justify-center items-center"
        onSubmit={handleSubmit(handleClick)}
        ref={formRef}
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
        <span className="font-semibold text-xs mt-2">
          not an user ?{" "}
          <span
            className=" underline hover:cursor-pointer hover:text-blue-400 ml-1"
            onClick={() => {
              setSignIn(false);
              setSignUp(true);
            }}
          >
            click here to sign up
          </span>
        </span>
        {/* <input type="submit" value="dgdf" /> */}
      </form>
      <button className="gsi-material-button mt-4" onClick={() => login()}>
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
  );
}

export default SignIn;
