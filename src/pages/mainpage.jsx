import React from "react";
import Splash from "../backgrounddesigns/1.svg";
import Main from "../backgrounddesigns/2.svg";
import Location from "../components/location"
import ProfileForm from "../components/ProfileForm";

export default function mainpage() {
  return (
    <>
      <div className="sign-div"><a href="/signup">SignUp</a><br></br>
        <a href="login">Login</a><br></br><a href="/">Home</a> </div>

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
      <Location />
    </>
  );
}
