import React, { useState } from "react";
import Inputs from "./inputs";
import load from "./test.json";
import axios from "axios";
const url1 =
  "http://ec2-34-244-141-9.eu-west-1.compute.amazonaws.com:5000/api_v0.1";
const url2 = "http://127.0.0.1:5000/api_v0.1";

function LoadShortFall() {
  const [input, setInput] = useState(load);
  const [fetching, setFetching] = useState(false);
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    console.log("name:::", e.target.name, "Value:::", e.target.value);
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleClick = () => {
    setFetching(true);
    axios
      .post(url1, JSON.stringify({ "Unnamed: 0": 8764, ...input }))
      .then((res) => {
        console.log(res);
        setPrediction(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
        alert(`There was an error with the request Please try again later`);
      })
      .finally(() => setFetching(false));
  };

  if (fetching) return <h3>Getting Prediction please wait...</h3>;
  return (
    <div style={{ overflow: "auto", height: "70vh" }}>
      {prediction && isNaN(Number(prediction)) ? (
        <h3>{prediction}</h3>
      ) : prediction && !isNaN(Number(prediction)) ? (
        <div className="d-flex" style={{ flexDirection: "column" }}>
          <h3>
            We predict that the laod shortfall for the stated condition is:{" "}
            {Number(prediction)}
          </h3>
          <button
            onClick={() => {
              setPrediction(null);
            }}
            className="btn btn-outline-primary"
          >
            {" "}
            Clear{" "}
          </button>
        </div>
      ) : (
        <>
          {Object.keys(input).map((key) => (
            <Inputs
              handleChange={handleChange}
              Name={key}
              defaultValue={input[key]}
            />
          ))}
          <div>
            <button
              className="btn btn-outline-secondary"
              style={{ width: "100%" }}
              type="button"
              onClick={handleClick}
            >
              Submit
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default LoadShortFall;
