import React from 'react'
import logo from '../../assets/pngegg 1.png'
import globe from '../../assets/image 1.svg'
import insta from "../../assets/insta.svg";

import ins from "../../assets/icons8-instagram.svg";
import twiiter from "../../assets/twiiter.svg";

import { Link } from 'react-router-dom'

const Payment = () => {
  return (
    <div className='flex flex-col h-screen'>
        <div className='w-full h-[80px] border-b flex items-center'>
        <Link to={"/"}>
          <img
            src={logo}
            alt="logo"
            className="w-[104px] h-[31px] ml-10 hover:cursor-pointer"
          />
        </Link>

        </div>
        <div className='flex-1 '>

        </div>
        <div className="h-[80px] border-t flex ">
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
  )
}

export default Payment