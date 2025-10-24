import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/BackToMenu.css";

const BackToMenu = () => {
  const navigate = useNavigate();

  return (
    <button 
      className="back-to-menu-btn" 
      onClick={() => navigate("/Menu")}
      aria-label="Go back to menu"
    >
      <span className="back-icon">←</span>
      <span className="back-text">Back to Menu</span>
    </button>
  );
};

export default BackToMenu;
