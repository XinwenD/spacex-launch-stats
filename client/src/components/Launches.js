import React, { Fragment } from "react";
// import gql from "graphql-tag";
// import { useQuery } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";
import launches_data from "./launches_data";

// const LAUNCHES_QUERY = gql`
//   query LaunchesQuery {
//     launches {
//       flight_number
//       mission_name
//       launch_date_local
//       launch_success
//     }
//   }
// `;

export default function Launches() {
  // const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  // if (loading) return <h1>Loading...</h1>;
  // if (error) console.log(error.message);

  // const displayLaunches = () => {
  //   return data.launches.map((launch, index) => (
  //     <LaunchItem key={index} launch={launch} />
  //   )); // There are duplicate keys in original datasets. flight_number for the most recent two launches are the same
  // };

  const displayLaunches = () => {
    return launches_data.map((launch, index) => (
      <LaunchItem key={launch.flight_number} launch={launch} />
    )); // There are duplicate keys in original datasets. flight_number for the most recent two launches are the same
  };

  return (
    <Fragment>
      <h1 className="display-4 my-3" style={{ textAlign: "center" }}>
        Launches
      </h1>
      <MissionKey />
      <div
        style={{
          flexDirection: "column",
          width: "75%",
          justifyContent: "center",
          margin: "0 auto",
        }}
      >
        {displayLaunches()}
      </div>
    </Fragment>
  );
}
