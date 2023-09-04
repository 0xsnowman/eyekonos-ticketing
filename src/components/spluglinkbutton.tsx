/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ForwardSvg from "../assets/svgs/forward.svg";
import DownSvg from "../assets/svgs/downBlue.svg";

interface ISlugLinkButtonProps {
  children?: string;
  backgroundColor?: string;
  onClick?: Function;
  onNextButtonClick?: Function;
  disabled?: boolean;
  fixedWidth?: boolean;
  width?: number | string;
  oneTimeButton?: boolean;
  border?: boolean;
  fontSize?: number | string;
  borderRadius?: boolean;
  paddingVertical?: number | string;
  color?: string;
  placeHolder?: string;
  secondPlaceHolder?: string;
  linkButtonColor?: string;
  urlVisible?: boolean;
  borderColor?: string;
  borderWidth?: number | string;
  insideBorderDirection?: "HORIZONTAL" | "VERTICAL";
  extraLinkButtonVisible?: boolean;
}

const SlugLinkButton: React.FC<ISlugLinkButtonProps> = ({
  children,
  backgroundColor = "#102F82",
  onClick = () => {},
  onNextButtonClick = () => {},
  disabled,
  fixedWidth,
  width,
  fontSize = "1.8vmin",
  oneTimeButton,
  border = false,
  borderRadius = false,
  paddingVertical = "2.5vmin",
  color = "#F0BB51",
  placeHolder = "Event Name ...",
  secondPlaceHolder = "Page Slug ...",
  linkButtonColor = "white",
  urlVisible = true,
  borderWidth = "0.1vmin",
  borderColor = "#F0BB51",
  insideBorderDirection = "HORIZONTAL",
  extraLinkButtonVisible = false,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  const [localDisabled, setLocalDisabled] = React.useState(false);
  return (
    <div
      className={[
        "molecule-button",
        (disabled || localDisabled) && "molecule-button-disabled",
      ].join(" ")}
      onClick={() => {
        if (disabled !== true && localDisabled !== true) {
          onClick();
          if (oneTimeButton) {
            setLocalDisabled(true);
          }
        }
      }}
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
      style={{
        width: fixedWidth ? width : "100%",
        backgroundColor: backgroundColor,
        boxShadow: isHover
          ? `0 0 2vmin ${backgroundColor}`
          : "0 0 2vmin transparent",
        textAlign: `center`,
        paddingTop: "0.3vmin",
        paddingBottom: "0.3vmin",
        borderRadius: borderRadius ? "1.9vmin" : 0,
        color: color,
      }}
    >
      <div
        style={{
          borderTop:
            border && insideBorderDirection === "HORIZONTAL"
              ? `${borderWidth} solid ${borderColor}`
              : "0",
          borderBottom:
            border && insideBorderDirection === "HORIZONTAL"
              ? `${borderWidth} solid ${borderColor}`
              : "0",
          borderLeft:
            border && insideBorderDirection === "VERTICAL"
              ? `${borderWidth} solid ${borderColor}`
              : "0",
          borderRight:
            border && insideBorderDirection === "VERTICAL"
              ? `${borderWidth} solid ${borderColor}`
              : "0",
          paddingTop: paddingVertical,
          paddingBottom: paddingVertical,
          paddingLeft: "3vmin",
          paddingRight: "3vmin",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            alignItems: "flex-end",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vmin",
            }}
          >
            <input
              style={{
                borderRadius: "2vmin",
                borderWidth: 0,
                paddingLeft: "2vmin",
                paddingTop: "1.5vmin",
                paddingBottom: "1.5vmin",
                paddingRight: "2vmin",
                fontSize: "1.4vmin",
                lineHeight: "1.7vmin",
                fontWeight: "bold",
                fontFamily: "InterLight",
                minWidth: "35vmin",
                outline: "none",
              }}
              placeholder={placeHolder}
            />
            <input
              style={{
                borderRadius: "6vmin",
                borderWidth: 0,
                paddingLeft: "2vmin",
                paddingTop: "1.5vmin",
                paddingBottom: "1.5vmin",
                paddingRight: "2vmin",
                fontSize: "1.4vmin",
                lineHeight: "1.7vmin",
                fontWeight: "bold",
                fontFamily: "InterLight",
                minWidth: "35vmin",
                outline: "none",
              }}
              placeholder={secondPlaceHolder}
            />
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "2vmin",
            }}
          >
            {extraLinkButtonVisible ? <div
              style={{
                backgroundColor: linkButtonColor,
                width: "4.5vmin",
                height: "4.5vmin",
                borderRadius: "4.5vmin",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "1.5vmin",
                cursor: "pointer",
              }}
              onClick={() => {
                onNextButtonClick();
              }}
            >
              <img
                src={DownSvg}
                width={"75%"}
                height={"75%"}
              />
            </div> : <div></div>}
            <div
              style={{
                backgroundColor: linkButtonColor,
                width: "4.5vmin",
                height: "4.5vmin",
                borderRadius: "4.5vmin",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "1.5vmin",
                cursor: "pointer",
              }}
              onClick={() => {
                onNextButtonClick();
              }}
            >
              <img
                src={ForwardSvg}
                width={"75%"}
                height={"75%"}
                style={{ marginLeft: "0.4vmin" }}
              />
            </div>
          </div>
        </div>
        <div
          style={{
            paddingTop: "3vmin",
            display: urlVisible ? "block" : "none",
          }}
        >
          <div
            style={{
              color: "#F0BB51",
              fontSize: "2vmin",
              fontFamily: "InterBold",
            }}
          >
            page URL = eYeKONOS.com/
          </div>
        </div>
      </div>
    </div>
  );
};

export default SlugLinkButton;
