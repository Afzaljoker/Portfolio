import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHub from "@material-ui/icons/GitHub";
import React from "react";
import "../styles/Footer.css";

export default function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <LinkedInIcon />
        <GitHub />
      </div>
      <p>&copy; 2023-Afzal.com</p>
    </div>
  );
}
