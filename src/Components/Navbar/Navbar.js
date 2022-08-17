import React from "react";
import "./Navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light col-12">
        <div className="container-fluid">
          <a className="logo navbar-brand" href="#">
            <img
              src="https://i0.wp.com/zeevector.com/wp-content/uploads/2021/02/VI-logo-vector-.png?resize=600%2C478&ssl=1"
              alt=""
              width="60"
              height="38"
            />
          </a>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="dropdown nav-item">
                Prepaid <IoMdArrowDropdown />
                <div className="dropdown-content">
                  <div className=" nav-item">
                    <a href="#">Mobile Recharge</a>
                    <a href="#">Recomended Packs</a>
                    <a href="#">Prepaid SIM</a>
                  </div>

                  <div className=" nav-item">
                    <a href="#">Prepaid Plans</a>
                    <a href="#">Talktime Plans</a>
                    <a href="#">Dishney + Hotstar Offers</a>
                  </div>
                  <div className=" nav-item">
                    <a href="#">Unlimited Plans</a>
                    <a href="#">Data Packs</a>
                    <a href="#">SMS Packs</a>
                  </div>
                </div>
              </li>
              <li className="dropdown nav-item">
                Postpaid <IoMdArrowDropdown />
                <div className="dropdown-content">
                  <div className=" nav-item">
                    <a href="#">Pay Bill Online</a>
                    <a href="#">Best PostPaid Plans</a>
                    <a href="#">PostPaid SIM </a>
                  </div>

                  <div className=" nav-item">
                    <a href="#">PostPaid Family Plans</a>
                    <a href="#">Talktime Plans</a>
                    <a href="#">Upgrade to 699 Plans</a>
                  </div>
                  <div className=" nav-item">
                    <a href="#">Redx</a>
                    <a href="#">eSIM Activation</a>
                    <a href="#">Vi-MiFi</a>
                  </div>
                </div>
              </li>
              <li className="dropdown nav-item">
                New Conection <IoMdArrowDropdown />
                <div className="dropdown-content">
                  <div className=" nav-item">
                    <a href="#">PostPaid Connection</a>
                    <a href="#">Prepaid to PostPaid</a>
                    <a href="#">Free SIM Delivery</a>
                  </div>

                  <div className=" nav-item">
                    <a href="#">Fancy Number</a>
                    <a href="#">Family Plans</a>
                    <a href="#">Track Your SIM Delivery</a>
                  </div>
                  <div className=" nav-item">
                    <a href="#">Port Number to Vi</a>
                    <a href="#">Prepaid Connection</a>
                  </div>
                </div>
              </li>
              <li className="hover nav-item">International Roaming</li>
              <li className="hover nav-item">Smart Phone Offers</li>
              <li className="dropdown nav-item">
                Explore <IoMdArrowDropdown />
                <div className="dropdown-content">
                  <div className=" nav-item">
                    <a href="#">Vi-hungama Music</a>
                    <a href="#">New Smart Phone Cashpack</a>
                    <a href="#">GIGAnet</a>
                    <a href="#">Vi-Games</a>
                    <a href="#">Smart Phone on EMI</a>

                  </div>

                  <div className=" nav-item">
                    <a href="#">Vi-Hero Unlimited</a>
                    <a href="#">vi-Movice & TV</a>
                    <a href="#">PostPaid Packs</a>
                    <a href="#">Vi-Hospicare Insurense</a>
                    <a href="#">ZEE5 Offer</a>

                  </div>
                  <div className=" nav-item">
                    <a href="#">Latest SmartPhone</a>
                    <a href="#">CallerTune</a>
                    <a href="#">Vi-Services</a>
                    <a href="#">Cashpack Offer</a>
                    <a href="#">Vi-Jobs & Education</a>

                  </div>
                </div>
              </li>
              <li className="dropdown nav-item">
                Help <IoMdArrowDropdown />
                <div className="dropdown-content">
                  <div className=" nav-item">
                    <a href="#">FAQ</a>
                    <a href="#">Store Locator</a>
                    
                  </div>

                  <div className=" nav-item">
                    <a href="#">Contact Us</a>
                 
                  </div>
                  <div className=" nav-item">
                    <a href="#">Track REquests</a>
                    
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <div>
          <ul className="left navbar-nav">
            <li className="nav-item d-felix">Business</li>
            <li className="nav-item d-felix">Investors</li>
            <li className="nav-item d-felix">
              <button type="button" className="btn btn-outline-danger">
                SignIn
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <div className="app">
        <span className="a">Experience the new Vi-app!</span>
        <span className="b">Download Now </span>
      </div>
    </>
  );
};
export default Navbar;
