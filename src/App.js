import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/home/home";
import { StayDetail } from "./pages/home/stayDetail/staydetail";
import { HostHome } from "./pages/host/hostingHome";

function App() {
  return (
   <>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/stay" element={<StayDetail/>}/>
    <Route path="/host" element={<HostHome/>}/>
   </Routes>
  
   </>
  );
}

export default App;
