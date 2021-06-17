import React from "react";
import Frame144 from "../Frame144";
import TextInputsNormal from "../TextInputsNormal";
import Frame1650 from "../Frame1650";
import TextInputsNormal2 from "../TextInputsNormal2";
import Button2 from "../Button2";
import Footer5 from "../Footer5";
import "./X10ContactUsPageTablet.css";

function X10ContactUsPageTablet(props) {
  const {
    contactUs,
    rectangle76,
    rectangle99,
    sendAMessage,
    text112,
    frame144Props,
    textInputsNormalProps,
    frame1650Props,
    textInputsNormal2Props,
    button2Props,
    footer5Props,
  } = props;

  return (
    <div class="container-center-horizontal">
      <div className="x10-contact-us-page-tablet screen">
        <Frame144 group86Props={frame144Props.group86Props} iconMenuProps={frame144Props.iconMenuProps} />
        <h1 className="title valign-text-middle typographyheadlineh4-extrabold-24">{contactUs}</h1>
        <img className="rectangle-76" src={rectangle76} />
        <img className="rectangle-99" src={rectangle99} />
        <div className="send-a-message valign-text-middle typographyheadlineh4-extrabold-24">{sendAMessage}</div>
        <p className="text-1 typography-body-smalltext-14-regular">{text112}</p>
        <div className="frame-205">
          <div className="frame-1652">
            <TextInputsNormal>{textInputsNormalProps.children}</TextInputsNormal>
            <Frame1650
              textInputsNormal2Props={frame1650Props.textInputsNormal2Props}
              textInputsNormal22Props={frame1650Props.textInputsNormal22Props}
            />
            <TextInputsNormal2 className={textInputsNormal2Props.className}>
              {textInputsNormal2Props.children}
            </TextInputsNormal2>
          </div>
          <Button2>{button2Props.children}</Button2>
        </div>
        <Footer5 {...footer5Props} />
      </div>
    </div>
  );
}

export default X10ContactUsPageTablet;
