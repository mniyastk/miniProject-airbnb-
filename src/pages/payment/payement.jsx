import React from "react";
import logo from "../../assets/pngegg 1.png";
import globe from "../../assets/image 1.svg";
import insta from "../../assets/insta.svg";
import leftArrow from "../../assets/leftArrow.svg";
import ins from "../../assets/icons8-instagram.svg";
import twiiter from "../../assets/twiiter.svg";
import sample from "../../assets/pro image 1.webp";

import { Link, useLocation, useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
 const location = useLocation()
 const params = new URLSearchParams(location.search);
const data = JSON.parse(decodeURIComponent(params.get('data')))
  console.log(data)
  return (
    <div className="flex flex-col h-max">
      <div className="w-full h-[80px] border-b flex items-center">
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[104px] h-[31px] ml-10 hover:cursor-pointer"
          />
        </Link>
      </div>
      <div className=" h-max pt-20 pl-20 pr-20">
        <div className="flex justify-start items-center ">
          <button
            className="w-10 h-10 rounded-full hover:bg-slate-100 p-3"
            onClick={() => navigate(-1)}
          >
            <img src={leftArrow} alt="leftArrow" />
          </button>
          <h1 className="text-3xl font-extrabold ml-4">Confirm and pay</h1>
        </div>
        <div className="flex w-full h-max mt-5">
          <div className="w-1/2 h-ful p-10 flex flex-col">
            <h2 className="font-extrabold text-2xl">Your trip</h2>
            <div className="w-full h-[150px] border-b">
              <div className="h-1/2 w-full flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold">Dates</h4>{" "}
                  <span className="font-semibold text-sm">18-23 Dec</span>
                </div>
                <div className="flex justify-end items-center p-2 text-lg font-bold underline hover:cursor-pointer">
                  {" "}
                  Edit
                </div>
              </div>
              <div className="h-1/2 w-full flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold">Guests</h4>{" "}
                  <span className="font-semibold text-sm">1 guest</span>
                </div>
                <div className="flex justify-end items-center p-2 text-lg font-bold underline hover:cursor-pointer">
                 
                  Edit
                </div>
              </div>
            </div>
            <div className=" w-full h-[120px] border-b">
              <h2 className="font-extrabold text-2xl my-5">
                Cancellation policy
              </h2>
              <p>
                <span className="font-semibold text-base">
                  Free cancellation before 12:00 pm on 17 Dec .
                </span>{" "}
                Cancel before check-in on 18 Dec for a partial refund.
              </p>
            </div>
            <div className=" w-full h-[220px] border-b">
              <h2 className="font-extrabold text-2xl my-5">Ground rools</h2>
              <p>
                We ask every guest to remember a few simple things about what
                makes a great guest.
              </p>
              <ul className="mt-4  pl-5 list-disc">
                <li>Follow the house rules</li>
                <li>Treat your Host’s home like your own</li>
              </ul>
            </div>
            <div className=" h-max">
              <p className="text-xs pt-10">
                By selecting the button below, I agree to the Host's House
                Rules, Ground rules for guests, Airbnb's Rebooking and Refund
                Policy and that Airbnb can charge my payment method if I’m
                responsible for damage.
              </p>
            </div>
            <button className="w-[200px] h-14 bg-pink-600 rounded-md text-white text-base p-3 font-semibold flex justify-center items-center mt-4 mb-10 ">
              {" "}
              Confirm and pay{" "}
            </button>
          </div>

          <div className="w-1/2 h-ful relative p-10 ">
            <div className=" h-[414px] w-9/10 rounded-lg border sticky top-20 p-5 ">
              <div className="flex items center h-1/3 p-2 border-b pb-4">
                <div className="rounded-md overflow-hidden w-[120px] ">
                  <img
                    src={sample}
                    alt="sample"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="pl-3">
                  <span className="text-sm ">Entire cottage</span>
                  <p className="text-base font-semibold">
                    Villetta, cozy and uber modern cottage.
                  </p>
                </div>
              </div>
              <div className="border-b h-[180px]">
                <h2 className="font-bold text-2xl p-4 height  ">
                  Price details
                </h2>
                <div className="flex py-1 justify-between items-center ">
                  <span> ₹7,500 x 5 nights </span> <span> ₹37,500 </span>
                </div>
                <div className="flex py-1 justify-between items-center ">
                  <span> Airbnb service fee </span> <span> ₹5,294.14 </span>{" "}
                </div>
                <div className="flex py-1 justify-between items-center">
                  <span> Taxes </span> <span> ₹4,500 </span>{" "}
                </div>
              </div>
              <div className="flex justify-between items-center h-[100px]">
                <span>Total (INR)</span>
                <span>₹47,294.14</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] border-t flex ">
        <div className="w-1/2 h-[100%] flex justify-center items-center">
          <p className="">
            © 2023 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details
          </p>{" "}
        </div>
        <div className="w-1/2  flex justify-end items-center">
          <img src={globe} alt="glo" className="pr-3" />
          <p className="pr-3">English (IN) ₹ INR</p>{" "}
          <img src={insta} alt="facebook" className="pr-3" />
          <img src={ins} alt="instagram" className="pr-3" />{" "}
          <img src={twiiter} alt="twitter" className="pr-20" />
        </div>
      </div>
    </div>
  );
};

export default Payment;
