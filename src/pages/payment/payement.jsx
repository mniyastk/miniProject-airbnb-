import React, { useState } from "react";
import logo from "../../assets/pngegg 1.png";
import globe from "../../assets/image 1.svg";
import insta from "../../assets/insta.svg";
import leftArrow from "../../assets/leftArrow.svg";
import ins from "../../assets/icons8-instagram.svg";
import twiiter from "../../assets/twiiter.svg";
// import sample from "../../assets/pro image 1.webp";

import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";

const Payment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { authToken } = useSelector((data) => data.auth);

  const params = new URLSearchParams(location.search);
  const data = JSON.parse(decodeURIComponent(params.get("data")));
  const stay = data?.stay?._id;
  const checkData = {
    data: {
      check_in_date: data.checkInDate,
      check_out_date: data.checkOutDate,
      number_of_guests: data.maxGuests,
      total: data.total,
      serviceFee: data.serviceFee,
      nights: data.nights,
      paymentTime:data.paymentRecievedTime,

    },
  }

  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const day = Math.round(
    (new Date(data?.checkOutDate)?.getTime() -
      new Date(data?.checkInDate)?.getTime()) /
      (1000 * 60 * 60 * 24)
  );
  const Total = day * data?.stay?.price * data?.maxGuests;

  const initPayment = (datas) => {
    const options = {
      key: "rzp_test_honHfX5R4mjKV3",
      amount: datas.amount,
      currency: datas.currency,
      name: data?.stay?.title,
      description: "Test Payment",
      image: data?.stay?.images[0]?.url,
      order_id: datas.id,
      handler: async (response) => {
        try {
          const { data } = await axios.post(
            "https://airbnb-2hlc.onrender.com/api/user/booking/order/verify",
            { response }
          );
          console.log(data)
          if (data) {
            axios
              .post(
                `https://airbnb-2hlc.onrender.com/api/user/booking/${stay}`,
                checkData,
                {
                  headers: {
                    Authorization: `Bearer ${authToken}`,
                    "Content-Type": "application/json",
                  },
                }
              )
              .then((res) => {
                console.log(res);
                if (res.status === 200) {
                  toast("stay booked successfully");
                }
              })
              .catch((err) => console.log(err));
          }
          console.log(data);
        } catch (error) {
          console.log(error);
        }
      },
    };
    const razorpayIns = new window.Razorpay(options);
    razorpayIns.open();
  };

  const handlePayment = () => {
    axios
      .post("http://localhost:4000/api/user/booking/order/create", {
        data: { amount: 40000 },
      })
      .then((data) => {
        console.log(data);
        initPayment(data.data.data);
      })
      .catch((e) => console.log(e));
  };
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
                  <span className="font-semibold text-sm">
                    {data?.checkInDate.slice(8, 10)}-{" "}
                    {data.checkOutDate.slice(8, 10)}{" "}
                    {
                      months[
                        new Date(data.checkOutDate.slice(0, 10)).getMonth()
                      ]
                    }
                  </span>
                </div>
                <div className="flex justify-end items-center p-2 text-lg font-bold underline hover:cursor-pointer">
                  {" "}
                  Edit
                </div>
              </div>
              <div className="h-1/2 w-full flex justify-between items-center">
                <div>
                  <h4 className="text-xl font-bold">Guests</h4>{" "}
                  <span className="font-semibold text-sm">
                    {data.maxGuests} guest
                  </span>
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

            <button
              className="w-[200px] h-14 bg-pink-600 rounded-md text-white text-base p-3 font-semibold flex justify-center items-center mt-4 mb-10 "
              onClick={handlePayment}
            >
              Confirm and pay{" "}
            </button>
          </div>

          <div className="w-1/2 h-ful relative p-10 ">
            <div className=" h-[414px] w-9/10 rounded-lg border sticky top-20 p-5 ">
              <div className="flex items center h-1/3 p-2 border-b pb-4">
                <div className="rounded-md overflow-hidden w-[120px] ">
                  <img
                    src={data?.stay?.images[0]?.url}
                    alt="sample"
                    className="object-cover w-full h-full"
                  />
                </div>
                <div className="pl-3">
                  <span className="text-sm ">{data?.stay?.stayType}</span>
                  <p className="text-base font-semibold">{data?.stay?.title}</p>
                </div>
              </div>
              <div className="border-b h-[180px]">
                <h2 className="font-bold text-2xl p-4 height  ">
                  Price details
                </h2>
                <div className="flex py-1 justify-between items-center ">
                  <span>
                    {" "}
                    ₹{data?.stay?.price} x {day} nights{" "}
                  </span>{" "}
                  <span> ₹{Total} </span>
                </div>
                <div className="flex py-1 justify-between items-center ">
                  <span> Airbnb service fee </span>{" "}
                  <span> ₹{(Total * 14) / 100} </span>{" "}
                </div>
                {/* <div className="flex py-1 justify-between items-center">
                  <span> Taxes </span> <span> ₹{Total*14/100} </span>{" "}
                </div> */}
              </div>
              <div className="flex justify-between items-center h-[100px]">
                <span>Total (INR)</span>
                <span>₹{Total + (Total * 14) / 100}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[80px] border-t flex ">
        <div className="w-1/2 h-[100%] flex justify-center items-center">
          <p className="font-semibold text-sm">
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
