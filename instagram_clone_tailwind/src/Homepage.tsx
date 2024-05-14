import React from "react";
import Sidenav from "./navigation/Sidenav";
import Timeline from "./timeline/Timeline";
import "./style.css";

// for custom flex, note square bracket args:
// https://tailwindcss.com/docs/adding-custom-styles#using-arbitrary-values

function Homepage() {
  return (
    <div className="flex flex-row">
      <div className="flex-[0.15]">
        <Sidenav />
      </div>
      <div className="flex-[0.75]">
        <Timeline />
      </div>
    </div>
  );
}

export default Homepage;
