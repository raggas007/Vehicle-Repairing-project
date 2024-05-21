import React from "react";
import RequestList from "../components/RequestList";
import VehicleDetailRequestCard from "../components/VehicleDetailRequestcard";

const ViewRequest = () => {
  return (
    <div>
      <RequestList />
      <VehicleDetailRequestCard />
    </div>
  );
};

export default ViewRequest;
