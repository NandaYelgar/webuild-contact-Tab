import React from "react";
import "./TextInputsNormal2.css";

function TextInputsNormal2(props) {
  const { children, className } = props;

  return (
    <div className={`text-inputs-normal-1 ${className || ""}`}>
      <div className="frame-1-1 border-1px-light-grey">
        <div className="city-i2755646716 inter-normal-sonic-silver-14px">{children}</div>
      </div>
    </div>
  );
}

export default TextInputsNormal2;
