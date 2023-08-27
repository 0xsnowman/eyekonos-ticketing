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
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const Organize = () => {
  const deviceHeight = useWindowHeight();
  const history = useHistory();
  return (
    <div
      className="molecule-page page-organize"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-organize__content">
        <div className="page-organize__content__main">
          <span>23 Minted</span>
          <span>7/23 Claimed</span>
          <div style={{ padding: 5 }}></div>
          <Button
            borderRadius
            paddingVertical={20}
            color="white"
            fontWeight="bold"
            onClick={() => {
              history.push("/event-creator/nft/manage");
            }}
          >
            Create & Manage
          </Button>
          <Button
            borderRadius
            paddingVertical={20}
            color="white"
            fontWeight="bold"
            onClick={() => {
              history.push("/event-creator/nft/organize");
            }}
          >
            Organize NFTs
          </Button>
          <Button
            borderRadius
            paddingVertical={20}
            color="white"
            fontWeight="bold"
            onClick={() => {
              history.push("/event-creator/nft/allocate");
            }}
          >
            Ticket Allocation
          </Button>
          <Button
            borderRadius
            paddingVertical={20}
            color="white"
            fontWeight="bold"
            onClick={() => {
              history.push("/event-creator/nft/opensea");
            }}
          >
            OpenSea Display Page
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Organize;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
