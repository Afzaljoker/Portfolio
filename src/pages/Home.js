import LinkedIn from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHub from "@material-ui/icons/GitHub";
import React from "react";
import "../styles/Home.css"

export default function Home() {
  return (
    <div className="home">
      <div className="about">
        <div>
          <h2>Holla AFzal Here</h2>
          <div className="prompt">
            <p>developer</p>
            <LinkedIn />
            <EmailIcon />
            <GitHub />
          </div>
        </div>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-end</h2>
            <span>loreom</span>
          </li>
          <li className="item">
            <h2>Back-end</h2>
            <span>Lorem</span>
          </li>{" "}
          <li className="item">
            <h2>Languages</h2>
            <span>Lorem</span>
          </li>
        </ol>
      </div>
    </div>
  );
}
