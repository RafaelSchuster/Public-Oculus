import React from "react";
import Background from "../backgrounddesigns/3.svg";
import Map from "../components/googlemap";

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
      <Map />
    </div>
  );
}

