import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../../../redux/slices";

const Address = () => {
  const [address, setAddress] = useState({
    plot: "",
    NearbyLandmark: "",
    StreetAddress: "",
    District_localty: "",
    city_town: "",
    State_UnionTerritory: "",
    PIN: "",
  });
  console.log(address);
  const handleChange = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setAddress({ ...address, [name]: value });
  };

  const { property } = useSelector((data) => data.data);
  console.log(property);
  const dispatch = useDispatch();
  return (
    <div className="pt-5 h-full">
      <div>
        <h1 className="font-bold text-2xl">Confirm your address </h1>
      </div>
      <p className="font-light text-sm mt-3">
        Your address is only shared with guests after they've made a reservation
        .
      </p>
      <div className="h-3/4 rounded-md overflow-hidden border">
        <div className="h-[14.3%] border-collapse border">
          {" "}
          <input
            className="w-full h-full px-4 text-sm"
            type="text"
            name="plot"
            placeholder="Plot,house,etc. (if applicable)"
            onChange={handleChange}
          />{" "}
        </div>
        <div className="h-[14.3%] border-collapse border">
          {" "}
          <input
            className="w-full h-full px-4 text-sm"
            type="text"
            placeholder="Street address"
            name="StreetAddress"
            onChange={handleChange}
          />{" "}
        </div>
        <div className="h-[14.3%] border-collapse border">
          {" "}
          <input
            className="w-full h-full px-4 text-sm"
            type="text"
            name="NearbyLandmark"
            placeholder="Nearby landmark (if applicable)"
            onChange={handleChange}
          />{" "}
        </div>
        <div className="h-[14.3%] border-collapse border">
          {" "}
          <input
            className="w-full h-full px-4 text-sm"
            type="text"
            placeholder="District/localty (if applicable)"
            name="District_localty"
            onChange={handleChange}
          />{" "}
        </div>
        <div className="h-[14.3%] border-collapse border">
          {" "}
          <input
            className="w-full h-full px-4 text-sm"
            type="text"
            placeholder="city/town"
            name="city_town"
            onChange={handleChange}
          />{" "}
        </div>
        <div className="h-[14.3%] border-collapse border">
          {" "}
          <input
            className="w-full h-full px-4 text-sm"
            type="text"
            placeholder="State/Union territory"
            name="State_UnionTerritory"
            onChange={handleChange}
          />{" "}
        </div>
        <div className="h-[14.3%] border-collapse border">
          {" "}
          <input
            className="w-full h-full px-4 text-sm"
            type="text"
            placeholder="PIN code"
            name="PIN"
            onChange={handleChange}
          />{" "}
        </div>
      </div>
      <button
        className="w-20 h-10 bg-red-500 rounded-md mt-3 font-semibold text-base text-white "
        onClick={() => {
          dispatch(addProperty({ property: "address", data: address }));
        }}
      >
        confirm
      </button>
    </div>
  );
};

export default Address;
