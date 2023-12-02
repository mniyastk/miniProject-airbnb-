import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProperty } from "../../../redux/slices";

const Location = () => {
  const [countries, setCountries] = useState([]);
//   console.log(countries[0].flags.svg);
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flags")
      .then((data) => setCountries(data.data))
      .catch((er) => console.log(er));
  }, []);
  const {property} = useSelector(data=>data.data)
  console.log(property)
  const dispatch = useDispatch()

  return (
    <div className="w- 1/2">
      <div className="w-full">
        <div className="w-full">
          <h1 className="text-[32px] font-semibold leading-[36px] py-5 ">
            Where's your place located?
          </h1>{" "}
          <p className="font-semibold text-base pt-1">
            Your address is only shared with guests after they’ve made a
            reservation.
          </p>
        </div>
      </div>
      <div className="w-full rounded-md">
        <select name="" id="" className="w-full h-[50px] font-semibold " onChange={(e)=>{
                dispatch(addProperty({property:"country",data:e.target.value}))
              }}>
          {countries.map((item) => {
            return (
              <option className="" >
                {item.name.common}
                <img src={item.flags.png} alt="" />
              </option>
              
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Location;
