import React, { useState } from "react";

const Price = () => {
  const [price, setPrice] = useState('1000');
  return (
    <div className="w-1/2 h-max">
      <h1 className="text-[32px] font-semibold leading-[36px] py-5 ">Now, set your price</h1>
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
    </div>
  );
};

export default Price;
