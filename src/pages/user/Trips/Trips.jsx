import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useSelector } from "react-redux";

// import test from "../../../assets/pro image 2.webp";
import Bill from "../../../components/Bill";
import { toast } from "react-toastify";

const Trips = () => {
  const { authToken } = useSelector((data) => data.auth);
  const [render,setRender]= useState(false)

  const [bookings, setBookings] = useState([]);
  const [showBill, setShowBill] = useState(false);
  const [billData,setBillData]= useState('')
  const search = false;
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://airbnb-2hlc.onrender.com/api/user/bookings/all", {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((data) => setBookings(data.data.data))

      .catch((e) => {
        if (e.response.status === 404) {
          setBookings([]);
        } else {
          toast("internel server error");
        }
      });
  }, [render]);

  const handleCancel = (_id) => {
    axios
      .delete("https://airbnb-2hlc.onrender.com/api/user/booking/cancel/stay", {
        headers: {
          Authorization: `Bearer ${authToken}`,
        },
        data: { _id: _id },
      })
      .then((response) => {
        if (response.status === 200) {
         toast("Booking canceled successfully");
         setRender(!render)
        } else {
         toast("Failed to cancel booking");
        }
      })
      .catch((error) => {
        console.log("Error during request:", error);
      });
  };
  console.log(bookings);
  // console.log(bookings.map(item=>item._doc));
  return (
    <div className="w-full h-full">
      <Navbar {...{ search }} />
      <div className="p-20 h-max  max-sm:p-2">
        <h1 className="text-3xl font-semibold py-5">Trips</h1>
        <div
          className={`"w-full h-max border-y py-5 flex flex-col " ${
            bookings.length === 0 ? " " : " hidden"
          }`}
        >
          <h2 className="text-2xl font-semibold"> No trips booked ...yet!</h2>
          <span className="text-base font-normal">
            Time to dust off your bags and start planning your next adventure
          </span>
          <button
            className="text-lg font-semibold border border-black rounded-md w-40 h-14 my-3"
            onClick={() => {
              navigate("/");
            }}
          >
            {" "}
            Start searching
          </button>
        </div>
        <div
          className={`"w-full h-max border-y py-5 flex flex-col  " ${
            bookings?.length !== 0 ? "" : "hidden"
          }`}
        >
          {bookings?.map((item) => {
            return (
              <div className="flex items-center justify-between max-sm:flex-col max-sm:items-start my-2 border rounded-md">
                <div className=" overflow-hidden flex flex-col ">
                  <img
                    src={item?.stay?.images[0].url}
                    alt="stayImage"
                    className="w-[100px] h-[60px] rounded-md"
                  />
                  <span className="font-semibold text-sm pt-2">
                    {item?.stay?.propertyType} ,
                    {item?.stay?.address.District_localty}
                  </span>
                </div>
               
                <span className="font-semibold text-sm">
                  Check In Date :{" "}
                  {item.checkInDate.slice(0, 10).split("-").reverse().join("-")}
                </span>
                <span className="font-semibold text-sm">
                  Check Out Date :{" "}
                  {item.checkOutDate
                    .slice(0, 10)
                    .split("-")
                    .reverse()
                    .join("-")}
                </span>
             
                <div className="flex ">
                <button
                  className="bg-red-500 rounded-md text-white font-semibold text-sm px-2 h-10 mr-3"
                  onClick={() =>{
                    setBillData(item)
                     setShowBill(!showBill)
                  }}
                >
                  Invoice
                </button>
                <button
                  className="bg-red-500 rounded-md text-white font-semibold text-sm w-[120px] h-10"
                  onClick={() => handleCancel(item._id)}
                >
                  Cancel Booking
                </button>
                </div>
                
              </div>
            );
          })}
        </div>
      </div>
      <div
        className={` " fixed top-0  bottom-0 left-0 right-0 m-auto bg-slate-600 opacity-40 z-[780]  " ${
          showBill ? "" : "hidden"
        }`}
      >
        <div
          className=" sticky top-0 left-2  rounded-full font-bold text-base  hover:cursor-pointer border w-6 h-6 flex justify-center items-center bg-white "
          onClick={() => setShowBill(!showBill)}
        >
          x
        </div>
      </div>
      <div
        className={` " fixed top-0 bottom-0 left-0 right-0 m-auto w-1/2 max-sm:w-full  overflow-scroll bg-white z-[900] pt-10 " ${
          showBill ? "" : "hidden"
        }`}
      >
       
        <Bill {...{ showBill, setShowBill,billData }} />
      </div>

      <Footer />
    </div>
  );
};

export default Trips;
