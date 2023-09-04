/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import BackSvg from "../assets/svgs/back.svg";

interface IBackButtonProps {
    onClick?: () => void;
}

const BackButton: React.FC<IBackButtonProps> = ({ onClick }) => {
  return (
    <div
      className="component-back-button"
      style={{
        backgroundColor: "#102F82",
        borderRadius: "2vmin",
        width: "7vmin",
        height: "7vmin",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "3vmin",
        color: "white",
        padding: "1vmin",
        marginRight: "3vmin",
        fontFamily: "InterBold",
        cursor: "pointer",
      }}
      onClick={onClick}
    >
      <img src={BackSvg} width={"75%"} height={"75%"} />
    </div>
  );
};

export default BackButton;
