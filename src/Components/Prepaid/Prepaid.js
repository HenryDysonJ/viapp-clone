import React from "react";
import "./Prepaid.css";

const Prepaid = () => {
  return (
    <div className="col-12">
      <div>
        <h1>
          Best Seller <sapan className="unl">Unlimited Plans</sapan>
        </h1>
      </div>
      <div className="cds col-12 d-flex">
        <div className="col-3">
          <div className="card">
            <div className="d-flex">
              <span className="amt">$299</span>
              <span className="img">
                <image src="" alter="" />
              </span>
            </div>
            <div className="d-flex">
              <span className="pl">
                Truly <br />
                Unlimitedm <br />
                <span>Calls</span>
              </span>
              <span className="pl">
                1.5GB/Day <br />
                <span>Data</span>
              </span>
              <span className="pl">
                28 Days <br />
                <span>Validity</span>
              </span>
            </div>
            <div className="d-flex">
            <span className="btn unl">Pack details</span>
              <button type="button" className="btn btn-danger">
                recharge Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
          <div className="d-flex">
              <span className="amt">$479</span>
              <span className="img">
                <image src="" alter="" />
              </span>
            </div>
            <div className="d-flex">
              <span className="pl">
                Truly <br />
                Unlimitedm <br />
                <span>Calls</span>
              </span>
              <span className="pl">
                1.5GB/Day <br />
                <span>Data</span>
              </span>
              <span className="pl">
                56 Days <br />
                <span>Validity</span>
              </span>
            </div>
            <div className="d-flex">
            <span className="btn unl">Pack details</span>
              <button type="button" className="btn btn-danger">
                recharge Now
              </button>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="card">
          <div className="d-flex">
              <span className="amt">$719</span>
              <span className="img">
                <image src="" alter="" />
              </span>
            </div>
            <div className="d-flex">
              <span className="pl">
                Truly <br />
                Unlimitedm <br />
                <span>Calls</span>
              </span>
              <span className="pl">
                1.5GB/Day <br />
                <span>Data</span>
              </span>
              <span className="pl">
               84 Days <br />
                <span>Validity</span>
              </span>
            </div>
            <div className="d-flex">
            <span className="btn unl">Pack details</span>
              <button type="button" className="btn btn-danger">
                recharge Now
              </button>
            </div>            
          </div>
        </div>
      </div>
      <div className="but">
      <button type="button" className="btn btn-outline-dark">
            Browse all packs</button>
    </div>
    </div>
  );
};

export default Prepaid;
