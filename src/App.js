import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { StayDetail } from "./pages/home/stayDetail/staydetail";
import { HostHome } from "./pages/host/hostingHome";
import { AddListingLayout } from "./pages/host/addListing/addListingLayout";
import StepOne from "./pages/host/addListing/stepOne";
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
import TestTwo from "./components/test2";
import Wishlists from "./pages/wishlists/Wishlists";
import { createContext, useState } from "react";
import Payment from "./pages/payment/payement";
import Trips from "./pages/user/Trips/Trips";
import AdminHome from "./pages/Admin/Admin Home/AdminHome";
import Users from "./pages/Admin/users/Users";
import NotFound from "./components/NotFound";
import TestLogin from "./testLogin";
import Listings from "./pages/Admin/Listings/Listings";

export const myContext = createContext();

function App() {
  const [favouritedStays, setFavouritedStays] = useState([]);
  const [signUp, setSignUp] = useState(false);
  const [signIn, setSignIn] = useState(false);

  return (
    <>
      <myContext.Provider
        value={{
          favouritedStays,
          setFavouritedStays,
          signUp,
          setSignUp,
          signIn,
          setSignIn,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin" element={<AdminHome />}>
            <Route index element={<Users />} />{" "}
            <Route path="users" element={<Users />} />
            <Route path="listings" element={<Listings />} />
            
          </Route>
          <Route path="/user/stay/:id" element={<StayDetail />} />
          <Route path="/host" element={<HostHome />} />
          <Route path="/test" element={<TestLogin />} />
          <Route path="/test2" element={<TestTwo />} />
          <Route path="/wishlists" element={<Wishlists />} />
          <Route path="/payments" element={<Payment />} />
          <Route path="/user/trips" element={<Trips />} />
          <Route path="/addListings" element={<AddListingLayout />}>
            <Route index element={<StepOne />} />
            <Route path="stepOne" element={<StepOne />} />
            <Route path="step2" element={<Step2 />} />
            <Route path="StepThree" element={<StepThree />} />
            <Route path="Location" element={<Location />} />
            <Route path="Address" element={<Address />} />
            <Route path="HouseDetails" element={<HouseDetails />} />
            <Route path="StepTwo" element={<StepTwo />} />
            <Route path="One" element={<One />} />
            <Route path="Two" element={<Two />} />
            <Route path="Three" element={<Three />} />
            <Route path="Four" element={<Four />} />
            <Route path="OneThree" element={<OneThree />} />
            <Route path="Price" element={<Price />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </myContext.Provider>
    </>
  );
}

export default App;
