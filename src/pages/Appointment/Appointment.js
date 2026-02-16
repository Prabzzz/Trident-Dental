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

  const [notification, setNotification] = useState({
    show: false,
    type: "", // success or error
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const showNotification = (type, message) => {
    setNotification({ show: true, type, message });

    setTimeout(() => {
      setNotification({ show: false, type: "", message: "" });
    }, 3000);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await fetch("YOUR_GOOGLE_SCRIPT_URL", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      showNotification("success", "Appointment Booked Successfully!");

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
      showNotification("error", "Something went wrong. Please try again.");
    }
  };

  return (
    <div className="appointment-section">

      {/* Notification */}
      {notification.show && (
        <div className={`custom-notification ${notification.type}`}>
          {notification.message}
        </div>
      )}

      <div className="appointment-header">
        <h2>Book Your Appointment</h2>
        <p>Schedule your visit with Trident Dental Clinic</p>
      </div>

      <div className="appointment-card">
        <form className="appointment-form" onSubmit={handleSubmit}>
          
          <input
            type="text"
            name="name"
            value={formData.name}
            placeholder="Full Name"
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phone"
            value={formData.phone}
            placeholder="Phone Number"
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email"
            onChange={handleChange}
          />

          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            required
          />

          <input
            type="time"
            name="time"
            value={formData.time}
            onChange={handleChange}
            required
          />

          <select
            name="service"
            value={formData.service}
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
            value={formData.notes}
            onChange={handleChange}
            placeholder="Additional Notes"
          />

          <button type="submit">Book Now</button>

        </form>
      </div>
    </div>
  );
};

export default Appointment;
