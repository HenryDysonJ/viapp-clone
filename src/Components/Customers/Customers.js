import React from 'react';
import "./Customers.css";

const Customers = () => {
  return (
    <div>
      <div className='chead'>
      <h2> trusted Customers, loved by partners</h2><br />
        <span className='dnlin'>known why our partners love us</span>
      </div>
        <div className='col-12 carousel'>
          <div className='col-10 d-flex ceo item'>
          <div className='col-4'>
          <div className='text'>
            <div className='logos d-flex'>
            <div className='ibm'>
              <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHQkFf3gSDIIb2IscODmm6nHqu9D0_8zru1L4so_b-pw7ehgRgjsqFcA99WZMttMk40CQ&usqp=CAU'height="50px" width="80px"/>
              </div>|
            <div className='vi'>
            <img src='https://images.hindustantimes.com/tech/img/2020/09/07/1600x900/image_(30)_1599463413454_1599463417971.jpg'height="40px" width="80px"/>

            </div>
            </div>
          <span className='para'>
          "Congratulation as a newly reaching such an important milestone as a newly integrated brand.
            Together, we are tapping into the power of hybrid cloud and Al for network and IT combined to reshape
             the future of the telecom industry."
          </span><br/>
          <div className='by'>

          <span className='name'>Aravind Krishna</span><br/>
          <span className='post'>CEO,IBM</span>
          </div>
          </div>
          </div>
          <div className='col-4'>
           <div className='image'>
          <img src='https://www.myvi.in/content/dam/vodafoneideadigital/homespyder/testimonial-2.png' height="200px" width="100%"/>
           </div>
          </div>
          
          </div>

        </div>
        <div className='col-10 d-flex ceo item'>
          <div className='col-4'>
          <div className='text'>
            <div className='logos d-flex'>
            <div className='ibm'>
              <img src='https://1000logos.net/wp-content/uploads/2017/03/Nokia-Logo.jpg'height="50px" width="80px"/>
              </div>|
            <div className='vi'>
            <img src='https://images.hindustantimes.com/tech/img/2020/09/07/1600x900/image_(30)_1599463413454_1599463417971.jpg'height="40px" width="80px"/>

            </div>
            </div>
          <span className='para'>
          "We are proud to be a partner in the integration journey of vodafone Idea limited to provide a great
            Customers & network experience. Together we will build a better tomorrow for the Customers of vi."
          </span><br/>
          <div className='by'>
          <span className='name'>Sanjay Malik</span><br/>
          <span className='post'>Head of inda market</span>
          </div>
         
          </div>
          </div>
          <div className='col-4'>
           <div className='image'>
          <img src='https://www.myvi.in/content/dam/vodafoneideadigital/homespyder/testimonial-1.png' height="200px" width="100%"/>
           </div>
          </div>
          
          </div>
    </div>
  )
}

export default Customers