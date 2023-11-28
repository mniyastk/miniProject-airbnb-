import React from "react";

const StepTwo
 = () => {
  return (
    <div className="flex h-full w-ful justify-center items-center">
      <div className=" w-3/4 flex ">
        <div className="w-1/2">
          <h5 className="text-xl font-bold py-3">Step 2</h5>
          <h1 className="text-5xl leading-[54px] font-semibold py-3">
            Make your place<br/> stand out
          </h1>
          <p className=" text-lg font-normal py-3 ">
            In this step, you’ll add some of the amenities your place offers,
            plus 5 or more photos. Then you’ll create a title and description.
          </p>
        </div>
        <div className=" w-2/5">
          <video width="640" height="360" autoPlay>
            <source
              src="https://stream.media.muscache.com/H0101WTUG2qWbyFhy02jlOggSkpsM9H02VOWN52g02oxhDVM.mp4?v_q=high"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
