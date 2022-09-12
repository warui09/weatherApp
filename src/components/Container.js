import React, { useEffect, useState } from "react";
import Header from "./Header";
import InputLocation from "./InputLocation";
import Display from "./Display";

const Container = () => {
  const [location, setLocation] = useState("");

  const getLocation = (e) => {
    setLocation(e.target.value);
  };

  return (
    <div>
      <Header />
      <InputLocation getLocation={getLocation} />
      <Display />
    </div>
  );
};

export default Container;
