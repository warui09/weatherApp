import React, { useState } from "react";
import Header from "./Header";
import InputLocation from "./InputLocation";
import Display from "./Display";

const Container = () => {
  const API_KEY = "test";
  const [location, setLocation] = useState("");

  const getLocation = (e) => {
    setLocation(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('hahaha')
    fetch(
      `https://dataservice.accuweather.com/locations/v1/cities/search?apikey=${API_KEY}&q=${location}`
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  }
    
  

  return (
    <div>
      <Header />
      <InputLocation getLocation={getLocation} handleSubmit={handleSubmit} />
      <Display location={location} />
    </div>
  );
};

export default Container;
