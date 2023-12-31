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
import useWindowHeight from "../hooks/useWindowHeight";
import { useHistory, useLocation } from "react-router-dom";

const ManageData = () => {
  const deviceHeight = useWindowHeight();
  const history = useHistory();
  return (
    <div
      className="molecule-page page-managedata"
      style={{
        // height: deviceHeight - 90,
      }}
    >
      <div className="page-managedata__content">
        <div className="page-managedata__content__main">
          <div className="page-managedata__content__main__buttons">
            <div
              style={{
                width: 50,
                height: 50,
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                padding: 5,
                marginRight: 30,
              }}
            >
              <div
                style={{
                  backgroundColor: "#102F82",
                  borderRadius: 10,
                  width: 40,
                  height: 40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: 30,
                  color: "white",
                  padding: 5,
                  marginRight: 30,
                  fontFamily: "Inter",
                  cursor: "pointer",
                }}
                onClick={() => history.goBack()}
              >
                <img src={BackSvg} width={40} height={40} />
              </div>
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
                gap: 20,
              }}
            >
              <Button
                border
                borderRadius
                color="white"
                fontSize={22}
                paddingVertical={20}
                fontWeight="bold"
                hoverable={false}
              >
                Manage Data
              </Button>
              <Button
                borderRadius
                fontSize={22}
                paddingVertical={20}
                color="white"
                fontWeight="bold"
                hoverable={false}
              >
                0.8 / 1 GB Used
              </Button>

              <div className="page-managedata__content__main__buttons__description">
                <div className="page-managedata__content__main__buttons__description__media">
                  <div className="page-managedata__content__main__buttons__description__media__inside">
                    <span>User Media</span>
                    <span>(~87.5%)</span>
                  </div>
                </div>
                <div className="page-managedata__content__main__buttons__description__detail">
                  <div className="page-managedata__content__main__buttons__description__detail__body">
                    <span>~0.7 GB used</span>
                    <span>~0.8 GB max</span>
                    <span>15.3 MB ~ x% &nbsp; / &nbsp; user avg</span>
                    <span>30MB ~ x% &nbsp; / &nbsp; user max</span>
                    <span>~3MB ~ x% &nbsp; / &nbsp; user max</span>
                  </div>
                  <div className="page-managedata__content__main__buttons__description__detail__title">
                    <span>≈ 87.5% ≈ 0.7GB</span>
                  </div>
                </div>
              </div>

              <div className="page-managedata__content__main__buttons__buttons">
                <Button
                  borderRadius
                  borderRadiusAmount={40}
                  paddingVertical={20}
                  fontSize={22}
                  color="white"
                  fontWeight="bold"
                  backgroundColor="#0066FF"
                  onClick={() => {
                    history.push("/event-creator/setup/media/user-uploads");
                  }}
                >
                  User Uploads
                </Button>
                <Button
                  borderRadius
                  borderRadiusAmount={40}
                  paddingVertical={20}
                  fontSize={22}
                  color="white"
                  fontWeight="bold"
                  backgroundColor="#0066FF"
                  onClick={() => {
                    history.push("/event-creator/setup/media/upload-limits");
                  }}
                >
                  Upload Limits
                </Button>
                <Button
                  borderRadius
                  borderRadiusAmount={40}
                  paddingVertical={20}
                  fontSize={22}
                  color="white"
                  fontWeight="bold"
                  backgroundColor="#0066FF"
                  onClick={() => {
                    history.push("/event-creator/setup/media/add-storage");
                  }}
                >
                  Add Storage +
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageData;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
