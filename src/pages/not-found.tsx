import React from "react";
import OwlOnRockSvg from "../assets/svgs/owlonrock.svg";
import useWindowHeight from "../hooks/useWindowHeight";

const NotFound = () => {
  const deviceHeight = useWindowHeight();
  return (
    <div
      className="molecule-page page-not-found"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <img src={OwlOnRockSvg} />
    </div>
  );
};

export default NotFound;
