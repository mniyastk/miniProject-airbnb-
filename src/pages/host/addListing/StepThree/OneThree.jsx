import React from "react";


const OneThree = () => {
 
  return (
    <div className="flex h-full w-ful justify-center items-center">
      <div className=" w-3/4 flex ">
        <div className="w-1/2">
          <h5 className="text-xl font-bold py-3">Step 3</h5>
          <h1 className="text-5xl leading-[54px] font-semibold py-3">
            Finish up and publish
          </h1>
          <p className=" text-lg font-normal py-3 ">
            Finally, you’ll choose if you'd like to start with an experienced
            guest, then you'll set your nightly price. Answer a few quick
            questions and publish when you're ready.
          </p>
        </div>
        <div className=" w-2/5">
          <video width="640" height="360" autoPlay>
            <source
              src="https://stream.media.muscache.com/KeNKUpa01dRaT5g00SSBV95FqXYkqf01DJdzn01F1aT00vCI.mp4?v_q=high"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
     
      </div>
    </div>
  );
};

export default OneThree;
