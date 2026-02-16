import React, { useState } from "react";
import "./Appointment.scss";

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    date: "",
    time: "",
    service: "",
    notes: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await fetch("PASTE_YOUR_GOOGLE_SCRIPT_URL_HERE", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      alert("Appointment Booked Successfully!");
  
      // Reset form
      setFormData({
        name: "",
        phone: "",
        email: "",
        date: "",
        time: "",
        service: "",
        notes: ""
      });
  
    } catch (error) {
      alert("Something went wrong");
    }
  };  

  return (
    <div className="appointment-section">

      {/* ===== TOP HEADER ===== */}
      <div className="appointment-header">
        <h2>Book Your Appointment</h2>
        <p>Schedule your visit with Trident Dental Clinic</p>
      </div>

      {/* ===== FORM CARD ===== */}
      <div className="appointment-card">
        <form className="appointment-form" onSubmit={handleSubmit}>

          <input
            type="text"
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
          />

          {/* FULLY CLICKABLE DATE */}
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          {/* FULLY CLICKABLE TIME */}
          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            onChange={handleChange}
            required
          >
            <option value="">Select Service</option>
            <option>Cleaning</option>
            <option>Root Canal</option>
            <option>Whitening</option>
            <option>Braces</option>
            <option>Implants</option>
            <option>Other</option>
          </select>

          <textarea
            name="notes"
            placeholder="Additional Notes"
          />

          <button type="submit">
            Book Now
          </button>

        </form>
      </div>

    </div>
  );
};

export default Appointment;
