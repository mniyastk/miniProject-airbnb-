import React from "react";
import globe from "../assets/image 1.svg";
import insta from "../assets/insta.svg";
import ins from "../assets/icons8-instagram.svg";
import twiiter from "../assets/twiiter.svg";
export const Footer = () => {
  return (
    <div className="h-[410px] bg-[#F7F7F7]">
      <div className="h-[80%] flex">
        <div className="w-1/3 h-[100%] flex justify-center ">
          <ul className="pt-[40px]">
            <li className="font-bold">Support</li>
            <li>Help Centre</li>
            <li>Get help with a safety issue</li>
            <li>AirCover</li>
            <li>Anti-discrimination</li>
            <li>Disability support</li>
            <li>Cancellation options</li>
            <li>Report neighbourhood concern</li>
          </ul>
        </div>
        <div className="w-1/3 flex justify-center pt-[40px]">
          <ul>
            <li className="font-bold">Hosting</li>
            <li>Airbnb your home</li>
            <li>AirCover for Hosts</li>
            <li>Hosting resources</li>
            <li>Community forum</li>
            <li>Hosting responsibly</li>
          </ul>
        </div>
        <div className="w-1/3 flex justify-center pt-[40px] ">
          <ul>
            <li className="font-bold">Airbnb</li>
            <li>Newsroom</li>
            <li>New features</li>
            <li>Careers</li>
            <li>Investors</li>
            <li>Airbnb.org emergency stays</li>
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
