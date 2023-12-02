import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../../../../redux/slices";

const Three = () => {
  const { property } = useSelector((data) => data.data);
  console.log(property);
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  return (
    <div className="w-1/2 h-max">
      <h1 className="text-[32px] font-semibold leading-[36px] py-5 ">
        {" "}
        Now, let's give your flat/apartment a title{" "}
      </h1>
      <p className="text-lg font-normal">
        Short titles work best. Have fun with it – you can always change it
        later.
      </p>
      <textarea
        name=""
        id=""
        cols="70"
        rows="7"
        className="border-2 border-black rounded-md mt-2"
        onChange={(e) => setTitle(e.target.value)}
      ></textarea>
      <button
        className="bg-red-500 w-20 h-8 rounded-md font-semibold text-sm"
        onClick={() => dispatch(addProperty({ property: "title", data: title }))}
      >
        confirm
      </button>
    </div>
  );
};

export default Three;
