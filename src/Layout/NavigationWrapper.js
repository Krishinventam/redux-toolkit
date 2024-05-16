import React from "react";
import NavigationBar from "../component/NavigationBar/NavigationBar";

const NavigationWrapper = ({ children }) => {
  return (
    <>
      <NavigationBar />
      {children}
    </>
  );
};

export default NavigationWrapper;
