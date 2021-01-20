import React from "react";
import Splash from "../backgrounddesigns/1.svg";
import Main from "../backgrounddesigns/2.svg";
import Location from "../components/location"

export default function mainpage() {
  return (
    <>
        <div
          className="background"
          style={{
            backgroundImage: `url(${Splash})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "100% 100%",
          }}
        />
        <div
          className="background"
          style={{
            backgroundImage: `url(${Main})`,
            backgroundRepeat: "no-repeat",
            height: "100vh",
            backgroundSize: "100% 100%",
          }}
        />
        <Location/>
    </>
  );
}
