import React from "react";

export default function MissionKey() {
  return (
    <div
      className="my-3"
      style={{
        // display: "inline-block",
        // flexDirection: "row",
        // justifyContent: "center",
        // margin: "0 auto",
        textAlign: "center",
      }}
    >
      <span className="px-3 mr-2 bg-success" />
      &nbsp; = Success &nbsp;
      <span className="px-3 mr-2 bg-danger" />
      &nbsp; = Fail
    </div>
  );
}
