import React from "react";
import "./Footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { AiFillTwitterCircle } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { ImYoutube2 } from "react-icons/im";

const Footer = () => {
  return (
    <div className="col-12 d-flex footer">
      <div className="col-4">
        <div className="logovi">
          <img
            src="https://i0.wp.com/zeevector.com/wp-content/uploads/2021/02/VI-logo-vector-.png?resize=600%2C478&ssl=1"
            alt=""
            width="60"
            height="38"
          />
        </div>
        <div className="left">
          <h3>Vodafone Idea Limited</h3>
          <br />
          <span className="pa">
            Vodafone Idea Limited is an Aditya Birla Group and Vodafone Group
            partnership. The Company provides pan India Voice and Data services
            across 2G, 3G and 4G platform.
          </span>
        </div>
        <div className="re d-flex">
          <div className="icon">
            <BsFacebook />
          </div>
          <div className="icon">
            <AiFillInstagram />
          </div>
          <div className="icon">
            <AiFillTwitterCircle />
          </div>
          <div className="icon">
            <ImLinkedin />
          </div>
          <div className="icon">
            <ImYoutube2 />
          </div>
        </div>
      </div>
      <div className="col-2 a">
        <tr>
          <th>aboutVi</th>
        </tr>
        <tr>
          <td>About Us</td>
        </tr>
        <tr>
          <td>Investor Relations</td>
        </tr>
        <tr>
          <td>Vi™ Business</td>
        </tr>
        <tr>
          <td>Career</td>
        </tr>
        <tr>
          <td>GIGAnet</td>
        </tr>
        <tr>
          <td>Vodafone Idea Foundation</td>
        </tr>
        <tr>
          <td>News & Media</td>
        </tr>
        <tr>
          <td>Vodafone Idea Corp Website</td>
        </tr>
        <tr>
          <td>Vodafone Idea Corp Website</td>
        </tr>
        <tr>
          <td>Vodafone Group</td>
        </tr>
        <tr>
          <td>Aditya Birla Group</td>
        </tr>
      </div>
      <div className="col-2 a">
        <tr>
          <th>more from Vi</th>
        </tr>

        <tr>
          <td> Postpaid Connection</td>
        </tr>
        <tr>
          <td>Prepaid Connection</td>
        </tr>
        <tr>
          <td>SIM Home Delivery</td>
        </tr>
        <tr>
          <td>ViTM movies & TV</td>
        </tr>
        <tr>
          <td>Amazon Prime Membership Offer</td>
        </tr>
        <tr>
          <td>Hungama Music in Vi App</td>
        </tr>
        <tr>
          <td>Callertunes</td>
        </tr>
        <tr>
          <td>VIP Mobile Numbers</td>
        </tr>
        <tr>
          <td>Home Broadband</td>
        </tr>
        <tr>
          <td>Stores Near M</td>
        </tr>
        <tr>
          <td>Value Added Services</td>
        </tr>
        <tr>
          <td>Go Green</td>
        </tr>
      </div>
      <div className="col-2 a">
        <tr>
          <th>quick access</th>
        </tr>

        <tr>
          <td> Best Postpaid Plans</td>
        </tr>
        <tr>
          <td>Online Recharge</td>
        </tr>
        <tr>
          <td>Postpaid Bill Payment</td>
        </tr>
        <tr>
          <td>Service Validity Packs</td>
        </tr>
        <tr>
          <td>UPI Recharge</td>
        </tr>
        <tr>
          <td>Sitemap</td>
        </tr>
        <tr>
          <td>Mobile Internet</td>
        </tr>
        <tr>
          <td>Network Troubleshooting</td>
        </tr>
        <tr>
          <td>Short Code & USSD Info</td>
        </tr>
        <tr>
          <td>Block SIM online</td>
        </tr>
        <tr>
          <td>Postpaid ISD call rates</td>
        </tr>
        <tr>
          <td>Prepaid ISD call rates</td>
        </tr>
      </div>
      <div className="col-2 a">
        <tr>
          <th>regulatory</th>
        </tr>
        <tr>
          <td> Postpaid TRAI mandate</td>
        </tr>
        <tr>
          <td> Telemarketing Registration</td>
        </tr>
        <tr>
          <td>Terms of Service</td>
        </tr>
        <tr>
          <td>Prepaid TRAI mandate</td>
        </tr>
        <tr>
          <td>Warning & Fraudulent</td>
        </tr>
        <tr>
          <td>DND Complaints</td>
        </tr>
        <tr>
          <td>Disaster Management</td>
        </tr>
        <tr>
          <td>Policy</td>
        </tr>
        <tr>
          <td> Notices</td>
        </tr>
        <tr>
          <td> Responsible Disclosure</td>
        </tr>
        <tr>
          <td> DND Registration</td>
        </tr>
        <tr>
          <td> Security Awareness</td>
        </tr>
      </div>
    </div>
  );
};

export default Footer;
