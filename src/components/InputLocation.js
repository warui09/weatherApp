import React from "react";

const InputLocation = (props) => {
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
        <input onChange={props.getLocation} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default InputLocation;
