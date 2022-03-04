import React from "react";

function Inputs({ handleChange, Name, defaultValue }) {
  return (
    <>
      <p>{Name}</p>
      <input
        style={{ marginBottom: "1rem" }}
        className="btn btn-large btn-primary"
        onChange={handleChange}
        type="text"
        name={Name}
        value={defaultValue}
      />
    </>
  );
}

export default Inputs;
