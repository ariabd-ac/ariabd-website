import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <nav>
      <ul>
        <li>
          <a id="tab-text" href="/">
            Welcome
          </a>
        </li>
        <li>
          <a id="tab-text" href="/profile">
            Profile
          </a>
        </li>
        <li>
          <a id="tab-text" href="/resume">
            Resume
          </a>
        </li>
        <li>
          <a id="tab-text" href="/portofolio">
            Portofolio
          </a>
        </li>
        <li>
          <a id="tab-text" href="/contact">
            Contact
          </a>
        </li>
      </ul>

      {/*  */}
    </nav>
  );
};

export default Header;
