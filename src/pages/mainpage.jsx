import { Button } from "@material-ui/core";
import React from "react";
import Splash from "../backgrounddesigns/1.svg";
import Main from "../backgrounddesigns/2.svg";
import Location from "../components/location";

export default function mainpage() {
  return (
    <>
      <div className="sign-div"><Button variant="outlined" color="primary" href="/" className='nav-btn'>
          Home
          </Button>
        <Button variant="outlined" color="primary" href="/signup" className='nav-btn'>
          SignUp
        </Button>
        <Button variant="outlined" color="primary" href="/login" className='nav-btn'>
          Login
        </Button> 
        </div>
      <div
        className="background"
        style={{
          backgroundImage: `url(${Splash})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "100% 100%",
        }}
      >
      </div>
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
