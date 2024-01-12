import React, { useState } from "react";
import test from "../../../assets/pro image 2.webp";
import Select from "react-select";
import { useForm } from "react-hook-form";
import axios from "axios";
import { HostNavBar } from "../../../components/hostNavbar";
const EditListing = () => {
  const form = useForm();
  const { register, handleSubmit, formState, watch } = form;
  const formData = new FormData();

  const [showImages, setImages] = useState(false);
  const params = new URLSearchParams(location.search);

  const editData = JSON.parse(decodeURIComponent(params.get("data")));

  const currentData = editData.data;

  const handleEdit = (data) => {
    const {
      images,
      maxGuests,
      beds,
      bathRooms,
      bedRooms,
      description,
      price,
      title,
    } = data;
    const body = {
      maxGuests,
      beds,
      bathRooms,
      bedRooms,
      description,
      price,
      title,
      host_id: currentData.host_id,
      property_id: currentData._id,
    };
    formData.append("editDatas", JSON.stringify(body));
    for (let i = 0; i < images.length; i++) {
      formData.append("image", images[i]);
    }
    axios
      .patch("http://localhost:4000/api/host/editListing", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((res) => {
        console.log(res);
      })
      .catch((e) => console.log(e));
  };
  return (
    <>
    <HostNavBar/>
    <div className="p-4 w-2/3">
      <h1 className="font-bold text-4xl my-5 text-center">Edit Listing</h1>
      <div className="grid grid-cols-2 mt-4 font-bold text-sm items-center justify-center ">
        <h1>Add images : </h1>
        <input className="border h-8 border-black rounded-md focus:outline-none border-collapse  flex justify-center items-center" type="file" multiple {...register("images")} />
      </div>
      <div className="grid grid-cols-2 mt-4 font-bold text-sm  ">
        <h1>Maximum Guests : </h1>
        <input className="border h-8 border-black rounded-md focus:outline-none border-collapse  " type="number" {...register("maxGuests")} />
      </div>
      <div className="grid grid-cols-2 mt-4 font-bold text-sm">
        <h1>Bed Rooms : </h1>
        <input className="border h-8 border-black rounded-md focus:outline-none border-collapse  " type="number" {...register("bedRooms")} />
      </div>
      <div className="grid grid-cols-2 mt-4 font-bold text-sm">
        <h1>Beds : </h1>
        <input className="border h-8 border-black rounded-md focus:outline-none border-collapse  " type="number" {...register("beds")} />
      </div>
      <div className="grid grid-cols-2 mt-4 font-bold text-sm">
        <h1>Bath Rooms : </h1>
        <input className="border h-8 border-black rounded-md focus:outline-none border-collapse  " type="number" {...register("bathRooms")} />
      </div>
      <div className="grid grid-cols-2 mt-4 font-bold text-sm">
        <h1>Title : </h1>
        <input className="border h-8 border-black rounded-md focus:outline-none border-collapse  " type="text" {...register("title")} />
      </div>
      <div className="grid grid-cols-2 mt-4 font-bold text-sm">
        <h1>Description : </h1>
        <textarea
        className="border h-8 border-black rounded-md focus:outline-none border-collapse "
          name=""
          id=""
          cols="30"
          rows="5"
          {...register("description")}
        ></textarea>
 
      </div>
      <div className="grid grid-cols-2 mt-4 font-bold text-sm">
        <h1>Price : </h1>
        <input className="border h-8 border-black rounded-md focus:outline-none border-collapse  " type="number" {...register("price")} />
      </div>
      <button className="mt-4 border bg-red-500 text-sm text-white font-bold p-2 rounded-md" onClick={handleSubmit(handleEdit)}> Edit Listing</button>
    </div>
    </>
    
  );
};

export default EditListing;
