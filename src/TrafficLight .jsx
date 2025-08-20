import { useState } from "react";
import "./TrafficLight.css";

const TrafficLight = () => {
  const [color, setColor] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const [index, setIndex] = useState(0);
  const lights = ["red", "green", "yellow"];
  let currentColor = lights[index];

  const handleClick = (newColor) => {
    setIndex("");
    setColor(newColor);
  };

  const togglePurpleLight = () => {
    setIsVisible(isVisible ? false : true);
  };

  const handleAlternateColor = () => {
    setColor("");
    setIndex((prev) => (prev + 1) % lights.length);
  };
  return (
    <>
      <div className="traffic-wrapper">
        <div className="traffic-top"></div>
        <div
          className={isVisible ? "container-traffic-4" : "container-traffic-3"}
        >
          <div
            className={`${color === "red" ? "on red-light" : "red-light"}  ${
              currentColor === "red" ? "on red-light" : "red-light"
            }`}
            onClick={() => handleClick("red")}
          ></div>
          <div
            className={`${
              color === "yellow" ? "on yellow-light" : "yellow-light"
            } ${
              currentColor === "yellow" ? "on yellow-light" : "yellow-light"
            }`}
            onClick={() => handleClick("yellow")}
          ></div>
          <div
            className={`${
              color === "green" ? "on green-light" : "green-light"
            } ${currentColor === "green" ? "on green-light" : "green-light"}`}
            onClick={() => handleClick("green")}
          ></div>
          <div
            className={`
              ${color === "purple" ? "on purple-light" : "purple-light"} ${
              isVisible ? "purple-light" : "hide"
            }
            `}
            onClick={() => handleClick("purple")}
          ></div>
        </div>
      </div>
      <div className="button-wrapper">
        <button
          type="button"
          className="button-extra"
          onClick={handleAlternateColor}
        >
          Alternate Colors
        </button>
        <button
          type="button"
          className="button-extra"
          onClick={togglePurpleLight}
        >
          {isVisible ? "Hide Purple Light" : "Show Purple Light"}
        </button>
      </div>
    </>
  );
};

export default TrafficLight;
