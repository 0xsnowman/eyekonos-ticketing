import React from "react";

import Button from "../components/button";

import OwlOnRockSvg from "../assets/svgs/owlonrock.svg";
import SpinButton from "../components/spinbutton";
import SlugLinkButton from "../components/spluglinkbutton";
import { useHistory, useLocation } from "react-router-dom";
import BackButton from "../components/backbutton";

const EventDetails = () => {
  const history = useHistory();

  return (
    <div className="molecule-page page-eventdetails">
      <div className="page-eventdetails__content">
        <div className="page-eventdetails__content__main">
          <div className="page-eventdetails__content__main__buttons">
            <BackButton onClick={() => history.push("/event-creator")} />
            <Button
              border
              borderRadius
              color="white"
              fontSize={"5vmin"}
              fontWeight="bold"
              paddingVertical={"4vmin"}
              borderColor="#F0BB51"
              borderWidth={"0.4vmin"}
              fixedWidth
              width={"50vmin"}
              hoverable={false}
            >
              <div style={{ fontFamily: "InterBold", fontSize: "3vmin" }}>
                Event Details
              </div>
            </Button>

            <div style={{ width: "10vmin" }}></div>
          </div>
          <div className="page-eventdetails__content__main__table">
            <div className="page-eventdetails__content__main__table__description">
              <SlugLinkButton
                border
                borderRadius
                fixedWidth
                width={"60vmin"}
                insideBorderDirection="VERTICAL"
                onNextButtonClick={() => {
                  history.push("/event-creator/create-event");
                }}
              />
            </div>
            <div className="page-eventdetails__content__main__table__button">
              <SpinButton
                paddingVertical={"2.3vmin"}
                paddingHorizontal={"2vmin"}
                borderRadius
                borderRadiusAmount={"4.5vmin"}
                color="white"
                fontSize={"2.2vmin"}
                fontWeight="bold"
                merchandiseTop={-3.5}
                pinImgTop={1.5}
              >
                Add individual Seating
              </SpinButton>
            </div>
            <div className="page-eventdetails__content__main__table__footer">
              *Individual Seating allows NFT's to be given to specific seats*
            </div>
          </div>
          <div className="page-eventdetails__content__main__svg">
            <img src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventDetails;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
