import React, { useEffect, useState } from "react";
import Header from "./Header";
import InputLocation from "./InputLocation";
import Display from "./Display";
require('dotenv').config()

const Container = () => {
  const [location, setLocation] = useState("");

  const getLocation = (e) => {
    setLocation(e.target.value);
  };
  
  useEffect(() => {
    console.log('hi')

  })

  return (
    <div>
      <Header />
      <InputLocation getLocation={getLocation} />
      <Display location={location} />
    </div>
  );
};

export default Container;
