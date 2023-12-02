import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../../../../redux/slices";

const Four = () => {
  const { property } = useSelector((data) => data.data);
  console.log(property);
  const dispatch = useDispatch();
  const [description, setDescription] = useState("");
  return (
    <div className="w-1/2 h-max">
      <h1 className="text-[32px] font-semibold leading-[36px] py-5 ">
        {" "}
        Create your description
      </h1>
      <p className="text-lg font-normal">
        Share what makes your place special.
      </p>
      <textarea
        name=""
        id=""
        cols="70"
        rows="7"
        className="border-2 border-black rounded-md mt-2"
        onChange={(e) => setDescription(e.target.value)}
      ></textarea>
      <button
        className="bg-red-500 w-20 h-8 rounded-md font-semibold text-sm"
        onClick={() =>
          dispatch(addProperty({ property: "description", data: description }))
        }
      >
        {" "}
        confirm
      </button>
    </div>
  );
};

export default Four;
