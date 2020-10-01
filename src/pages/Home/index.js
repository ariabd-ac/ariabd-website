import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="home-wrap">
      <h3>Hello, I'am</h3>
      <h1>Ari Abdurrahman Ghufron</h1>
      <h4>Front-end Development</h4>
      <hr className="light" />
      <p>
        A professional front-end developer from Jakarta, Indonesia. I always
        give the best effort for each projects I did. I give a solution with my
        creative app.
      </p>
      <br />
      <span id="phone">+62 831-1372-9917</span>
      <span id="email">ariabdurrahmang@gmail.com</span>
      <hr className="white" />
      <a class="btn" href="file/Prawito_Hudoro_Resume.pdf" target="_blank">
        Download CV
      </a>
    </div>
  );
};

export default Home;
