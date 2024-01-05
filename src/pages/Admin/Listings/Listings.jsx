import React, { useEffect, useState } from "react";
import { StayCard } from "../../../components/stayCard";
import axios from "axios";
import { useSelector } from "react-redux";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const favourite = false;
const {adminToken} = useSelector(data=>data.admin)
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/listings",{headers:{
        Authorization:`Bearer ${adminToken}`
      }})
      .then((res) => {
        setListings(res.data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 ">
      {listings?.map((data, idx) => (
        <StayCard {...{ data, favourite }} key={idx} />
      ))}
    </div>
  );
};

export default Listings;
