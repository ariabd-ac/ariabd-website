import React from "react";
import "./Resume.css";

const Resume = () => {
  return (
    <div class="resume-wrap ng-scope">
      <div class="line-wrap">
        <h3 class="title">
          Internship & Work <br />
          <span>Experience</span>
        </h3>
        <hr class="bold" />
        <div class="table-wrap first-head">
          <div class="time-table"></div>
          <div class="content-table">
            <i class="fa fa-suitcase ico-resume"></i>
          </div>
        </div>
        <div class="table-wrap ng-scope" ng-repeat="work in workExperience">
          <div class="time-table">
            <div>
              <h5 class="ng-binding">Sept 2019 - Present</h5>
            </div>
          </div>
          <div class="content-table">
            <i class="dot"></i>
            <div>
              <h5 class="ng-binding">
                Front-End Developer / BPSDA Pemali Comal (pemalicomal.com)
              </h5>
              <p class="ng-binding">
                BPSDA PEMALI COMAL is a Regional Water Resources Management
                Office of Central Java Province. Balai PSDA is to carry out some
                of the technical operational activities and or technical
                activities supporting the Office in the Water Resources Sector
                which is the authority of the Provincial Government.
              </p>
            </div>
          </div>
        </div>
        <div class="table-wrap ng-scope" ng-repeat="work in workExperience">
          <div class="time-table">
            <div>
              <h5 class="ng-binding">Juli 2019 - Sept 2019</h5>
            </div>
          </div>
          <div class="content-table">
            <i class="dot"></i>
            <div>
              <h5 class="ng-binding">
                Internship / PT. Imersa PT Imersa Solusi Teknologi
              </h5>
              <p class="ng-binding">
                Imersa is an Information Technology and Services company with
                website design services, application development, and digital
                marketing.
              </p>
            </div>
          </div>
        </div>
        <div class="table-wrap ng-scope" ng-repeat="work in workExperience">
          <div class="time-table">
            <div>
              <h5 class="ng-binding">Juli 2016 - Sept 2016</h5>
            </div>
          </div>
          <div class="content-table">
            <i class="dot"></i>
            <div>
              <h5 class="ng-binding">
                Internship / Bappeda dan Litbang Kab TEGAL
              </h5>
              <p class="ng-binding">
                Bappeda and R & D are part of the district government. tegal,
                and there is one famous building, namely the dadali building.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="my-skill">
        <h3 class="title">
          my<span>skill</span>
        </h3>
        <hr class="bold" />
        <div class="skill ng-scope" ng-repeat="skill in skillData">
          <div class="name-bar">
            <span class="ng-binding">HTML5</span>
            <span class="ng-binding">95%</span>
          </div>
          <div class="bar-skill">
            <div class="percent-skill-95"></div>
          </div>
        </div>
        <div class="skill ng-scope" ng-repeat="skill in skillData">
          <div class="name-bar">
            <span class="ng-binding">CSS3</span>
            <span class="ng-binding">85%</span>
          </div>
          <div class="bar-skill">
            <div class="percent-skill-85"></div>
          </div>
        </div>
        <div class="skill ng-scope" ng-repeat="skill in skillData">
          <div class="name-bar">
            <span class="ng-binding">Bootstrap</span>
            <span class="ng-binding">95%</span>
          </div>
          <div class="bar-skill">
            <div class="percent-skill-95"></div>
          </div>
        </div>
        <div class="skill ng-scope" ng-repeat="skill in skillData">
          <div class="name-bar">
            <span class="ng-binding">PHP</span>
            <span class="ng-binding">85%</span>
          </div>
          <div class="bar-skill">
            <div class="percent-skill-85"></div>
          </div>
        </div>
        <div class="skill ng-scope" ng-repeat="skill in skillData">
          <div class="name-bar">
            <span class="ng-binding">ReactJS</span>
            <span class="ng-binding">75%</span>
          </div>
          <div class="bar-skill">
            <div class="percent-skill-75"></div>
          </div>
        </div>
        <div class="skill ng-scope" ng-repeat="skill in skillData">
          <div class="name-bar">
            <span class="ng-binding">React Native</span>
            <span class="ng-binding">70%</span>
          </div>
          <div class="bar-skill">
            <div class="percent-skill-70"></div>
          </div>
        </div>
        <div class="skill ng-scope" ng-repeat="skill in skillData">
          <div class="name-bar">
            <span class="ng-binding">Flutter</span>
            <span class="ng-binding">65%</span>
          </div>
          <div class="bar-skill">
            <div class="percent-skill-65"></div>
          </div>
        </div>
        <div class="skill ng-scope" ng-repeat="skill in skillData">
          <div class="name-bar">
            <span class="ng-binding">Express</span>
            <span class="ng-binding">60%</span>
          </div>
          <div class="bar-skill">
            <div class="percent-skill-60"></div>
          </div>
        </div>
        <div class="skill ng-scope" ng-repeat="skill in skillData">
          <div class="name-bar">
            <span class="ng-binding">Adobe Premier</span>
            <span class="ng-binding">95%</span>
          </div>
          <div class="bar-skill">
            <div class="percent-skill-95"></div>
          </div>
        </div>
        <div class="skill ng-scope" ng-repeat="skill in skillData">
          <div class="name-bar">
            <span class="ng-binding">Photoshop</span>
            <span class="ng-binding">95%</span>
          </div>
          <div class="bar-skill">
            <div class="percent-skill-95"></div>
          </div>
        </div>
        <div class="skill ng-scope" ng-repeat="skill in skillData">
          <div class="name-bar">
            <span class="ng-binding">Corel Draw</span>
            <span class="ng-binding">90%</span>
          </div>
          <div class="bar-skill">
            <div class="percent-skill-90"></div>
          </div>
        </div>
      </div>
      <div class="my-services">
        <h3 class="title">
          MY<span>Services</span>
        </h3>
        <hr class="bold" />
        <p>
          I always give the best effort for each projects I did. I give a
          solution with my creative app.
        </p>
        <div class="services">
          <div class="service ng-scope" ng-repeat="service in serviceData">
            <i class="fa fa-lightbulb-o"></i>
            <h4 class="ng-binding">Inovative Ideas</h4>
            <hr />
            <p class="ng-binding">
              I am ready to start from scratch, or continue the ongoing
              projects. I always give innovative ideas to build the best
              applications.
            </p>
          </div>

          <div class="service ng-scope" ng-repeat="service in serviceData">
            <i class="fa fa-code"></i>
            <h4 class="ng-binding">Clean Code</h4>
            <hr />
            <p class="ng-binding">
              I always give a clean code to the consumer so the application is
              easy to understand and easy to develop.
            </p>
          </div>

          <div class="service ng-scope" ng-repeat="service in serviceData">
            <i class="fa fa-money"></i>
            <h4 class="ng-binding">Low Price</h4>
            <hr />
            <p class="ng-binding">
              Tell your great app to me. Adjust your budget. And "BOOM", your
              app ready to published.
            </p>
          </div>

          <div class="service ng-scope" ng-repeat="service in serviceData">
            <i class="fa fa-diamond"></i>
            <h4 class="ng-binding">Best Result</h4>
            <hr />
            <p class="ng-binding">
              I will give you the best applications for your best ideas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
