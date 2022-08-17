import React from "react";
import "./Postpaid.css";
import { FiPhoneCall } from 'react-icons/fi';
import { GrCycle } from 'react-icons/gr';
import { BiCameraMovie } from 'react-icons/bi';
import { MdOutlineSwapVerticalCircle } from 'react-icons/md';
const Postpaid = () => {
  return (
    <div className="col-12">
      <div className="posthead">
        <h1>Best Postpaid Plans</h1>
      </div>
      <div className="cdss col-12 d-flex">
        <div className="col-3">
          <div className="cards">
            <div className="d-flex">
            <span className="amt">$399 <br />
              <span className="month">Per month</span></span>
              <span className="img">
                <image src="" alter="" />
            </span>         
            </div>
            <div className="data">
            <tr>
                <td><MdOutlineSwapVerticalCircle/></td>
                <td >40 GB + 150 GB extra</td>
            </tr>
            <tr>
                <td><FiPhoneCall/></td>
                <td>Unlimited Calls</td>
            </tr>
            <tr>
                <td><GrCycle/></td>
                <td>200 GB Rollover</td>
            </tr>
            <tr>
                <td><BiCameraMovie/></td>
                <td>VI movie and TV subscription</td>
            </tr>
            </div>
           
                                         
            <div className="d-flex btm">
              <span className="btn unl">more detail</span>
              <button type="button" className="btn btn-danger">
                Buy plan
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="cards">
            <div className="d-flex">
            <span className="amt">$499 <br />
              <span className="month">Per month</span></span>
              <span className="img">
                <image src="" alter="" />
              </span>
            </div>
            <div className="data">
              <tr>
              <td><MdOutlineSwapVerticalCircle/></td>
                <td>75 GB</td>
              </tr>
              <tr>
              <td><FiPhoneCall/></td>
                <td>Unlimited Calls</td>
              </tr>
              <tr>
              <td><GrCycle/></td>
                <td>200 GB Rollover</td>
              </tr>
              <tr>
              <td><BiCameraMovie/></td>
                <td>Amzon prime, Dishney+Hotstar , mobile subscription for 1 year VI movie and TV subscription</td>
              </tr>

            </div>   
            <div className="d-flex btm">
            <span className="btn unl">more detail</span>
              <button type="button" className="btn btn-danger">
                Buy plan
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="cards">
            <div className="d-flex">
              <span className="amt">$699 <br />
              <span className="month">Per month</span></span>
              <span className="img">
                <image src="" alter="" />
              </span>
            </div>
            <div className="data">
            <tr>
            <td><MdOutlineSwapVerticalCircle/></td>
                <td>Unlimited Data</td>
              </tr>
              <tr>
              <td><FiPhoneCall/></td>
                <td>Unlimited Calls</td>
              </tr>
              <tr>
              <td><BiCameraMovie/></td>
                <td>Amzon prime, Dishney+Hotstar<br />
             mobile subscription for 1 year,<br />VI movie and TV subscription</td>
              </tr>
            </div>   
            <div className="d-flex btm">
            <span className="btn unl">more detail</span>
              <button type="button" className="btn btn-danger">
                Buy plan
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="but">
        <span className="btn">
          upgrade your existing Vi plan and get a world full of benefits
        </span>
        <button type="button" className="btn btn-outline-dark">
          Browse all packs
        </button>
      </div>
    </div>
  );
};

export default Postpaid;
