import React, { useEffect, useState } from "react";
import { StayCard } from "../../../components/stayCard";
import axios from "axios";

const Listings = () => {
  const [listings, setListings] = useState([]);
  const favourite = false;

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/admin/listings")
      .then((res) => {
        // Update the state with the fetched data
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
