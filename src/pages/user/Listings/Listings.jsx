import React, { useEffect, useState } from "react";
import { Navbar } from "../../../components/navbar";
import { Footer } from "../../../components/footer";
import { StayCard } from "../../../components/stayCard";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const HostListings = () => {
  const { authToken } = useSelector((data) => data.auth);
  const search = false;
  const favourite = false;
  const [listings, setListings] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/host/listings", {
        headers: {
          Authorization: `Bearer ${authToken}`,
          "Content-Type": "application/json",
        },
      })
      .then((res) => setListings(res.data.data))
      .catch((err) => console.log(err));
  }, []);
  console.log(listings);
  return (
    <div className="">
      <Navbar {...{ search }} />
      <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 pl-10 mt-8">
        {listings.map((data, idx) => {
          return (
            <Link
              to={{
                pathname: `/user/stay/${data._id}`,
                search: `?data=${encodeURIComponent(
                  JSON.stringify({ admin: false, host: true  })
                )}`,
              }}
            >
              <StayCard {...{ data, favourite }} key={idx} />
            </Link>
          );
        })}
      </div>
      <Footer />
    </div>
  );
};

export default HostListings;
