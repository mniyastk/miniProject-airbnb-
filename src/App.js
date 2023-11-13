import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { StayDetail } from "./pages/home/stayDetail/staydetail";
import { HostHome } from "./pages/host/hostingHome";
import { AddListingLayout } from "./pages/host/addListing/addListingLayout";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/stay" element={<StayDetail/>}/>
    <Route path="/host" element={<HostHome/>}/>
    <Route path="/addListings" element={<AddListingLayout/>}/>
   </Routes>
  
   </>
  );
}

export default App;
