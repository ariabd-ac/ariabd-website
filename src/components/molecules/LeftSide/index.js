import React from "react";
import { aripng } from "../../../assets";
import "./LeftSide.css";
import { GrFacebook, GrInstagram, GrLinkedinOption } from "react-icons/gr";
import { FaTwitter } from "react-icons/fa";

const LeftSide = () => {
  return (
    <div className="left-side">
      <div className="cover-photo">
        <img src={aripng} alt="foto" />
        <div className="identity">
          <h3>Ari Abdurrahman Ghufron</h3>
          <p>Front-end Developer </p>
        </div>
      </div>

      <div className="cover-social">
        <ul>
          <li>
            <a
              className="sosmed"
              href="https://www.facebook.com/elitkill008"
              target="_blank"
            >
              <GrFacebook size={20} />
            </a>
          </li>
          <li>
            <a
              className="sosmed"
              href="https://twitter.com/ariabd_id"
              target="_blank"
            >
              <FaTwitter size={20} />
            </a>
          </li>
          <li>
            <a
              className="sosmed"
              href="https://www.instagram.com/ariabd.ac/"
              target="_blank"
            >
              <GrInstagram size={20} />
            </a>
          </li>
          <li>
            <a
              className="sosmed"
              href="https://www.linkedin.com/in/ariabdac007/"
              target="_blank"
            >
              <GrLinkedinOption size={20} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default LeftSide;
