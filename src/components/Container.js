import React, { useEffect, useState } from "react";
import Header from "./Header";
import InputLocation from "./InputLocation";

const Container = () => {
  const [location, setLocation] = useState("");
  return (
    <div>
      <Header />
      <InputLocation />
      <h2>hello</h2>
    </div>
  );
};

export default Container;
