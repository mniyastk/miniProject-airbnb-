import React from "react";
import Upload from "../../../../assets/imageUpload.svg";
const Two = () => {
  return (
    <div className="w-1/2 h-max ">
      <div className=" pl-2">
        <h1 className="text-[32px] font-semibold leading-[36px] py-5 ">
          Add some photos of your flat/apartment
        </h1>
        <p className="text-lg font-normal">
          You'll need 5 photos to get started. You can add more or make changes
          later.
        </p>
      </div>
      <div className="w-[85%] h-[300px]  m-3 border-black border-dotted border-2 flex justify-center items-center">
        <div className='flex flex-col items-center justify-center'> <img src={Upload} alt="UpladImage" className="hover:cursor-pointer" />
        <p>Choose at least 5 photos </p>
        <p>Click above to Upload Images</p>
        </div>
       
      </div>
    </div>
  );
};

export default Two;
