import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import star from "../../../assets/star.svg";
import share from "../../../assets/share.svg";
import heart from "../../../assets/heart.svg";
import user from "../../../assets/user.jpg";
import des1 from "../../../assets/des1.svg";
import des2 from "../../../assets/des2.svg";
import des3 from "../../../assets/des3.svg";
import security from "../../../assets/security.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
export const StayDetail = () => {
  const [stay, setStay] = useState({});
  const [data, setData] = useState();
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/user/${id}`)
      .then((data) => setData(data.data.data))
      .catch((e) => console.log(e));
  }, [id]);
  console.log(data);

  const date = new Date();
  date.setDate(date.getDate() + 1);
  const defaultDate = date.toISOString().slice(0, 10);

  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 5);
  const defaultBookDate = targetDate.toISOString().slice(0, 10);

  const [currentData, setCurrentDate] = useState(date);
  const [bookDate, setBookDate] = useState(targetDate);
  const [guestNumber, setGuestNumber] = useState(1);
  console.log(guestNumber);
  console.log(currentData);
  const Total =
    Math.round(
      (new Date(bookDate)?.getTime() - new Date(currentData)?.getTime()) /
        (1000 * 60 * 60 * 24)
    ) *
    guestNumber *
    data?.price;

    // const handleReserve=()=>{
    //   axios.post("")
    // }

  return (
    <div>
      <Navbar />
      <div className="px-[115px] pt-5">
        <div className="">
          <h1 className="font-bold text-2xl">
            {data?.title}
            {/* Ocean view Room - White town || Rock beach */}
          </h1>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex ">
            {" "}
            <img src={star} alt="rating" className="h-[20px] w-[20px]" />{" "}
            <p>
              4.83 ·121 reviews·{data?.address?.District_localty},{" "}
              {data?.country}
            </p>{" "}
          </div>
          <div className="flex w-[150px] justify-around">
            {" "}
            <img src={share} alt="share" />
            <p>Share</p> <img src={heart} alt="favourite" /> <p>Save</p>{" "}
          </div>
        </div>
        <div className="flex  w-[100%] h-[300px] rounded-[25px]">
          <div className="w-[50%]  rounded-l-lg overflow-hidden">
            <img
              src={data?.images[0]?.url}
              alt="img1"
              className="w-[100%] h-[100%]"
            />
          </div>
          <div className="flex flex-wrap w-[50%] h-[100%] pl-4 justify-between gap-3 ">
            <div className="w-[49%] h-[48%] overflow-hidden">
              <img
                src={data?.images[1]?.url}
                alt="img2"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="w-[48%] h-[48%]  rounded-tr-lg overflow-hidden">
              <img
                src={data?.images[2]?.url}
                alt="img3"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="w-[49%] h-[48%]  overflow-hidden">
              <img
                src={data?.images[3]?.url}
                alt="img4"
                className="w-[100%] h-[100%]"
              />
            </div>
            <div className="w-[48%] h-[48%]  rounded-br-lg overflow-hidden">
              <img
                src={data?.images[4]?.url}
                alt="img5"
                className="w-[100%] h-[100%]"
              />
            </div>
          </div>
        </div>
        <div className="w-100% flex">
          <div className=" w-[65%] mt-5">
            <div className=" w-3/4 border-b flex justify-between items-center h-28">
              {" "}
              <div>
                <p className="font-bold text-2xl">
                  {data?.stayType} hosted by Shubhangi
                </p>
                <p>
                  {data?.maxGuests} guests {data?.bedRooms} bedrooms{" "}
                  {data?.beds} beds {data?.bathrooms} bathroom
                </p>
              </div>
              <div className="rounded-[100%] w-10 h-10 overflow-hidden border">
                {" "}
                <img
                  src={user}
                  alt="imag"
                  className=" w-full h-full bg-slate-500 "
                />
              </div>
            </div>
            <div className="h-[250px] w-[75%] border-b">
              <div className="w-full h-1/3 flex">
                <div className=" flex justify-center items-center w-1/6 h-full">
                  <img src={des1} alt="d" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-xl">Self Check-in</p>
                  <p>You can check in with the building staff.</p>
                </div>
              </div>
              <div className="w-full h-1/3 flex">
                <div className=" flex justify-center items-center w-1/6 h-full">
                  <img src={des2} alt="f" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-xl">Sajjad is a Superhost</p>
                  <p>Superhosts are experienced, highly rated Hosts.</p>
                </div>
              </div>
              <div className="w-full h-1/3 flex">
                <div className=" flex justify-center items-center w-1/6 h-full">
                  <img src={des3} alt="g" />
                </div>
                <div className="flex flex-col justify-center">
                  <p className="font-bold text-xl">Dive right in</p>
                  <p>This is one of the few places in the area with a pool.</p>
                </div>
              </div>
            </div>
            <div className="h-[250px] w-[75%] border-b">
              <p className="py-8 ">{data?.description}</p>
            </div>
            <div className="h-[380px] w-[75%] border-b mt-2">
              <p className="font-bold text-xl">What this place offers</p>
              <div className="flex w-full h-full flex-wrap">
                <div className="w-full h-full flex flex-wrap overflow-hidden">
                  <div className="flex items-center w-1/2 h-[50px]">
                    <img src={share} alt="fg" />
                    <p className="ml-5">Valley view</p>
                  </div>
                  <div className="flex items-center w-1/2 h-[50px]">
                    <img src={share} alt="fg" />
                    <p className="ml-5">Valley view</p>
                  </div>
                  <div className="flex items-center w-1/2 h-[50px]">
                    <img src={share} alt="fg" />
                    <p className="ml-5">Valley view</p>
                  </div>
                  <div className="flex items-center w-1/2 h-[50px]">
                    <img src={share} alt="fg" />
                    <p className="ml-5">Valley view</p>
                  </div>
                  <div className="flex items-center w-1/2 h-[50px]">
                    <img src={share} alt="fg" />
                    <p className="ml-5">Valley view</p>
                  </div>
                  <div className="flex items-center w-1/2 h-[50px]">
                    <img src={share} alt="fg" />
                    <p className="ml-5">Valley view</p>
                  </div>
                  <div className="flex items-center w-1/2 h-[50px]">
                    <img src={share} alt="fg" />
                    <p className="ml-5">Valley view</p>
                  </div>
                  <div className="flex items-center w-1/2 h-[50px]">
                    <img src={share} alt="fg" />
                    <p className="ml-5">Valley view</p>
                  </div>
                  <div>
                    {" "}
                    <button className="border rounded-[25px]">
                      {" "}
                      show more
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-[35%] h-[520px] mt-7 sticky top-0 rounded-[20px] shadow-xl flex flex-col items-center">
            <div className="flex items-center px-3 pt-2 h-12 ">
              <p className="font-bold text-xl pr-3">₹ {data?.price}</p>{" "}
              <p className="pr-3">night</p>{" "}
              <img src={star} alt="df" className="w-3 h-3" />{" "}
              <span className="font-bold">4.76</span> <span>· 25 reviews</span>
            </div>
            <div className="w-5/6 h-32  rounded-[10px] overflow-hidden border">
              <div className="w-full h-1/2 flex ">
                <div className=" w-1/2 h-full ">
                  <input
                    type="date"
                    name=""
                    id=""
                    className="w-full h-full border-r "
                    defaultValue={defaultDate}
                    onChange={(e) => setCurrentDate(e.target.value)}
                  />
                </div>
                <div className=" w-1/2 h-full ">
                  <input
                    type="date"
                    name=""
                    id=""
                    className="w-full h-full"
                    onChange={(e) => setBookDate(e.target.value)}
                    defaultValue={defaultBookDate}
                  />
                </div>
              </div>
              <div className="h-1/2 border-t">
                {" "}
                <select
                  name="guests"
                  className="w-full h-full outline-none"
                  onChange={(e) => setGuestNumber(e.target.value)}
                >
                  <option value={1}>1 guest</option>
                  <option value={2}>2 guests</option>
                  <option value={3}>3 guests</option>
                  <option value={4}>4 guests</option>
                  <option value={5}>5 guests</option>
                </select>{" "}
              </div>
            </div>
            
            <button
              className="w-5/6 h-[50px] bg-[#FF385C] mt-3 rounded-md"
              // onClick={handleReserve}
            >
             <Link to={'/payments'} ><span className="font-bold">Reserve</span></Link>
            </button>
            <span className="mt-3">You won't be charged yet </span>
            <div className="flex justify-between w-5/6 mt-16">
              <span>Airbnb service fee</span>
              <span className="font-bold">₹ {(Total * 14) / 100}</span>
            </div>
            <div className="flex justify-between w-5/6 mt-5">
    
              <span className="font-bold">₹ {Total + (Total * 14) / 100}</span>
            </div>
          </div>
        </div>

        <div className="h-[450px]">
          <div className=" flex items-center h-[120px]">
            <div>
              <img
                src={user}
                alt="d"
                className="w-[50px] h-[50px] rounded-full border"
              />
            </div>
            <div className=" pl-10">
              <p className="font-bold text-xl">Hosted by Shubhangi</p>
              <p>Joined in August 2018</p>
            </div>
          </div>
          <div className="w-full h-[300px]">
            <div className="w-1/2">
              <div className="flex">
                {" "}
                <img src={star} alt="star" className="h-7 w-7 pr-3" />{" "}
                <p> 25 reviews</p>{" "}
                <img src={security} alt="secrty" className="px-3" />{" "}
                <p>Identity verified</p>
              </div>
              <p>
                Hello there,
                <br /> I am a corporate consultant and a part time Theater
                actress. I love solo travelling, painting, dancing and hosting.
              </p>
              <p className=" font-bold text-xl my-3">Co-Hosts</p>
              <div className="flex">
                <img
                  src={user}
                  alt="unf"
                  className="rounded-full h-7 w-7 border"
                />{" "}
                <p className="pr-5">Jaswant </p>{" "}
                <img
                  src={user}
                  alt="fdf"
                  className="rounded-full border h-7 w-7"
                />{" "}
                <p className="pr-5">Vivek</p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
