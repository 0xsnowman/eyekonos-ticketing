import React from "react";

interface IButtonProps {
  children: string | React.ReactNode;
  backgroundColor?: string;
  onClick?: Function;
  disabled?: boolean;
  fixedWidth?: boolean;
  fixedHeight?: boolean;
  width?: number | string;
  height?: number;
  minWidth?: number | string;
  oneTimeButton?: boolean;
  border?: boolean;
  insideBorderDirection?: "HORIZONTAL" | "VERTICAL";
  fontSize?: number | string;
  fontWeight?: string;
  borderRadius?: boolean;
  borderRadiusAmount?: number | string;
  paddingVertical?: number | string;
  paddingVerticalOutside?: number;
  paddingHorizontal?: number | string;
  color?: string;
  borderColor?: string;
  borderWidth?: number | string;
  borderOutside?: boolean;
  borderOutsideColor?: string;
  hoverable?: boolean;
  marginOutside?: number | string;
}

const Button: React.FC<IButtonProps> = ({
  children,
  backgroundColor = "#102F82",
  onClick = () => {},
  disabled,
  fixedWidth = false,
  fixedHeight = false,
  width = "16vmin",
  height = "12vmin",
  minWidth = "initial",
  fontSize = "2vmin",
  fontWeight = "normal",
  oneTimeButton,
  border = false,
  insideBorderDirection = "HORIZONTAL",
  borderRadius = false,
  borderRadiusAmount = "2vmin",
  paddingVertical = "3vmin",
  paddingVerticalOutside = "0.5vmin",
  paddingHorizontal = "1vmin",
  color = "#F0BB51",
  borderColor = "#F0BB51",
  borderWidth = 1,
  borderOutside = false,
  borderOutsideColor = "#F0BB51",
  hoverable = true,
  marginOutside = "1.5vmin",
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
        // height: fixedHeight ? height : "100%",
        background: backgroundColor,
        boxShadow:
          isHover && !borderOutside && hoverable
            ? `0 0 0.2vmin 0.2vmin ${backgroundColor}, 0 0 0.6vmin 0.6vmin #F0BB51FF`
            : "0 0 2vmin transparent",
        textAlign: `center`,
        paddingTop: borderOutside ? 0 : paddingVerticalOutside,
        paddingBottom: borderOutside ? 0 : paddingVerticalOutside,
        cursor: hoverable ? "pointer" : "auto",
        borderRadius: borderRadius ? borderRadiusAmount : 0,
        color: color,
        border: borderOutside ? "0.4vmin solid " + borderColor : "",
        display: borderOutside ? "flex" : "block",
        justifyContent: borderOutside ? "center" : "initial",
        alignItems: borderOutside ? "center" : "initial",
        minWidth: minWidth,
        fontFamily : "InterBold"
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
          paddingLeft: paddingHorizontal,
          paddingRight: paddingHorizontal,
          marginLeft: marginOutside,
          marginRight: marginOutside,
          height: fixedHeight ? height : "initial",
          background: backgroundColor,
          borderRadius: !border && borderRadius ? borderRadiusAmount : 0,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {typeof children === "string" && (
          <span
            style={{
              color: color,
              fontSize: fontSize,
              fontWeight: fontWeight,
              fontFamily: "InterRegular",
            }}
          >
            {children}
          </span>
        )}
        {typeof children !== "string" && children}
      </div>
    </div>
  );
};

export default Button;
