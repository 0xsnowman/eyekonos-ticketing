import React from "react";
import PencilSvg from "../assets/svgs/pencil.svg";
import { styled } from "@mui/material/styles";
import IOSSwitch from "./iosswitch";
import ESelectView from "./eselect";

const RadioTable = () => {
  return (
    <div className="component-radiotable">
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          Settings Applied to...
        </div>
        <div className="component-radiotable__row__options">
          <span>All Tickets</span>
          <img src={PencilSvg} style={{ width: 20, paddingLeft: 20 }} />
        </div>
      </div>

      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title">
            Manage Ticket Supply/Classes
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title">
            Manage Event Flyer 
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title">
            Manage Ticket Design
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title">
            Manage Ticket NFT’s
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title">
            Manage Ticket NFT’s
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          <div className="component-radiotable__row__content__title">
            Manage Ticket Admissions?
          </div>
        </div>
        <div className="component-radiotable__row__options">
          <span>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span>Yes</span>
        </div>
      </div>
      <div className="component-radiotable__row">
        <div className="component-radiotable__row__content">
          {`*Add Collaborators*`}
          <span>
            {`(not more permissions than this user)`}
          </span>
        </div>
        <div className="component-radiotable__row__options">
          <span>No</span>
          <IOSSwitch checkedTrackColor={"#F0BB51"} />
          <span>Yes</span>
        </div>
      </div>
    </div>
  );
};

export default RadioTable;
