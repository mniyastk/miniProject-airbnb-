import React, { useState } from "react";
import test from "../../../assets/pro image 2.webp";
import Select from "react-select";
const EditListing = () => {
  const options = [
    { value: "An entire place", label: "An entire place" },
    { value: "A room ", label: "A room" },
    { value: "A shared room", label: "A shared room" },
  ];
  const options1 = [
    { value: "Yurt", label: "Yurt" },
    { value: "Tent", label: "Tent" },
    { value: "Windmill", label: "Windmill" },
    { value: "Tree house", label: "Tree house" },
    { value: "Tower", label: "Tower" },
    { value: "Tiny home", label: "Tiny home" },
    { value: "House", label: "House" },
    { value: "Flat", label: "Flat" },
    { value: "Trullo", label: "Trullo" },
    { value: "Shepherd’s hut", label: "Shepherd’s hut" },
    { value: "Ryokan", label: "Ryokan" },
    { value: "Riad", label: "Riad" },
    { value: "Minsu", label: "Minsu" },
    { value: "Kezhan", label: "Kezhan" },
    { value: "House boat", label: "House boat" },
    { value: "Hotel", label: "Hotel" },
    { value: "Guest house", label: "Guest house" },
    { value: "Dome", label: "Dome" },
    { value: "Farm", label: "Farm" },
    { value: "Earth home", label: "Earth home" },
    { value: "Dammuso", label: "Dammuso" },
    { value: "Cycladic home", label: "Cycladic home" },
    { value: "Container", label: "Container" },
    { value: "Cave", label: "Cave" },
    { value: "Castle", label: "Castle" },
    { value: "Casa particular", label: "Casa particular" },
    { value: "Campervan", label: "Campervan" },
    { value: "Cabin", label: "Cabin" },
    { value: "Boat", label: "Boat" },
    { value: "Bed&breakfast", label: "Bed&breakfast" },
    { value: "Barn", label: "Barn" },
  ];

  const [showImages, setImages] = useState(false);
  const params = new URLSearchParams(location.search);

  const editData = JSON.parse(decodeURIComponent(params.get("data")));

  const currentData = editData.data;
  console.log(currentData.propertyType);
  const [edit, setEdit] = useState("");
  return (
    <div className="p-4 ">
      <h1 className="font-bold text-4xl my-5">Edit Listing</h1>
      <div>
        {/* <h1> Edit images</h1> */}
        <div className="w-1/2 h-[450px] bg-slate-100 rounded-md overflow:hidden relative ">
          <img src={test} alt="images" className="w-full h-full rounded-md" />
          <div
            className="border border-black bg-white absolute  z-20 bottom-4 right-40 flex items-center p-1 rounded text-sm font-bold gap-2 hover:cursor-pointer "
            onClick={() => setImages(!showImages)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "16px",
                width: "16px",
                fill: "currentcolor",
              }}
            >
              <path
                fillRule="evenodd"
                d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
              ></path>
            </svg>
            show all images
          </div>
          <div
            className="border border-black bg-white absolute  z-20 bottom-4 right-4 flex items-center p-1 rounded text-sm font-bold gap-2 hover:cursor-pointer "
            onClick={() => setImages(!showImages)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              aria-hidden="true"
              role="presentation"
              focusable="false"
              style={{
                display: "block",
                height: "16px",
                width: "16px",
                fill: "currentcolor",
              }}
            >
              <path
                fillRule="evenodd"
                d="M3 11.5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm-10-5a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3z"
              ></path>
            </svg>
            Add new Images
          </div>
          <div
            className={`${
              showImages ? "" : "hidden"
            } w-screen  z-30 bg-white p-4 absolute top-0 overflow-hidden rounded-sm `}
          >
            <div className="overflow-scroll relative grid justify-center lg:grid-cols-2 ">
              <div
                className="bg-red-100 overflow-scroll absolute"
                onClick={() => setImages(!showImages)}
              >
                X
              </div>
              {editData.data.images.map((item, index) => {
                return <img src={item.url} alt="images" key={index} />;
              })}
            </div>
          </div>
        </div>
      </div>
      <div className="flex my-3 gap-2 items-center ">
        <h2>Category : </h2>

        <Select options={options1}></Select>
        <button
          className="p-1 border bg-red-500 rounded-md text-white px-2"
          onClick={(e) => setEdit(e.target.value)}
        >
          edit
        </button>
      </div>
      <div className="flex">
        <h1>Stay Type : </h1>
        <Select options={options} ></Select>
      </div>
    </div>
  );
};

export default EditListing;
