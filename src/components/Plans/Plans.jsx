import React, { useState } from "react";
import axios from "axios";
import { plansData } from "../../data/plansData";
import whiteTick from "../../assets/whiteTick.png";
import "./Plans.css";

function Plans() {

    const [showPopup, setShowPopup] = useState(false);

const [selectedPlan, setSelectedPlan] = useState("");

const [name, setName] = useState("");

const [email, setEmail] = useState("");

const [phone, setPhone] = useState("");

const [loading, setLoading] = useState(false);

const [duration, setDuration] = useState("");

const [trainer, setTrainer] = useState("");

const [timing, setTiming] = useState("");

const [goal, setGoal] = useState("");

const [dietPlan, setDietPlan] = useState("");

const joinPlan = (planName) => {
  setSelectedPlan(planName);

  setDuration("");
  setTrainer("");
  setTiming("");
  setGoal("");
  setDietPlan("");

  setShowPopup(true);
};

const submitMembership = async () => {

  setLoading(true);

  try {

    const res = await axios.post(
      "https://fitclub-backend-hkx2.onrender.com/api/users/membership",
      {
        name,
        email,
        phone,
        plan: selectedPlan,
        duration,
        trainer,
        timing,
        goal,
        dietPlan,
      }
    );

    alert(res.data.message);

    setShowPopup(false);

    setName("");
    setEmail("");
    setPhone("");
    setDuration("");
    setTrainer("");
    setTiming("");
    setGoal("");
    setDietPlan("");

  } catch (err) {

    alert(err.response?.data?.message || "Something went wrong");

  } finally {

    setLoading(false);

  }
};
  return (
    <div className='plans-container'>
        <div className='blur plans-blur-1'></div>
        <div className='blur plans-blur-2'></div>
        <div className='programs-header'>
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>
        {/* plans card */}
        <div className="plans" id="plans">
            {plansData.map((plan, i) =>(
                <div className='plan' key={i}>
                    {plan.icon}
                    <span>{plan.name}</span>
                    <span>$ {plan.price}</span>
                    <div className='features'>
                        {plan.features.map((feature, i)=>(
                            <div className='feature'>
                                <img src={whiteTick} alt="" />
                                <span key={i}>{feature}</span>
                            </div>
                        ))}
                    </div>
                    <div>
                        <span>See more benefits -></span>
                    </div>
                    <button
  className="btn"
  onClick={() => joinPlan(plan.name)}
>
  Join Now
</button>
                </div>
            ))}
        </div>
        {showPopup && (
  <div className="plan-popup-overlay">
    <div className="plan-popup">

      <h2>{selectedPlan}</h2>

      <input
        type="text"
        placeholder="Full Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />

      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      {/* BASIC PLAN */}

      {selectedPlan === "BASIC PLAN" && (
  <>
    <select
      value={duration}
      onChange={(e) => setDuration(e.target.value)}
    >
      <option value="">Membership Duration</option>
      <option>1 Month</option>
      <option>3 Months</option>
    </select>

    <select
      value={timing}
      onChange={(e) => setTiming(e.target.value)}
    >
      <option value="">Workout Timing</option>
      <option>Morning</option>
      <option>Evening</option>
    </select>
  </>
)}

      {/* PREMIUM PLAN */}

     {selectedPlan === "PREMIUM PLAN" && (
  <>
    <select
      value={trainer}
      onChange={(e) => setTrainer(e.target.value)}
    >
      <option value="">Personal Trainer</option>
      <option>Yes</option>
      <option>No</option>
    </select>

    <select
      value={timing}
      onChange={(e) => setTiming(e.target.value)}
    >
      <option value="">Workout Timing</option>
      <option>Morning</option>
      <option>Evening</option>
    </select>

    <select
      value={goal}
      onChange={(e) => setGoal(e.target.value)}
    >
      <option value="">Fitness Goal</option>
      <option>Weight Loss</option>
      <option>Muscle Gain</option>
      <option>Stay Fit</option>
    </select>
  </>
)}

      {/* PRO PLAN */}

     {selectedPlan === "PRO PLAN" && (
  <>
    <select
      value={goal}
      onChange={(e) => setGoal(e.target.value)}
    >
      <option value="">Fitness Goal</option>
      <option>Weight Loss</option>
      <option>Muscle Gain</option>
      <option>Body Building</option>
    </select>

    <select
      value={trainer}
      onChange={(e) => setTrainer(e.target.value)}
    >
      <option value="">Personal Trainer</option>
      <option>Male Trainer</option>
      <option>Female Trainer</option>
    </select>

    <select
      value={dietPlan}
      onChange={(e) => setDietPlan(e.target.value)}
    >
      <option value="">Diet Plan Required</option>
      <option>Yes</option>
      <option>No</option>
    </select>

    <select
      value={duration}
      onChange={(e) => setDuration(e.target.value)}
    >
      <option value="">Membership Duration</option>
      <option>3 Months</option>
      <option>6 Months</option>
      <option>12 Months</option>
    </select>
  </>
)}

      <div className="popup-buttons">

        <button
  className="btn"
  onClick={submitMembership}
  disabled={loading}
>
  {loading ? "Submitting..." : "Submit"}
</button>

        <button
  className="btn"
  onClick={() => {
    setShowPopup(false);

    setName("");
    setEmail("");
    setPhone("");
    setDuration("");
    setTrainer("");
    setTiming("");
    setGoal("");
    setDietPlan("");
  }}
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

export default Plans
