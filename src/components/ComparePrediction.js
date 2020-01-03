import React, { useState, useEffect } from "react";
import axios from "axios";
import Empty from "antd/es/empty";
import "antd/es/empty/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import "../styles/ComparePrediction.css";

const ComparePrediction = props => {
  const [projection, setProjection] = useState({ away: 0, home: 0, awayName: '', homeName: '' });

  useEffect(() => {
    if (props.selectedAway && props.selectedHome) {
      axios
        .get(
          `https://model-ncaab.herokuapp.com/projections/?home=${props.selectedHome}&away=${props.selectedAway}`
        )
        .then(response => {
          setProjection({
            away: response.data.away_projection,
            home: response.data.home_projection, 
            awayName: response.data.away_name,
            homeName: response.data.home_name,
          });
        });
    }
    
  }, [props.selectedAway, props.selectedHome]);



  return (
    <>
      {!props.selectedHome && (
        <Empty className="mobile-empty" style={{ margin: 50 }} />
      )}
      {props.selectedAway && props.selectedHome && (
        <Card className="cp-card">
          <h1 className="cp-card-title">Projected Scores</h1>
          <h2>
            {projection.awayName}: {(projection.away).toFixed(2)}
          </h2>
          <h2>
            {projection.homeName}: {(projection.home).toFixed(2)}
          </h2>
        </Card>
      )}
    </>
  );
};

export default ComparePrediction;
