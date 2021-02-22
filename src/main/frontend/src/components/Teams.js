import React from "react";
import TeamsSelect from "./TeamsSelect";
import Result from "./Result";
import {TeamsProvider} from "../contexts/TeamsContext";

const TeamsComponent = () => {
  return <div class="flexWrap">
    <TeamsProvider>
      <div class="left"><TeamsSelect></TeamsSelect></div>
      <Result class="right"></Result>
    </TeamsProvider>
  </div>;
};

export default TeamsComponent;
