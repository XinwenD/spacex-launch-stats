import React from "react";
import classNames from "classnames";
import Moment from "react-moment";
import { Link } from "react-router-dom";

export default function LaunchItem({
  launch: { flight_number, mission_name, launch_date_local, launch_success },
}) {
  //   console.log(props);
  //   console.log(props.launch);
  // console.log(flight_number);
  // console.log(typeof flight_number);
  return (
    <div className="card card-body mb-3" style={{}}>
      <div className="row">
        <div className="col-lg-9">
          <h4>
            Mission:{" "}
            <span
              className={classNames({
                "text-success": launch_success,
                "text-danger": !launch_success,
              })}
            >
              {" "}
              {mission_name}
            </span>
          </h4>
          <p>
            Date: <Moment format="YYYY-MM-DD HH:mm">{launch_date_local}</Moment>
          </p>
        </div>
        <div className="col-lg-3">
          <Link to={`/launch/${flight_number}`} className="btn btn-secondary">
            LaunchDetails
          </Link>
        </div>
      </div>
    </div>
  );
}
