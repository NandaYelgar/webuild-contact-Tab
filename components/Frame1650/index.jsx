import React from "react";
import TextInputsNormal2 from "../TextInputsNormal2";
import "./Frame1650.css";

function Frame1650(props) {
  const { textInputsNormal2Props, textInputsNormal22Props } = props;

  return (
    <div className="frame-1651">
      <TextInputsNormal2>{textInputsNormal2Props.children}</TextInputsNormal2>
      <TextInputsNormal2 className={textInputsNormal22Props.className}>
        {textInputsNormal22Props.children}
      </TextInputsNormal2>
    </div>
  );
}

export default Frame1650;
