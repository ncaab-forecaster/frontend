import React, { useState, useEffect } from "react";
import axios from "axios";
import Empty from "antd/es/empty";
import "antd/es/empty/style/css";
import Card from "antd/es/card";
import "antd/es/card/style/css";
import "../styles/ComparePrediction.css";

const ComparePrediction = props => {
  const [projection, setProjection] = useState({ away: 0, home: 0 });

  const awayObject =
    props.teamsAndIds &&
    props.teamsAndIds.filter(team => team.name === props.selectedAway.name);
  const homeObject =
    props.teamsAndIds &&
    props.teamsAndIds.filter(team => team.name === props.selectedHome.name);

  useEffect(() => {
    props.teamsAndIds &&
      axios
        .get(
          `https://model-ncaab.herokuapp.com/projections/?home=${homeObject.id}&away=${awayObject.id}`
        )
        .then(response => {
          setProjection({
            away: response.data.away_projection,
            home: response.data.home_projection
          });
        });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.teamsAndIds]);

  console.log(awayObject);
  console.log(homeObject);

  return (
    <>
      {!props.selectedHome.name && <Empty style={{ margin: 100 }} />}
      {props.selectedAway.name && props.selectedHome.name && (
        <Card className="cp-card">
          <h1 className="cp-card-title">Projected Scores</h1>
          <h2>
            {props.selectedAway.name}: {projection.away}
          </h2>
          <h2>
            {props.selectedHome.name}: {projection.home}
          </h2>
        </Card>
      )}
    </>
  );
};

export default ComparePrediction;
