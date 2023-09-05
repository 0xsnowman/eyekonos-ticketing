import React, { useState } from "react";

import Button from "../components/button";

import OwlOnRockSvg from "../assets/svgs/owlonrock.svg";
import BackSvg from "../assets/svgs/back.svg";
import SlugLinkButton from "../components/spluglinkbutton";
import { useHistory } from "react-router-dom";
import BackButton from "../components/backbutton";

const CreateEvent = () => {
  const history = useHistory();

  const [stage, setStage] = useState<"input" | "summary" | "checkout">("input");

  return (
    <div
      className="molecule-page page-createevent"
      style={
        {
          // height: deviceHeight - 90,
        }
      }
    >
      <div className="page-createevent__content">
        <div className="page-createevent__content__main">
          <div className="page-createevent__content__main__buttons">
            <BackButton onClick={() => history.goBack()} />
            {stage === "input" && (
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
            )}
            {stage === "summary" && (
              <Button
                border
                borderRadius
                color="white"
                fontSize={"2.8vmin"}
                fontWeight="bold"
                paddingVertical={"2vmin"}
                borderColor="#F0BB51"
                borderWidth={"0.3vmin"}
                fixedWidth
                width={"60vmin"}
                hoverable={false}
              >
                Preview - Event Summary
              </Button>
            )}
            {stage === "checkout" && (
              <Button
                border
                borderRadius
                color="white"
                fontSize={"2.8vmin"}
                fontWeight="bold"
                paddingVertical={"2vmin"}
                borderColor="white"
                borderWidth={"0.3vmin"}
                fixedWidth
                width={"60vmin"}
                hoverable={false}
              >
                Checkout
              </Button>
            )}
            <div style={{ width: "10vmin" }}></div>
          </div>
          <div className="page-createevent__content__main__table">
            {stage === "input" && (
              <div className="page-createevent__content__main__table__description">
                <SlugLinkButton
                  border
                  borderRadius
                  fixedWidth
                  width={"60vmin"}
                  urlVisible={false}
                  insideBorderDirection="VERTICAL"
                  placeHolder="Event Platform"
                  secondPlaceHolder="API Key"
                  onNextButtonClick={() => {
                    setStage("summary");
                  }}
                />
              </div>
            )}
            {stage === "summary" && (
              <div className="page-createevent__content__main__table__description">
                <Button
                  border
                  borderRadius
                  insideBorderDirection="VERTICAL"
                  hoverable={false}
                  marginOutside={0}
                >
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <div
                      className="page-createevent__content__main__table__description__rows"
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                        alignItems: "flex-start",
                        color: "white",
                        padding: 20,
                        gap: 10,
                      }}
                    >
                      <div>
                        <span>Event Name- ...</span>
                      </div>
                      <div>
                        <span>Complimentary Storage - 10.0GB</span>
                      </div>
                      <div>
                        <span>
                          API Integration - None (Fandango/Eventbrite...)
                        </span>
                      </div>
                    </div>
                    <div className="page-createevent__content__main__table__description__totalprice">
                      Total Price - $
                    </div>
                  </div>
                </Button>
              </div>
            )}
            {stage === "summary" && (
              <div className="page-createevent__content__main__table__button">
                <Button
                  paddingVertical={12}
                  paddingHorizontal={20}
                  borderRadius
                  borderRadiusAmount={25}
                  color="white"
                  fontSize={22}
                  fontWeight="bold"
                  onClick={() => {
                    setStage("checkout");
                  }}
                >
                  Continue
                </Button>
              </div>
            )}
            {stage === "checkout" && (
              <div className="page-createevent__content__main__table__description__checkout">
                <div style={{ cursor: "pointer" }}>Paypal</div>
                <div style={{ cursor: "pointer" }}>Apple Pay</div>
                <div style={{ cursor: "pointer" }}>Google Pay</div>
                <div style={{ cursor: "pointer" }}>Credit / Debit Card</div>
                <div style={{ cursor: "pointer" }}>Coinbase</div>
                <div style={{ cursor: "pointer" }}>
                  cryptomus <span>(cryptocurrency payments)</span>
                </div>
              </div>
            )}
          </div>
          <div className="page-createevent__content__main__svg">
            <img src={OwlOnRockSvg} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateEvent;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
