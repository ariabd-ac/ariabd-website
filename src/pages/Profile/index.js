import React from "react";
import "./Profile.css";
import {
  FaUser,
  FaPhoneAlt,
  FaGlobeAmericas,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { GoCalendar } from "react-icons/go";
import { FiSend } from "react-icons/fi";
import { IconContext } from "react-icons";

const Profile = () => {
  return (
    <div className="profile-wrap">
      <div className="my-data">
        <IconContext.Provider
          value={{
            color: "#09736f",
            className: "global-class-name",
            size: "1em",
          }}
        >
          <h3 className="title">
            About<span>Me</span>
          </h3>
          <hr className="bold" />
          <div className="bio-data">
            <div className="ng-binding">
              <FaUser /> Name
            </div>

            <div className="ng-binding">Ari Abdurrahman Ghufron</div>
          </div>
          <div className="bio-data">
            <div className="ng-binding">
              <GoCalendar /> Date of birth
            </div>
            <div className="ng-binding">June 4th 1999</div>
          </div>
          <div className="bio-data ng-scope">
            <div className="ng-binding">
              <FaPhoneAlt /> Phone
            </div>
            <div className="ng-binding">+62 831-1372-9917</div>
          </div>
          <div className="bio-data ng-scope" ng-repeat="me in aboutData">
            <div className="ng-binding">
              <FiSend /> Email
            </div>
            <div className="ng-binding">ariabdurrahmang@gmail.com</div>
          </div>
          <div className="bio-data ng-scope" ng-repeat="me in aboutData">
            <div className="ng-binding">
              <FaGlobeAmericas /> Web
            </div>
            <div className="ng-binding">ariabd.pemalicomal.com</div>
          </div>
          <div className="bio-data ng-scope" ng-repeat="me in aboutData">
            <div className="ng-binding">
              <FaMapMarkerAlt /> Address
            </div>
            <div className="ng-binding">Tegal, Indonesia</div>
          </div>
        </IconContext.Provider>
      </div>

      <div className="line-wrap">
        <h3 className="title">
          my<span>education</span>
        </h3>
        <hr className="bold" />
        <br />
        <div className="table-wrap first-head">
          <div className="time-table"></div>
          <div className="content-table">
            <i className="fa fa-graduation-cap ico-resume"></i>
          </div>
        </div>
        <div className="table-wrap ng-scope" ng-repeat="edu in educationData">
          <div className="time-table">
            <div>
              <h5 className="ng-binding">2017 - Present</h5>
            </div>
          </div>
          <div className="content-table">
            <i className="dot"></i>
            <div>
              <h5 className="ng-binding">
                Bachelor of Applied Science / Polytechnic Harapan Bersama
              </h5>
              <p className="ng-binding">
                Bachelor of Informatics Engineering in Applied Science, studied
                self-taught programming since Vocational High School, then
                focused on front-end website developers. Starting campus
                programming projects, and freelance.
              </p>
            </div>
          </div>
        </div>
        <div className="table-wrap ng-scope" ng-repeat="edu in educationData">
          <div className="time-table">
            <div>
              <h5 className="ng-binding">2015 - 2017</h5>
            </div>
          </div>
          <div className="content-table">
            <i className="dot"></i>
            <div>
              <h5 className="ng-binding">
                Vocational High School / SMK Bina Nusa Slawi
              </h5>
              <p className="ng-binding">
                Multimedia major. Start learn a web design with HTML CSS.
                Starting with the website display design and then the mobile
                then implemented and likes to edit videos. Active in school
                activities, and was once a Scout Leader
              </p>
            </div>
          </div>
        </div>
        <div className="table-wrap ng-scope" ng-repeat="edu in educationData">
          <div className="time-table">
            <div>
              <h5 className="ng-binding">2012 - 2014</h5>
            </div>
          </div>
          <div className="content-table">
            <i className="dot"></i>
            <div>
              <h5 className="ng-binding">
                Islamic Junior High School / MTS N Slawi
              </h5>
              <p className="ng-binding">
                Active in school activities such as OSIS, Scouting, Paskibra and
                participating in inter-school competitions
              </p>
            </div>
          </div>
        </div>

        <div className="table-wrap ng-scope" ng-repeat="edu in educationData">
          <div className="time-table">
            <div>
              <h5 className="ng-binding">2007 - 2012</h5>
            </div>
          </div>
          <div className="content-table">
            <i className="dot"></i>
            <div>
              <h5 className="ng-binding">
                Elementary School / SD N 3 Pakembaran
              </h5>
              <p className="ng-binding">
                SD N Pakembaran 3 is the first formal school which I attended.
                Many achievements were obtained and many experience gained.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="my-hobby">
        <h3 className="title">
          MY<span>HOBBIES</span>
        </h3>
        <hr className="bold" />
        <p>
          Enjoy the storyline deeper by reading a book, or sometimes enjoy some
          thrilling action scenes just to refresh myself from the routine.
          Traveling to a beautiful place then take several pictures can be done
          to find new ideas.
        </p>
        <br />
        <div className="hobbies">
          <div className="hobby" ng-repeat="hob in hobbies">
            <i className="fa fa-book"></i>
            <h4 className="ng-binding">Books</h4>
          </div>
          <div className="hobby ng-scope" ng-repeat="hob in hobbies">
            <i className="fa fa-film"></i>
            <h4 className="ng-binding">Movies</h4>
          </div>
          <div className="hobby ng-scope" ng-repeat="hob in hobbies">
            <i className="fa fa-photo"></i>
            <h4 className="ng-binding">Photos</h4>
          </div>
          <div className="hobby ng-scope" ng-repeat="hob in hobbies">
            <i className="fa fa-plane"></i>
            <h4 className="ng-binding">Travelling</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
