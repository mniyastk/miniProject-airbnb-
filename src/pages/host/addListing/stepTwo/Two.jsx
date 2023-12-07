import React, { useState } from "react";
import Upload from "../../../../assets/imageUpload.svg";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../../../../redux/slices";
const Two = () => {
  const [files, setFiles] = useState([]);

  const handleChange = (e) => {
    const file = e.target.files;
    console.log(file);
    setFiles(Array.from(file));
    console.log(files);
  };
  const { property } = useSelector((data) => data.data);
  console.log(property);
  const dispatch = useDispatch();
  const handleClick = () => {
    
    dispatch(addProperty({ property: "images", data: files }));
  };

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
        <div className="flex flex-col items-center justify-center">
          {" "}
          <img src={Upload} alt="UpladImage" className="hover:cursor-pointer" />
          <p>Choose at least 5 photos </p>
          <p>Click above to Upload Images</p>
          <div className="flex justify-center items-center">
            <input
              type="file"
              name=""
              id=""
              multiple
              onChange={handleChange}
              className="block w-full text-sm text-gray-500
      file:me-4 file:py-2 file:px-4
      file:rounded-lg file:border-0
      file:text-sm file:font-semibold
      file:bg-blue-600 file:text-white
      hover:file:bg-blue-700
      file:disabled:opacity-50 file:disabled:pointer-events-none
      dark:file:bg-blue-500
      dark:hover:file:bg-blue-400 "
            />

            <button
              className="bg-red-500 w-20 h-8 rounded-md font-semibold text-sm"
              onClick={handleClick}
            >
              Upload
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Two;
