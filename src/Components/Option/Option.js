import React from "react";
import "./Option.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Option = () => {
  return (
    <div className="col-12 d-flex">
      <div className="option-left col-6 md-4">
        <div>
          <h2>
            Recharge & Pay Bills
            <br /> for Excisting offers{" "}
          </h2>
        </div>
        <div className="chechbox d-flex ">
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault1"
            />
            <label className="form-check-label" for="flexRadioDefault1">
              Prepaid
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="flexRadioDefault"
              id="flexRadioDefault2"
              checked
            />
            <label className="form-check-label" for="flexRadioDefault2">
              PostPaid
            </label>
          </div>
        </div>
        <input
          className="lable"
          type="text"
          placeholder="Enter Mobile Number"
          id="ip2"
        />
        <div>
          <span className="new-sim">
            Not a Vi user? <span className="underline">Get Vi Sim</span> Delivered Free
          </span>
        </div>
      </div>

      <div className="option-right col-5 md-4">
        <div className="pic-ctn">
          <img src="https://pbs.twimg.com/media/FYaxts7XEAAj2e1.jpg" alt="" className="pic" />
          <img src="https://pbs.twimg.com/media/FXr-uq3UsAA96Dp.jpg" alt="" className="pic" />
          <img src="https://pbs.twimg.com/ext_tw_video_thumb/1550467070122500100/pu/img/A7si10K2uTQMNMCT.jpg" alt="" className="pic" />
          <img src="https://pbs.twimg.com/media/FIZegsbVQAAaj6P.jpg" alt="" className="pic" />
        </div>
      </div>
    </div>
  );
};

export default Option;
