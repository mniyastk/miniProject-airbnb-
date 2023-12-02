import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addListings, addProperty } from "../../../../redux/slices";
const Price = () => {
  const { property } = useSelector((data) => data.data);
  const { listings } = useSelector((data) => data.data);
  console.log(listings);
  console.log(property);
  const dispatch = useDispatch();
  const [price, setPrice] = useState("1000");
  return (
    <div className="w-1/2 h-max">
      <h1 className="text-[32px] font-semibold leading-[36px] py-5 ">
        Now, set your price
      </h1>
      <p className="text-lg font-normal">You can change it anytime.</p>
      <h1 className="font-extrabold text-9xl">₹{price}</h1>

      <input
        type="range"
        name=""
        id=""
        min="1000"
        max={"100000"}
        onChange={(e) => setPrice(e.target.value)}
        className="w-full h-10 outline-none"
      />
      <div className="flex justify-between items-center h-[150px]">
        {" "}
        <button
          className="bg-red-500 w-20 h-8 rounded-md font-semibold text-sm"
          onClick={() =>
            dispatch(addProperty({ property: "price", data: price }))
          }
        >
          confirm
        </button>
        <button
          className="bg-green-500 w-20 h-8 rounded-md font-semibold text-sm text-white "
          onClick={() => {
            dispatch(addListings(property));
          }}
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default Price;
