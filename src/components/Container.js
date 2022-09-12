import React, { useEffect, useState } from "react";
import Header from "./Header";
import InputLocation from "./InputLocation";
import Display from "./Display";

const Container = () => {
  const [location, setLocation] = useState("");
  return (
    <div>
      <Header />
      <InputLocation />
      <Display />
    </div>
  );
};

export default Container;
