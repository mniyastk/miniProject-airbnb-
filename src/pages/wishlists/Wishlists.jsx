import React, { useContext, useEffect, useState } from "react";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import axios from "axios";
import { useSelector } from "react-redux";
import { StayCard } from "../../components/stayCard";
import { myContext } from "../../App";

function Wishlists() {
  const {authToken}= useSelector(data=>data.auth)
  const {favouritedStays,setFavouritedStays} = useContext(myContext)
  console.log(favouritedStays)
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/stays/wishlists",{headers:{
        'Authorization':`Bearer ${authToken}`,
        "Content-Type":"application/json"

      }})
      .then((data) => setFavouritedStays(data.data.data))
      .catch((e) => console.log(e));
  }, []);
  
  return (
    <div>
      <Navbar />
      <div className="w-full  px-12 overflow-hidden">
        <h1 className="font-extrabold text-5xl  pt-20">Wishlists</h1>
        <div className="h-full  grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 justify-start overflow-scroll gap-x-3 pt-20 pl-2">
          {favouritedStays.map((data,index)=>{
            return(
              <StayCard {...{data,favouritedStays}} key={index}/>
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Wishlists;
