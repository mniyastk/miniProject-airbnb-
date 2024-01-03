import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../../../../redux/slices";
import axios from "axios";
import { toast } from "react-toastify";
const Price = () => {
  const { property } = useSelector((data) => data.data);
  const { authToken } = useSelector((data) => data.auth);
  const file = property.images;
  console.log(file);
  console.log(property);
  const handleSubmission = () => {
    dispatch(addProperty({ property: "price", data: price }));
    console.log(property);
  };
  const datas = {
    property: {
      property,
    },
  };

  const dispatch = useDispatch();
  const [price, setPrice] = useState("1000");
  const formData = new FormData();
  formData.append("property", JSON.stringify(datas.property));
  for (let i = 0; i < file.length; i++) {
    formData.append("image", file[i]);
  }

  const handleClick = async () => {
    await axios
      .post("http://localhost:4000/api/host/addlisting", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
          Authorization:`Bearer ${authToken}`
        },
      })
      .then(() => toast("Your new listing is waiting for verfication"))
      .catch(() => toast("Listing failed"));
  };

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
          onClick={handleSubmission}
        >
          confirm
        </button>
        <button
          onClick={handleClick}
          className="bg-green-500 w-20 h-8 rounded-md font-semibold text-sm"
        >
          Add Property
        </button>
      </div>
    </div>
  );
};

export default Price;
