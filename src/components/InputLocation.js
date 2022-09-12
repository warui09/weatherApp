import React from "react";

const InputLocation = () => {
  const handleChange = () => {
    console.log("hi");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("hey");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default InputLocation;
