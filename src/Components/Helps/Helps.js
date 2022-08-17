import React from "react";
import "./Helps.css";
import { BsFacebook } from 'react-icons/bs';
import { AiFillInstagram } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { ImLinkedin } from 'react-icons/im';

const Helps = () => {
  return (
    <div>
      <h3>let us help you</h3>
      <div className="col-12 ">
        <div className="bcard d-flex">
          <div className="col-3 cars">
            <div className="wht-logo">
            <img
              src="https://i0.wp.com/zeevector.com/wp-content/uploads/2021/02/VI-logo-vector-.png?resize=600%2C478&ssl=1"
              alt=""
              width="60px"
              height="38px"
            />            </div><br/>
            <span className="wht">via whatsapp</span>
            <div className="par">
                <p>Vic, your personal ViTM assistant is here to help you 24x7</p>
            </div>
            <div>
                <span className="re">register now</span>
            </div>
          </div>
          <div className="col-3 cars">
          <div className="wht-logo">
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmV8qAfcfkwFitzrBk18fOZwB3soz6vKvoeda5F4gk4mc0c44ZuIcI1BrxMrSvX7S_h34&usqp=CAU" height="40px" width="60px"/>
            </div><br/>
            <span className="wht">FAQs</span>
            <div className="par">
                <p>Here are frequently asked questions. Might help you as well.</p>
            </div>
            <div>
                <span className="re">view FAQs</span>
            </div>
          </div>
          <div className="col-3 cars">
          <div className="wht-logo">
                <img src="https://cdn-icons-png.flaticon.com/512/14/14558.png" height="40px" width="60px"/>
            </div><br/>
            <span className="wht">join the conversation</span>
            <div className="par">
                <p>Keep in touch with us on our social channels.</p>
            </div>
            <div>
                <span className="re d-flex">
                    <div className="icon"><BsFacebook/></div>
                    <div className="icon"><AiFillInstagram/></div>
                    <div className="icon"><AiFillTwitterCircle/></div>
                    <div className="icon"><ImLinkedin/></div>
                </span>
            </div>
          </div>
          <div className="col-3 cars">
          <div className="wht-logo">
                <img src="https://w7.pngwing.com/pngs/920/849/png-transparent-computer-icons-online-chat-logo-others-rectangle-logo-speech-balloon.png" height="40px" width="60px"/>
            </div><br/>
            <span className="wht">chat with VIC</span>
            <div className="par">
                <p>Get updates on your ViTM account, best offers & more</p>
            </div>
            <div>
                <span className="re">get chatting</span>
            </div>
          </div>
        </div>
      </div>
      <div className="im">
        <img src="https://www.myvi.in/content/dam/vodafoneideadigital/StaticPages/consumerimages/mobileimages/ConsumerHomepage/download-app.png" height="250px" width="97%"/>
      </div>
    </div>
  );
};

export default Helps;
