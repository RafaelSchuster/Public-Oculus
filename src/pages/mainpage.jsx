import react from "react";
import Splash from "../background designs/1.svg"
import Main from "../background designs/2.svg"


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
      ></div>
      <div
        className="background"
        style={{
          backgroundImage: `url(${Main})`,
          backgroundRepeat: "no-repeat",
          height: "100vh",
          backgroundSize: "100% 100%",
        }}
      ></div>
    </>
  );
}
