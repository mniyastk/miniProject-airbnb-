import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { StayDetail } from "./pages/home/stayDetail/staydetail";
import { HostHome } from "./pages/host/hostingHome";
import { AddListingLayout } from "./pages/host/addListing/addListingLayout";
import StepOne from "./pages/host/addListing/stepOne";
// import { useState } from "react";
import { Step2 } from "./pages/host/addListing/step2";
import StepThree from "./pages/host/addListing/stepThree";
import Location from "./pages/host/addListing/location";
import Address from "./pages/host/addListing/address";
import HouseDetails from "./pages/host/addListing/houseDetails";
import StepTwo from "./pages/host/addListing/stepTwo";
import { One } from "./pages/host/addListing/stepTwo/One";
import Two from "./pages/host/addListing/stepTwo/Two";
import Three from "./pages/host/addListing/stepTwo/Three";
import Four from "./pages/host/addListing/stepTwo/Four";
import OneThree from "./pages/host/addListing/StepThree/OneThree";
import Price from "./pages/host/addListing/StepThree/Price";
import Test from "./components/test";
import TestTwo from "./components/test2";
import Wishlists from "./pages/wishlists/Wishlists";

function App() {

  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/:id" element={<StayDetail/>}/>
    <Route path="/host" element={<HostHome/>}/>
    <Route path="/test" element={<Test/>}/>
    <Route path="/test2" element={<TestTwo/>}/>
    <Route path="/wishlists" element={<Wishlists/>}/>
    <Route path="/addListings" element={<AddListingLayout/>}>
      <Route index element={<StepOne/>}/>
      <Route path="stepOne" element={<StepOne/>}/>
      <Route path="step2" element ={<Step2/>}/>
      <Route path="StepThree" element ={<StepThree/>}/>
      <Route path="Location" element ={<Location/>}/>
      <Route path="Address" element ={<Address/>}/>
      <Route path="HouseDetails" element ={<HouseDetails/>}/>
      <Route path="StepTwo" element ={<StepTwo/>}/>
      <Route path="One" element ={ <One/>}/>
      <Route path="Two" element ={<Two/>}/>
      <Route path="Three" element ={<Three/>}/>
      <Route path="Four" element ={<Four/>}/>
      <Route path="OneThree" element ={ <OneThree/>}/>
      <Route path="Price" element ={ <Price />}/>
   

    </Route>
   </Routes>
  
   </>
  );
}

export default App;
