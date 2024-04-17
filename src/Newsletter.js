import React, { useState } from "react";
import "./Newsletter.css";
export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setTimeout(() => {
      setSubscribed(true);
    }, 1000);
  };

  return (
    <div className="newsletter-container">
      <h3>Subscribe to Our Newsletter</h3>
      {subscribed ? (
        <p className="success-message">Thank you for subscribing!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="submit">Subscribe</button>
        </form>
      )}
    </div>
  );
}
