import React from "react";
import Maps from "../../components/atoms/Maps";
import "./Contact.css";

const Contact = () => {
  return (
    <div class="contact-wrap ng-scope">
      <h3 class="title">
        my<span>contact</span>
      </h3>
      <hr class="bold" />

      <h4>
        <strong>Slawi - Kab. Tegal, Indonesia</strong>
      </h4>
      <p>
        JL. Melati No.37 RT 03 RW 03 Kel. Pakembaran, Kec. Slawi, Kab. Tegal,
        Jawa Tengah
      </p>
      <p>
        <strong>52415</strong>
      </p>
      <p>+62 831-1372-9917 | ariabd.com@gmail.com</p>
      <br />
      <div id="map" class="map">
        <Maps />
        {/* <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.2442815082827!2d109.12962531434812!3d-6.9804756702947435!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNTgnNDkuNyJTIDEwOcKwMDcnNTQuNSJF!5e0!3m2!1sid!2sid!4v1602178921050!5m2!1sid!2sid"
          width="100%"
          height="350vh"
          frameborder="0"
          // style="border:0;"
          allowfullscreen=""
          aria-hidden="false"
          tabindex="0"
        ></iframe> */}
      </div>
    </div>
  );
};

export default Contact;
