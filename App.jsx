import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import X10ContactUsPageTablet from "./components/X10ContactUsPageTablet";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/:path(|10-contact-us-page-tablet)">
          <X10ContactUsPageTablet {...x10ContactUsPageTabletData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const whiteData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-98@2x.svg",
};

const group86Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-1@2x.svg",
    whiteProps: whiteData,
};

const iconMenuData = {
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-159@2x.svg",
};

const frame144Data = {
    group86Props: group86Data,
    iconMenuProps: iconMenuData,
};

const textInputsNormalData = {
    children: "Comment",
};

const textInputsNormal2Data = {
    children: "Name (Required)",
};

const textInputsNormal22Data = {
    children: "Email (Required)",
    className: "text-inputs-normal-2",
};

const frame1650Data = {
    textInputsNormal2Props: textInputsNormal2Data,
    textInputsNormal22Props: textInputsNormal22Data,
};

const textInputsNormal23Data = {
    children: "Phone Number  (Required)",
    className: "text-inputs-normal-3",
};

const button2Data = {
    children: "SEND MESSAGE",
};

const facebookAppSymbolData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/f-1-1@2x.svg",
};

const twitterData = {
    src: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-157@2x.svg",
};

const group872Data = {
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-154@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-19@2x.svg",
    facebookAppSymbolProps: facebookAppSymbolData,
    twitterProps: twitterData,
};

const footer5Data = {
    group85: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/group-85-5@2x.svg",
    place: "Contact",
    overlapGroup: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-20@2x.svg",
    vector2: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-21@2x.svg",
    phone: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-14@2x.svg",
    overlapGroup1: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-15@2x.svg",
    vector3: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/vector-16@2x.svg",
    text15: "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.",
    text14: "+91 8976535221, +91 8755645342",
    contactWebuildCom: "contact@webuild.com",
    quickLinks: "Quick Links",
    aboutUs: "About Us",
    projects: "Projects",
    gallery: "Gallery",
    knowledgeTransfer: "Knowledge Transfer",
    blogs: "Blogs",
    faqs: "FAQ’s",
    group872Props: group872Data,
};

const x10ContactUsPageTabletData = {
    contactUs: "Contact Us",
    rectangle76: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-76-4@1x.png",
    rectangle99: "https://anima-uploads.s3.amazonaws.com/projects/60c1b397ba70f9d1bdda22ff/img/rectangle-99-2@1x.png",
    sendAMessage: "Send a message",
    text112: "There are many variations of passages of Lorem Ipsum available but the majority have suffered dummy alteration in that an some form by the injected humour or randomised words which don’t look even that slightly believable. If you are Lorem Ipsums your need to be sure there isn’t anything embarrassing.",
    frame144Props: frame144Data,
    textInputsNormalProps: textInputsNormalData,
    frame1650Props: frame1650Data,
    textInputsNormal2Props: textInputsNormal23Data,
    button2Props: button2Data,
    footer5Props: footer5Data,
};

