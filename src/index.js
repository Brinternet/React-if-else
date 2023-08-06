//Create a React app from scratch.
import React from "react";
import ReactDOM from "react-dom";

//Show a single h1 that says "Good morning" if between midnight and 12PM.
//or "Good Afternoon" if between 12PM and 6PM.
//or "Good evening" if between 6PM and midnight.

//Apply the "heading" style in the styles.css
//Dynamically change the color of the h1 using inline css styles.
//Morning = red, Afternoon = green, Night = blue.
var date = new Date();
let timeOfDay = "";
let customStyle = {
  color: ""
};

if (date.getHours() > 0 && date.getHours() < 12) {
  timeOfDay = "morning";
  customStyle.color = "red";
} else if (date.getHours() > 12 && date.getHours() < 18) {
  timeOfDay = "afternoon";
  customStyle.color = "green";
} else {
  timeOfDay = "evening";
  customStyle.color = "blue";
}

ReactDOM.render(
  <h1 className="heading" style={customStyle}>
    Good {timeOfDay}
  </h1>,
  document.getElementById("root")
);
