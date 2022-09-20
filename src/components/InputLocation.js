import React from "react";

const InputLocation = (props) => {
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <input onChange={props.getLocation} />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default InputLocation;
