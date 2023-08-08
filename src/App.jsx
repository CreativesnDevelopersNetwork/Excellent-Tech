import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Login from "./routes/Login";


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
      
        {/* <Route path="/accomodation" element={<Accomodation />} />
        <Route path="/hotels" element={<Hotels />} />
        <Route path="/carrental" element={<CarRental />} />
        <Route path="/flights" element={<Flights />} /> */}
      </Routes>
    </div>
  );
}

export default App;
