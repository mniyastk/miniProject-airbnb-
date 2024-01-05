import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PendingListings = () => {
  const navigate = useNavigate();
  const {adminToken} = useSelector(data=>data.admin)

  const [fetchData, setFetchData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/unverfiedStays",{headers:{
        Authorization:`Bearer ${adminToken}`
      }})
      .then((data) => setFetchData(data.data.data))
      .catch((e) => console.log(e));
  }, []);
  console.log(fetchData);
  return (
    <div className="w-full h-full ">
      {fetchData.map((item, idx) => {
        return (
          <div
            className=" w-full h-20 flex items-center justify-between border px-2"
            key={idx}
          >
            <img
              src={item?.images[0]?.url}
              alt="listing image"
              className="w-[15%] h-[90%] rounded"
            />
            <h1 className="font-semibold text-sm"> {item?.title} </h1>
            <h2 className="font-semibold text-sm">
              {" "}
              {item?.address?.District_localty}{" "}
            </h2>
            <button
              className="p-3 font-semibold text-sm text-white bg-red-500 rounded-xl"
              onClick={() =>
                navigate({
                  pathname: `/admin/pending/${item._id}`,
                  search: `?data=${encodeURIComponent(
                    JSON.stringify({ admin: true })
                  )}`,
                })
              }
            >
              {" "}
              view and verify
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default PendingListings;
