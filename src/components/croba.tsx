/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import RightAngleSvg from "../assets/svgs/rightangle.svg";

interface ICrobaProps {
  text: string;
  width?: number; // this is only vmin
  height?: number; // this is only vmin
  fontSize?: number | string;
}

const Croba: React.FC<ICrobaProps> = ({
  text,
  width = 24,
  height = 24,
  fontSize = "2.4vmin",
}) => {
  return (
    <div
      className="component-croba"
      style={{
        width: width + "vmin",
        height: height + "vmin",
      }}
    >
      <img
        src={RightAngleSvg}
        className="component-croba__angle"
        style={{
          left: width >= 30 ? "7.5vmin" : "6.5vmin",
          top: width >= 30 ? "3.5vmin" : "2.5vmin",
        }}
      />
      <span
        style={{
          fontSize: fontSize,
        }}
      >
        {text}
      </span>
    </div>
  );
};

export default Croba;
