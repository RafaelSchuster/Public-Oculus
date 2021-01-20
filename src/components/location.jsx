import React from "react";
import Background from "../backgrounddesigns/3.svg";
import "../css/map.css";

export default function location() {
  return (
    <div
      className="background"
      style={{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        backgroundSize: "100% 100%",
      }}
    >
      <h1 className="title">Here are some providers in the area</h1>

      <div
        className="map"
        dangerouslySetInnerHTML={{
          __html: `<iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d54094.63262875113!2d34.76284698941475!3d32.07156013207808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1soptometrists!5e0!3m2!1sen!2sil!4v1611173531866!5m2!1sen!2sil width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"/>`,
        }}
      />
    </div>
  );
}
