import React from "react";

const StepOne = () => {
  return (
    <div className="flex h-full w-ful justify-center items-center">
      <div className=" w-3/4 flex ">
        <div className="w-3/5">
          <h5 className="text-xl font-bold py-3">Step 1</h5>
          <h1 className="text-5xl font-extrabold py-3">
            Tell us about your place
          </h1>
          <p className=" text-base font-semibold py-3">
            In this step, we'll ask you which type of property you have and if
            guests will book the entire place or just a room. Then let us know
            the location and how many guests can stay.
          </p>
        </div>
        <div className=" w-2/5">
          <video width="640" height="360" autoPlay>
            <source
              src="https://stream.media.muscache.com/zFaydEaihX6LP01x8TSCl76WHblb01Z01RrFELxyCXoNek.mp4?v_q=high"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default StepOne;
