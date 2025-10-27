// src/components/CookieConsent.jsx
import { useState, useEffect } from "react";

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const cookiesAccepted = localStorage.getItem("cookiesAccepted");
    if (!cookiesAccepted) {
      setIsVisible(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookiesAccepted", "true");
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="cookies-popup">
      <p>
        This website uses cookies to ensure you get the best experience on our website.{" "}
        <a href="/privacy-policy">Learn more</a>
      </p>
      <button onClick={acceptCookies}>Accept</button>

      <style>{`
        .cookies-popup {
          position: fixed;
          bottom: 20px;
          left: 20px;
          right: 20px;
          background-color: #333;
          color: #fff;
          padding: 20px;
          border-radius: 10px;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 10px;
          z-index: 1000;
        }
        .cookies-popup button {
          background-color: #4CAF50;
          color: white;
          border: none;
          padding: 10px 20px;
          cursor: pointer;
          border-radius: 5px;
        }
        .cookies-popup button:hover {
          background-color: #45a049;
        }
      `}</style>
    </div>
  );
};

export default CookieConsent;
