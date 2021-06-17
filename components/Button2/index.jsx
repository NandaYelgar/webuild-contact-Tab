import React, { useEffect } from "react";
import { loadTimelineData } from "anima-timeline";
import "./Button2.css";

function Button2(props) {
  const { children } = props;

  useEffect(() => {
    loadTimelineData(x275569TimelineData);
  }, []);

  return (
    <div className="x275569 component component-wrapper not-ready">
      <div className="master-button-9z4xaH">
        <div className="button-i275569511-mRqk0H valign-text-middle">{children}</div>
      </div>
    </div>
  );
}

const x275569TimelineData = [
  {
    initial_state_name: "Property-1=Primary",
    root_element: ".x275569",
    states_flow: {
      "Property-1=Primary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Secondary": {
        listeners: [],
        overrides: {},
      },
      "Property-1=Tertiary": {
        listeners: [],
        overrides: {},
      },
    },
  },
];

export default Button2;
