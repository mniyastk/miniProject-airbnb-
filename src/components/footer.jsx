import React from "react";
import globe from "../assets/image 1.svg";
import insta from "../assets/insta.svg";
import ins from "../assets/icons8-instagram.svg";
import twiiter from "../assets/twiiter.svg";
export const Footer = () => {
  return (
    <div className="h-[410px] bg-[#F7F7F7] max-sm:h-max max-sm:pl-4">
      <div className="h-[80%] flex max-sm:flex-col">
        <div className="w-1/3  h-[100%] flex justify-center max-sm:w-full max-sm:justify-start">
          <ul className="pt-[40px]">
            <li className="mt-2 font-bold">Support</li>
            <li className="mt-2">Help Centre</li>
            <li className="mt-2">Get help with a safety issue</li>
            <li className="mt-2">AirCover</li>
            <li className="mt-2">Anti-discrimination</li>
            <li className="mt-2">Disability support</li>
            <li className="mt-2">Cancellation options</li>
            <li className="mt-2">Report neighbourhood concern</li>
          </ul>
        </div>
        <div className="w-1/3  flex justify-center pt-[40px]">
          <ul>
            <li className="mt-2 font-bold">Hosting</li>
            <li className="mt-2">Airbnb your home</li>
            <li className="mt-2">AirCover for Hosts</li>
            <li className="mt-2">Hosting resources</li>
            <li className="mt-2">Community forum</li>
            <li className="mt-2">Hosting responsibly</li>
          </ul>
        </div>
        <div className="w-1/3  flex justify-center pt-[40px] ">
          <ul>
            <li className="mt-2 font-bold">Airbnb</li>
            <li className="mt-2">Newsroom</li>
            <li className="mt-2">New features</li>
            <li className="mt-2">Careers</li>
            <li className="mt-2">Investors</li>
            <li className="mt-2">Airbnb.org emergency stays</li>
          </ul>
        </div>
      </div>
      <div className="h-[20%] border-t flex ">
        <div className="w-1/2 h-[100%] flex justify-center items-center">
          <p className="">
            © 2023 Airbnb, Inc. · Privacy · Terms · Sitemap · Company details
          </p>{" "}
        </div>
        <div className="w-1/2  flex justify-end items-center">
          <img src={globe} alt="glo" className="pr-3" />
          <p className="pr-3" >English (IN) ₹ INR</p> <img src={insta} alt="facebook" className="pr-3"/>
          <img src={ins} alt="instagram" className="pr-3" /> <img src={twiiter} alt="twitter"className="pr-20" />
        </div>
      </div>
    </div>
  );
};
