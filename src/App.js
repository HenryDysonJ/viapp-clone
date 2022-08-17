import React from "react";
import "./App.css";
import Carousal from "./Components/Carousal/Carousal";
import Customers from "./Components/Customers/Customers";
import Navbar from "./Components/Navbar/Navbar";
import Option from "./Components/Option/Option";
import Planing from "./Components/Planing/Planing";
import Postpaid from "./Components/Postpaid/Postpaid";
import Prepaid from "./Components/Prepaid/Prepaid";
import Helps from "./Components/Helps/Helps";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <>
      <div className="col-12 md-5">
        <Navbar />
      </div>
      <div className=" col-12 md-4">
        <Option />
      </div>
      <div className="col-12">
        <Planing />
      </div>
      <div>
        <Prepaid/>
      </div>
      <div>
        <Postpaid/>
      </div>
      <div>
        <Carousal/>
      </div>      
      <div>
        <Customers/>
      </div>
      <div>
        <Helps/>
      </div>
      <div>
        <Footer/>
      </div>
    </>
  );
}

export default App;
