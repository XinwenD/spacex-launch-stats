import React, { Fragment } from "react";
// import gql from "graphql-tag";
// import { useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import classNames from "classnames";
import launches_data from "./launches_data";

// const LAUNCH_QUERY = gql`
//   query LaunchQuery($flight_number: Int!) {
//     launch(flight_number: $flight_number) {
//       flight_number
//       mission_name
//       launch_year
//       launch_success
//       launch_date_local
//       rocket {
//         rocket_id
//         rocket_name
//         rocket_type
//       }
//     }
//   }
// `;

export default function Launch() {
  let { flight_number } = useParams();
  console.log(typeof flight_number);
  flight_number = parseInt(flight_number);
  console.log(typeof flight_number);
  // const { loading, error, data } = useQuery(LAUNCH_QUERY, {
  //   variables: { flight_number },
  // });
  // if (loading) return <h1>Loading...</h1>;
  // if (error) console.log(error.message);
  // console.log(data);

  const launch = launches_data.find((l) => {
    console.log("@", typeof l.flight_number);
    return l.flight_number === flight_number;
  });

  const displayLaunch = () => {
    const {
      mission_name,
      flight_number,
      launch_year,
      launch_success,
      rocket: { rocket_id, rocket_name, rocket_type },
    } = launch;
    return (
      <div>
        <h1 className="display-4 my-3">
          <span className="text-dark">Mission:</span> {mission_name}
        </h1>
        <h4 className="mb-3">Launch Details</h4>
        <ul className="list-group">
          <li className="list-group-item">Flight Number: {flight_number}</li>
          <li className="list-group-item">Launch Year: {launch_year}</li>
          <li className="list-group-item">
            Launch Successful:{" "}
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success,
              })}
            >
              {launch_success ? "Yes" : "No"}
            </span>
          </li>
        </ul>

        <h4 className="my-3">Rocket Details</h4>
        <ul className="list-group">
          <li className="list-group-item">Rocket ID: {rocket_id}</li>
          <li className="list-group-item">Rocket Name: {rocket_name}</li>
          <li className="list-group-item">Rocket Type: {rocket_type}</li>
        </ul>
        <hr />
        <Link to="/" className="btn btn-secondary">
          Back
        </Link>
      </div>
    );
  };
  return <Fragment>{displayLaunch()}</Fragment>;
}
