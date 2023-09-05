import React from "react";

// animations
import Button from "../components/button";

import { useHistory } from "react-router-dom";

const Organize = () => {
  const history = useHistory();
  return (
    <div className="molecule-page page-organize">
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
            <div style={{ fontFamily: "InterBold", fontSize: "28px" }}>
              Create & Manage
            </div>
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
            <div style={{ fontFamily: "InterBold", fontSize: "28px" }}>
              Organize NFTs
            </div>
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
            <div style={{ fontFamily: "InterBold", fontSize: "28px" }}>
              Ticket Allocation
            </div>
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
            <div style={{ fontFamily: "InterBold", fontSize: "28px" }}>
              OpenSea Display Page
            </div>
          </Button>
          <div className="page-organize__content__main__footer"></div>
        </div>
      </div>
    </div>
  );
};

export default Organize;
function useEffect(arg0: () => void, arg1: never[]) {
  throw new Error("Function not implemented.");
}
