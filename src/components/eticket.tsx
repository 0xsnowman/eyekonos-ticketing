import React from 'react';
import { useHistory, useLocation } from "react-router-dom";

const ETicketView = () => {
  const history = useHistory();

  return (
    <div className="eticket-view" onClick={() => {
      history.push("/event-creator/setup");
    }}>
        <div className="eticket-view__event-name">
            Event Name
        </div>
        <div className="eticket-view__event-location">
            @Location
        </div>
        <div className="eticket-view__event-date">
            Date
        </div>
    </div>
  );
};

export default ETicketView;