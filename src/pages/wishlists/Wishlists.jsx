import React, { useEffect, useState } from "react";
import { Navbar } from "../../components/navbar";
import { Footer } from "../../components/footer";
import axios from "axios";
import { useSelector } from "react-redux";
import { StayCard } from "../../components/stayCard";

function Wishlists() {
  const {authToken}= useSelector(data=>data.auth)
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/stays/wishlists",{headers:{
        'Authorization':`Bearer ${authToken}`,
        "Content-Type":"application/json"

      }})
      .then((data) => setData(data.data.data))
      .catch((e) => console.log(e));
  }, []);
  return (
    <div>
      <Navbar />
      <div className="w-full  px-20 overflow-hidden">
        <h1 className="font-extrabold text-5xl  pt-20">Wishlists</h1>
        <div className="h-full bg-slate-100 flex flex-wrap justify-around overflow-scroll">
          {data.map((item)=>{
            return(
              <StayCard data={item}/>
            )
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Wishlists;
