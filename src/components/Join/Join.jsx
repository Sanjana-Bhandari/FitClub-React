import React, { useState } from "react";
import "./Join.css";
import axios from "axios";

const Join = () => {
  const [email, setEmail] = useState("");

  const subscribe = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
  "https://fitclub-backend-hkx2.onrender.com/api/users/newsletter",
  {
    email,
  }
);
      alert(res.data.message);
      setEmail("");
    } catch (error) {
      alert(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="Join" id="join-us">
      <div className="left-j">
        <hr />
        <div>
          <span className="stroke-text">READY TO</span>
          <span>LEVEL UP</span>
        </div>

        <div>
          <span>YOUR BODY</span>
          <span className="stroke-text">WITH US?</span>
        </div>
      </div>

      <div className="right-j">
        <form className="email-container" onSubmit={subscribe}>
          <input
            type="email"
            placeholder="Enter your Email address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <button className="btn1 btn-j">
            Join Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;