/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import ButtonPinSvg from "../assets/svgs/buttonpin.svg";
import PlusSvg from "../assets/svgs/plus.svg";

interface ISpinButtonProps {
  children: string | React.ReactNode;
  backgroundColor?: string;
  onClick?: Function;
  disabled?: boolean;
  fixedWidth?: boolean;
  oneTimeButton?: boolean;
  border?: boolean;
  fontSize?: number | string;
  fontWeight?: string;
  borderRadius?: boolean;
  borderRadiusAmount?: number | string;
  paddingVertical?: number | string;
  paddingHorizontal?: number | string;
  color?: string;
  borderColor?: string;
  borderWidth?: number | string;
  extraPrice?: boolean;
  plusVisible?: boolean;
  pinImgTop?: number;
  merchandiseTop?: number;
  hoverable?: boolean;
}

const SpinButton: React.FC<ISpinButtonProps> = ({
  children,
  backgroundColor = "#102F82",
  onClick = () => {},
  disabled,
  fixedWidth,
  fontSize = "1.8vmin",
  fontWeight = "normal",
  oneTimeButton,
  border = false,
  borderRadius = false,
  borderRadiusAmount = "1.9vmin",
  paddingVertical = "3vmin",
  paddingHorizontal = "initial",
  color = "#F0BB51",
  borderColor = "#F0BB51",
  borderWidth = "0.1vmin",
  extraPrice = true,
  plusVisible = false,
  pinImgTop = 0.5,
  merchandiseTop = -0.7,
  hoverable = true,
}) => {
  const [isHover, setIsHover] = React.useState(false);
  const [localDisabled, setLocalDisabled] = React.useState(false);
  return (
    <div
      className={[
        "molecule-spinbutton",
        (disabled || localDisabled) && "molecule-spinbutton-disabled",
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
        width: fixedWidth ? "10vmin" : "100%",
        backgroundColor: backgroundColor,
        boxShadow:
          isHover && hoverable
            ? "0 0 0.2vmin 0.2vmin #0066FFFF, 0 0 0.6vmin 0.6vmin #F0BB51FF"
            : "0 0 2vmin transparent",
        textAlign: `center`,
        paddingTop: "0.3vmin",
        paddingBottom: "0.3vmin",
        cursor: "pointer",
        borderRadius: borderRadius ? borderRadiusAmount : 0,
        color: color,
      }}
    >
      <div
        style={{
          borderTop: border ? `${borderWidth} solid ${borderColor}` : "0",
          borderBottom: border ? `${borderWidth} solid ${borderColor}` : "0",
          paddingTop: paddingVertical,
          paddingBottom: paddingVertical,
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          marginLeft: "1.5vmin",
          marginRight: "1.5vmin",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: "1.5vmin",
        }}
      >
        {plusVisible && (
          <div
            style={{
              backgroundColor: "#0066FF",
              width: "4vmin",
              height: "4vmin",
              borderRadius: "5vmin",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={PlusSvg} width={"2.5vmin"} height={"2.5vmin"} />
          </div>
        )}
        <span
          style={{
            color: color,
            fontSize: fontSize,
            fontWeight: fontWeight,
            display: "flex",
          }}
        >
          {children}
        </span>
      </div>
      <img className="molecule-spinbutton__pinimg" src={ButtonPinSvg} />
      {!extraPrice && (
        <div
          className="molecule-spinbutton__dot"
          style={{
            marginTop: merchandiseTop + pinImgTop + "vmin",
          }}
        />
      )}
      {!extraPrice && (
        <div
          className="molecule-spinbutton__pricenot"
          style={{
            marginTop: merchandiseTop - 1 + pinImgTop + "vmin",
            right: "-4.5vmin",
            fontSize: "2.4vmin",
          }}
        >
          $99
        </div>
      )}
      {extraPrice && (
        <div
          className="molecule-spinbutton__dot"
          style={{
            marginTop: merchandiseTop - 2 + pinImgTop + "vmin",
          }}
        />
      )}
      {extraPrice && (
        <div
          className="molecule-spinbutton__price"
          style={{
            marginTop: merchandiseTop - 2.8 + pinImgTop + "vmin",
            fontSize: "2.2vmin",
          }}
        >
          $99
        </div>
      )}
      {extraPrice && (
        <div
          className="molecule-spinbutton__extraprice"
          style={{
            marginTop: merchandiseTop - 3.5 + pinImgTop + "vmin",
          }}
        >
          $235
        </div>
      )}
    </div>
  );
};

export default SpinButton;
