import React, { useEffect, useState } from "react";
// import cardImage from '../assets/Rectangle 9.svg'
import rightArrow from "../assets/rightArrow.svg";
import leftArrow from "../assets/leftArrow.svg";
import favourite from "../assets/favourite.svg";
import axios from "axios";
import { useSelector } from "react-redux";
export const StayCard = ({ data }) => {

  const { authToken } = useSelector((data) => data.auth);
  console.log(authToken)
  const [showArrow, setShowArrow] = useState(false);
  const imagesData = data?.images;
 
  const [cuurentImage, setCurrentImage] = useState(imagesData[0]);
  const [imageIndex, setImageIndex] = useState(0);
  const handleRight = (e) => {
    console.log(data)
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
    axios
      .post(`http://localhost:4000/api/user/wishlists/${data._id}`,{}, {headers:{
        'Authorization': `Bearer ${authToken}`,
        'Content-Type':'application/json'
        
        
      }}).then(res=>console.log(res))
      .catch((e) => console.log(e));
  };
  return (
    <div className=" w-[305px] h-[390px] flex flex-col ">
      <div
        className="w-[300px] h-[285px] rounded-md overflow-hidden relative "
        onMouseEnter={() => setShowArrow(true)}
        onMouseLeave={() => setShowArrow(false)}
      >
        <div className="absolute top-3 right-3">
          <img
            src={favourite}
            alt="wishlists-icon"
            className="text-red-600"
            onClick={handleFavourite}
          />
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
