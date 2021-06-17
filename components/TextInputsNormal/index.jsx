import React from "react";
import "./TextInputsNormal.css";

function TextInputsNormal(props) {
  const { children } = props;

  return (
    <div className="text-inputs-normal">
      <div className="frame-1 border-1px-light-grey">
        <div className="city-i2755616716 inter-normal-sonic-silver-14px">{children}</div>
      </div>
    </div>
  );
}

export default TextInputsNormal;
