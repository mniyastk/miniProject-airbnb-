import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../redux/slices";

const CountButton = ({ data }) => {
  console.log(data);
  const [count, setCount] = useState(0);
  const decriment = (previousCount) => {
    if (count > 0) {
      setCount(previousCount - 1);
      dispatch(addProperty({ property: data, data: count }));
    }
  };
  const incriment = (previousCount) => {
    setCount(previousCount + 1);
    dispatch(addProperty({ property: data, data: count }));
  };
  const { property } = useSelector((data) => data.data);
  const dispatch = useDispatch();
  console.log(property);

  return (
    <div className="w-[80px] h-[50px] flex justify-center items-center">
      <button
        onClick={() => {
          decriment(count);
        }}
        className="w-6 h-6  rounded-full border"
      >
        -
      </button>
      <span className="p-2 w-5 flex items-center justify-center">{count}</span>

      <button
        onClick={() => incriment(count)}
        className="w-6 h-6  rounded-full border"
      >
        +
      </button>
    </div>
  );
};

export default CountButton;
