import React, { Fragment } from "react";
import Github from "../../components/molecules/Github";
import AmazonImg from "../../pictures/amazon.png";
import WhatsappImg from "../../pictures/waclone.png";
import PemComImg from "../../pictures/pemalicomal.png";
import PortImg from "../../pictures/portof.png";

const Porto = () => {
  return (
    <Fragment>
      <h3 class="title">
        Github<span> Repo</span>
        <hr class="bold" />
      </h3>
      <Github />
      <div className="portofolio-wrap">
        {/* <div className="project-wrapper"> */}
        <h3 class="title">
          my<span> Portofolio</span>
        </h3>
        <hr class="bold" />
        {/* </div> */}
        <div className="show-wrap">
          <div class="porto-item">
            <a class="wrap-title" href="https://clone-768f1.web.app/">
              <div class="title-center">
                <span class="">Amazon Clone</span>
                <span class="">E-Commerce amazone clone</span>
              </div>
              <img class="img-show" src={AmazonImg} />
            </a>
          </div>

          <div class="porto-item">
            <a class="wrap-title" href="http://pemalicomal.com/">
              <div class="title-center">
                <span class="">Pemali Comal</span>
                <span class="">Sistem Irigasi Air</span>
              </div>
              <img class="img-show" src={PemComImg} />
            </a>
          </div>

          <div class="porto-item">
            <a class="wrap-title" href="https://whatsapp-clone-7ee74.web.app/">
              <div class="title-center">
                <span class="">Whatsapp Clone</span>
                <span class="">Front-end, Login auth google</span>
              </div>
              <img class="img-show" src={WhatsappImg} />
            </a>
          </div>

          <div class="porto-item">
            <a class="wrap-title" href="https://whatsapp-clone-7ee74.web.app/">
              <div class="title-center">
                <span class="">React Portofolio</span>
                <span class="">Front-end portofolio repo github</span>
              </div>
              <img class="img-show" src={PortImg} />
            </a>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Porto;
