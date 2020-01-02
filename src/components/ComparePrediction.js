import React from "react";
import "antd/es/layout/style/css";
import "antd/es/breadcrumb/style/css";

const ComparePrediction = props => {
  return (
    <div>
      <h1>{props.selectedTeams.team1}</h1>
      <h1>{props.selectedTeams.team2}</h1>
    </div>
  );
};

export default ComparePrediction;
