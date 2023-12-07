import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../redux/slices";

const CountButton = ({ data }) => {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();

  const decrement = (previousCount) => {
    if (previousCount > 1) {
      setCount((prevCount) => prevCount - 1);
    }
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    const handleDispatch = async () => {
      await dispatch(addProperty({ property: data, data: count }));
    };

    if (count !== 1) {
      handleDispatch();
    }
  }, [count, dispatch, data]);

  return (
    <div className="w-[80px] h-[50px] flex justify-center items-center">
      <button
        onClick={() => decrement(count)}
        className="w-6 h-6  rounded-full border"
      >
        -
      </button>
      <span className="p-2 w-5 flex items-center justify-center">{count}</span>
      <button
        onClick={() => increment(count)}
        className="w-6 h-6  rounded-full border"
      >
        +
      </button>
    </div>
  );
};

export default CountButton;
