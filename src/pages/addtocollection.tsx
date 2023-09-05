import React, { useState } from "react";

import Lottie from "react-lottie";

// components
import Header from "../components/header";
import Footer from "../components/footer";
// import VideoPlayer from "../components/video-player";

// animations
import * as animationData from "../assets/animations/top.json";
import SideBar from "../components/sidebar";
import Button from "../components/button";

import OwlOnRockSvg from "../assets/svgs/owlonrock.svg";
import BackSvg from "../assets/svgs/back.svg";
import ESelectView from "../components/eselect";
import useDeviceType from "../hooks/useDeviceType";
import ESearchView from "../components/esearch";
import ETicketView from "../components/eticket";
import Claimer from "../components/claimer";
import QRScanner from "../components/qrscanner";
import LinkButton from "../components/linkbutton";
import ETabView from "../components/tab";
import RadioTable from "../components/radiotable";
import ClaimTicket from "../components/claimticket";
import Croba from "../components/croba";
import CollectionTypeTicket from "../components/collectiontypeticket";
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";
import BackButton from "../components/backbutton";

const AddToCollection = () => {
  const deviceType = useDeviceType();
  const deviceHeight = useWindowHeight();
  const history = useHistory();
  const [stage, setStage] = React.useState<"select" | "ticket" | "upload">(
    "select"
  );

  return (
    <div className="molecule-page page-addtocollection">
      {stage === "select" && (
        <div className="page-addtocollection__content">
          <div className="page-addtocollection__content__main">
            <div className="page-addtocollection__content__main__buttons">
              <BackButton onClick={() => history.push("/event-creator")} />
              <div className="page-addtocollection__content__main__buttons__right">
                <Button
                  border
                  borderRadius
                  color="white"
                  fixedWidth
                  width={"40vmin"}
                  fontSize={"2.2vmin"}
                  fontWeight="bold"
                  paddingVertical={"3vmin"}
                  borderColor="#F0BB51"
                  borderWidth={"0.2vmin"}
                  hoverable={false}
                >
                  <div style={{ fontFamily: "InterBold", fontSize: "2.8vmin" }}>
                    Create & Manage NFT’s
                  </div>
                </Button>

                <div className="page-addtocollection__content__main__buttons__right__twobtns">
                  <div
                    id="croba-mint"
                    onClick={() => {
                      setStage("ticket");
                    }}
                  >
                    <Croba text="Mint" width={26} height={26} />
                  </div>
                  <div
                    id="croba-widthdraw"
                    onClick={() => {
                      setStage("ticket");
                    }}
                  >
                    <Croba text="Widthdraw" width={26} height={26} />
                  </div>
                  <div
                    id="croba-create"
                    onClick={() => {
                      setStage("ticket");
                    }}
                  >
                    <Croba text="Create" width={30} height={30} />
                  </div>
                  <div
                    id="croba-import"
                    onClick={() => {
                      setStage("ticket");
                    }}
                  >
                    <Croba text="Import" width={30} height={30} />
                  </div>
                </div>
              </div>
            </div>
            <div className="page-addtocollection__content__main__svg">
              <img alt="owlonrock" src={OwlOnRockSvg} />
            </div>
          </div>
        </div>
      )}
      {stage === "ticket" && (
        <div className="page-collectiontype__content">
          <div className="page-collectiontype__content__main">
            <div className="page-collectiontype__content__main__buttons">
              <div
                style={{
                  backgroundColor: "#102F82",
                  borderRadius: "1vmin",
                  width: "5vmin",
                  height: "5vmin",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "3vmin",
                  color: "white",
                  padding: "0.5vmin",
                  marginRight: "3vmin",
                  fontFamily: "InterRegular",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setStage("select");
                }}
              >
                <img src={BackSvg} width={"4vmin"} height={"4vmin"} />
              </div>
              <Button
                border
                borderRadius
                color="white"
                fontSize={"2.2vmin"}
                fontWeight="bold"
                paddingVertical={"2.5vmin"}
                borderColor="#F0BB51"
                borderWidth={"0.2vmin"}
                hoverable={false}
              >
                <div style={{ fontFamily: "InterBold", fontSize: "2.8vmin" }}>
                  Choose Collectible Type
                </div>
              </Button>
            </div>
            <div className="page-collectiontype__content__main__table">
              <div
                style={{
                  marginTop: "20vmin",
                }}
                onClick={() => {
                  setStage("upload");
                }}
              >
                <CollectionTypeTicket title="Standard NFT" subtitle="(ERC-721)">
                  <span style={{ fontFamily: "InterLight", fontSize: "2.2vmin" }}>
                    - Unique Tradeable Asset
                  </span>
                  <span style={{ fontFamily: "InterLight", fontSize: "2.2vmin" }}>
                    - Royalties for Creator
                  </span>
                  <span style={{ fontFamily: "InterLight", fontSize: "2.2vmin" }}>
                    - Compatible with most blockchain wallets
                  </span>
                </CollectionTypeTicket>
              </div>
              <div
                style={{
                  marginTop: "-5vmin",
                  paddingLeft: "2vmin",
                  paddingRight: "2vmin",
                }}
                onClick={() => {
                  setStage("upload");
                }}
              >
                <CollectionTypeTicket
                  title="NFT Standard"
                  subtitle=""
                  type="bottomfilled"
                  separator={false}
                ></CollectionTypeTicket>
              </div>
              <div
                style={{
                  marginTop: "20vmin",
                }}
                onClick={() => {
                  setStage("upload");
                }}
              >
                <CollectionTypeTicket title="eYeKON" subtitle="(COMING SOON)">
                  <span style={{ fontFamily: "InterLight", fontSize: "2.2vmin" }}>
                    - Social Media Integration
                  </span>
                  <span style={{ fontFamily: "InterLight", fontSize: "2.2vmin" }}>
                    - Gaming Integration
                  </span>
                  <span style={{ fontFamily: "InterLight", fontSize: "2.2vmin" }}>
                    - And more...
                  </span>
                </CollectionTypeTicket>
              </div>
            </div>
          </div>
        </div>
      )}
      {stage === "upload" && (
        <div className="page-upload__content">
          <div className="page-upload__content__main">
            <div className="page-upload__content__main__buttons">
              <div
                style={{
                  backgroundColor: "#102F82",
                  borderRadius: "1vmin",
                  width: "5vmin",
                  height: "5vmin",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "3vmin",
                  color: "white",
                  padding: "0.5vmin",
                  marginRight: "3vmin",
                  fontFamily: "InterRegular",
                  cursor: "pointer",
                }}
                onClick={() => {
                  setStage("ticket");
                }}
              >
                <img src={BackSvg} width={"4vmin"} height={"4vmin"} />
              </div>
              <Button
                border
                borderRadius
                color="white"
                fontSize={"2.4vmin"}
                fontWeight="bold"
                hoverable={false}
              >
                <div style={{ fontFamily: "InterBold", fontSize: "2.8vmin" }}>
                  Create Standard NFT (ERC 721)
                </div>
              </Button>
            </div>
            <div>
              <ETabView type="standard" />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AddToCollection;
