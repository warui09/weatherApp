import React, { useState } from "react";
import Header from "./Header";
import InputLocation from "./InputLocation";
import Display from "./Display";

const Container = () => {
  const API_KEY = "";
  const [location, setLocation] = useState("");

  const getLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${location}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data[0].Key));
  };

  return (
    <div>
      <Header />
      <InputLocation getLocation={getLocation} handleSubmit={handleSubmit} />
      <Display location={location} />
    </div>
  );
};

export default Container;
