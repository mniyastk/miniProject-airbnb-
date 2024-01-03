import React, { useContext, useEffect, useState } from "react";
import rightArrow from "../assets/rightArrow.svg";
import leftArrow from "../assets/leftArrow.svg";
import axios from "axios";
import { useSelector } from "react-redux";
import { myContext } from "../App";
export const StayCard = ({ data, favouritedStays,favourite }) => {

  
  const { authToken } = useSelector((data) => data.auth);
const {signIn, setSignIn}= useContext(myContext)

  const { setFavouritedStays } = useContext(myContext);
  // console.log(authToken);
  const [showArrow, setShowArrow] = useState(false);
  const imagesData = data?.images;

  const [cuurentImage, setCurrentImage] = useState(imagesData[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const [favColour, setFavColour] = useState("var(--ihf-tp-q)");
  const handleRight = (e) => {
    // console.log(data);
    e.stopPropagation();

    e.preventDefault();
    if (imageIndex < imagesData.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };
  const handleLeft = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };
  useEffect(() => {
    setCurrentImage(imagesData[imageIndex]);
  }, [imageIndex]);

  const handleFavourite = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if(authToken){
    if (favouritedStays?.some((obj) => obj._id === data._id)) {
      axios
        .delete(`http://localhost:4000/api/user/wishlists/${data._id}`, {
          headers: {
            Authorization: `Bearer ${authToken}`,
            "Content-Type": "application/json",
          },
        })
        .then((res) => {
          console.log(res);
          setFavouritedStays(prevData=>prevData.filter(item=>item._id!==data._id))
          setFavColour("var(--ihf-tp-q)");

        })
        .catch((e) => console.log(e));

    } else {
      axios
        .post(
          `http://localhost:4000/api/user/wishlists/${data._id}`,
          {},
          {
            headers: {
              Authorization: `Bearer ${authToken}`,
              "Content-Type": "application/json",
            },
          }
        )
        .then((res) => {
          console.log(res);
         
          setFavouritedStays((prevData)=>[...prevData,data])
          setFavColour("red");
        })
        .catch((e) => console.log(e));
      }
    }else{
      setSignIn(!signIn)
    }
  };

  useEffect(() => {
    if (favouritedStays?.some((obj) => obj._id === data._id)) {
      setFavColour("red");
    }
  }, [favouritedStays]);
  return (
    <div className=" w-[305px] h-[390px] flex flex-col relative ">
      <div
        className="w-[300px] h-[285px] rounded-md overflow-hidden relative "
        onMouseEnter={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
      >
        <div className={`" absolute top-3 right-3 " ${favourite===false?"hidden":""} `}>
          <svg
            onClick={handleFavourite}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            aria-hidden="true"
            role="presentation"
            focusable="false"
            style={{
              display: "block",
              fill: favColour,
              height: "24px",
              width: "24px",
              stroke: "white",
              strokeWidth: 2,
              overflow: "visible",
            }}
          >
            <path d="M16 28c7-4.73 14-10 14-17a6.98 6.98 0 0 0-7-7c-1.8 0-3.58.68-4.95 2.05L16 8.1l-2.05-2.05a6.98 6.98 0 0 0-9.9 0A6.98 6.98 0 0 0 2 11c0 7 7 12.27 14 17z"></path>
          </svg>
        </div>
        <img
          src={cuurentImage?.url}
          alt="images"
          className="w-[300px] h-[285px]"
        />
        <div
          className={`" top-[125px] border rounded-full bg-white w-[35px] h-[35px] p-[10px] absolute left-2 hover:cursor-pointer "
          ${!showArrow ? "hidden" : ""}
          `}
          onClick={handleLeft}
        >
          <img src={leftArrow} alt="leftArrow" className="" />
        </div>
        <div
          className={`" absolute right-2 top-[125px] border rounded-full hover:cursor-pointer bg-white w-[35px] h-[35px] p-[10px]  " ${
            !showArrow ? "hidden" : ""
          }`}
          onClick={handleRight}
        >
          <img src={rightArrow} alt="rightArrow" className="" />
        </div>
      </div>

      <span className="text-sl font-semibold pl-2 mt-3 ">
        {data?.address?.District_localty},{data?.country}
      </span>
      <span className="text-xs font-normal pl-2"></span>
      <span className="text-xs font-normal pl-2">10-12-23</span>
      <span className="text-xs font-semibold pl-2 ">₹ {data?.price} night</span>
    </div>
  );
};
