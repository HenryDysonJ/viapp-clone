import React from "react";
import "./Planing.css";
import { FaSimCard } from "react-icons/fa";
import { GiQueenCrown } from "react-icons/gi";
import { GrDocumentUpload } from "react-icons/gr";
import { GiCommercialAirplane } from "react-icons/gi";
import { ImHeadphones } from "react-icons/im";

const Planing = () => {
  return (
    <div className="d-flex col-12 md-6">
      <div className="parent">
        <span className="plans">
          <FaSimCard />
        </span>
        <br />
        <span className="cont">Buy Postpaid</span>
      </div>
      <div className="parent">
        <span className="plans">
          <FaSimCard />
        </span>
        <br />
        <span className="cont">Buy Prepaid</span>
      </div>
      <div className="parent">
        <span className="plans">
          <GiQueenCrown />
        </span>
        <br />
        <span className="cont">Buy VIP Number</span>
      </div>
      <div className="parent">
        <span className="plans">
          <GrDocumentUpload />
        </span>
        <br />
        <span className="cont">Port Number</span>
      </div>
      <div className="parent">
        <span className="plans">
          <GiCommercialAirplane />
        </span>
        <br />
        <span className="cont">International Roaming</span>
      </div>
      <div className="parent">
        <span className="plans">
          <ImHeadphones />
        </span>
        <br />
        <span className="cont">Help & Support</span>
      </div>
    </div>
  );
};

export default Planing;
