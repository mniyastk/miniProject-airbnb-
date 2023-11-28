import React, { useState } from "react";

const CountButton = () => {
  const [count, setCount] = useState(0);
  const decriment = (previousCount) => {
    if (count > 0) {
      setCount(previousCount - 1);
    }
  };
  const incriment = (previousCount) => {
    setCount(previousCount + 1);
  };
  return (
    <div className="w-[80px] h-[50px] flex justify-center items-center">
      <button
        onClick={() => decriment(count)}
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
