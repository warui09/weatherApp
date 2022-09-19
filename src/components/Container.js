import React, { useEffect, useState } from "react";
import Header from "./Header";
import InputLocation from "./InputLocation";
import Display from "./Display";

const Container = () => {
  const API_KEY = "test";
  const [location, setLocation] = useState("");

  const getLocation = (e) => {
    setLocation(e.target.value);
  };

  useEffect(() => {
    console.log("hi");
    fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${location}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  });
  console.log(test);
  return (
    <div>
      <Header />
      <InputLocation getLocation={getLocation} />
      <Display location={location} />
    </div>
  );
};

export default Container;
