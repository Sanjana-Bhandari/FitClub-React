import React, { useState } from "react";
import { Link } from "react-scroll";
import axios from "axios";
import './Hero.css'
import Header from './Header'
import hero_image from "../assets/hero_image.png";
import hero_image_back from "../assets/hero_image_back.png";
import Heart from "../assets/heart.png";
import Calories from "../assets/calories.png";
import NumberCounter from 'number-counter'
import {motion} from 'framer-motion'
const Hero = () => {

  const [showModal, setShowModal] = useState(false);
  const [name, setName] = useState("");
const [email, setEmail] = useState("");
const [phone, setPhone] = useState("");
const [plan, setPlan] = useState("");

  const transition = {type: 'spring', duration : 3}
  const mobile = window.innerWidth<=768 ? true: false;

  const submitMembership = async () => {
  try {
    const res = await axios.post(
      "https://fitclub-backend-hkx2.onrender.com/api/users/membership",
      {
        name,
        email,
        phone,
        plan,
      }
    );

    alert(res.data.message);

    setName("");
    setEmail("");
    setPhone("");
    setPlan("");

    setShowModal(false);

  } catch (error) {
    alert(error.response?.data?.message || "Something went wrong");
  }
};
  return (
    <div className='hero' id='home'>
      <div className='blur hero-blur'></div>
      <div className='left-h'>
        <Header/>
        {/* the best add */}
        <div className='the-best-ad'>
          <motion.div
           initial={{ left: mobile? "165px": '238px'}}
            whileInView={{left: '8px'}}
            transition={{...transition, type: 'tween'}}
          >
          </motion.div>
          <span>the best fitness club in the town </span>
        </div>
        {/* Hero Heading */}
        <div className='hero-text'>
          <div>
            <span className='stroke-text'>Shape</span>
            <span>Your</span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span> In here we will help you to shape and build your ideal body and live up your life to <br></br>fullest </span>
          </div>
        </div>
        {/* figures */}
        <div className='figures'>
          <div>
            <span>
              <NumberCounter end={140} start={100} delay='4' preFix="+"/>
            </span>
            <span> expert coachs</span>
          </div>
           <div>
            <span>
              <NumberCounter end={978} start={800} delay='4' preFix="+"/>
            </span>
            <span> member joined</span>
          </div>
           <div>
            <span>
              <NumberCounter end={50} start={0} delay='4' preFix="+"/>
            </span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* hero button */}
        <div className='hero-buttons'>
         <button
  className="btn"
  onClick={() => setShowModal(true)}
>
  Get Started
</button>
          <button className="btn">
  <Link
    to="plans"
    smooth={true}
    duration={500}
    style={{ color: "inherit", textDecoration: "none" }}
  >
    Learn More
  </Link>
</button>
        </div>
      </div>
      <div className='right-h'>
        <button
  className="btn"
  onClick={() => setShowModal(true)}
>
  Join Now
</button>
        <motion.div
        initial={{right: "-1rem"}}
        whileInView={{right: "4rem"}}
        transition={transition}
         className='heart-rate'>
          <img src={Heart} alt="" />
          <span>Heart Rate</span><span>116 bpm</span>
        </motion.div>
        {/* hero image */}
        <img src={hero_image} alt="" className='hero-image'/>
        <motion.img
        initial={{right:'11rem'}}
        whileInView={{right: '20rem'}}
        transition={transition}
         src={hero_image_back} alt="" className='hero-image-back'/>
        {/* calories */}
        <motion.div 
        initial={{right: "-1rem"}}
        whileInView={{right: "4rem"}}
        transition={transition}
        className="calories">
          <img src={Calories} alt="" />
          <div>
            <span>Calories Burned</span>
            <span>220 kcal</span>
          </div>
        </motion.div>
      </div>
            {showModal && (
        <div className="modal-overlay">
          <div className="modal-box">

            <h2>Join FitClub</h2>

            <input
  type="text"
  placeholder="Full Name"
  className="modal-input"
  value={name}
  onChange={(e) => setName(e.target.value)}
/>

           <input
  type="email"
  placeholder="Email Address"
  className="modal-input"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
/>

           <input
  type="tel"
  placeholder="Phone Number"
  className="modal-input"
  value={phone}
  onChange={(e) => setPhone(e.target.value)}
/>

           <select
  className="modal-input"
  value={plan}
  onChange={(e) => setPlan(e.target.value)}
>
  <option value="">Select Membership Plan</option>
  <option value="Basic">Basic</option>
  <option value="Premium">Premium</option>
  <option value="Pro">Pro</option>
</select>
            <div className="modal-buttons">

              <button
  className="btn"
  onClick={submitMembership}
>
  Submit
</button>
              <button
                className="btn"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>

            </div>

          </div>
        </div>
      )}
    </div>
  )
}

export default Hero
