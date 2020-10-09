import React from "react";
import "./Home.css";
import styled from "styled-components";
import uploadedFileLink from "../../assets/pdf/CV.pdf";

const Home = () => {
  return (
    <div className="home-wrap">
      <h3>Hello, I'am</h3>
      <h1>Ari Abdurrahman Ghufron</h1>
      <h4>Front-end Development</h4>
      <hr className="light" />
      <p>
        A Junior front-end developer from tefal, Indonesia. <br /> I build
        desktop and mobile web apps that provide intuitive and pixel-perfect
        user interfaces.
      </p>
      <br />
      <span id="phone">+62 831-1372-9917</span>
      <span id="email">ariabdurrahmang@gmail.com</span>
      <hr className="white" />

      <a
        class="btn"
        href={uploadedFileLink}
        target="_blank"
        rel="noopener noreferrer"
      >
        <Resume>Download CV</Resume>
      </a>
    </div>
  );
};

export default Home;

const Resume = styled.button`
  color: black;
  border-color: solid 1px #ffff;
  background: #2ef3f3;
  font-size: 0.9em;
  margin: 1em;
  padding: 0.25em 1em;
  opacity: 0.9;
  border-radius: 6px;
  cursor: pointer;
  text-decoration: none;
`;
