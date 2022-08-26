import React from "react";
import ReactDOM from "react-dom";
import Heading from "./Heading";
import Lists from "./Items";

const url = "https://picsum.photos/200/200";
const inline = {
  color: "red",
  fontSize: "2rem"
};
const date = new Date();

const currtime = date.getHours();
let greet = " ";
if (currtime < 12) {
  greet = "Good Morning";
  inline.color = "red";
} else if (currtime < 18) {
  greet = "Good afternoon";
  inline.color = "blue";
} else {
  greet = "Good night";
  inline.color = "yellow";
}

// using functions

ReactDOM.render(
  <div>
    <Heading />

    <h1 className="heading" style={inline}>
      {greet}
    </h1>

    <h1 style={{ color: "red" }}>Inline css</h1>

    {/* <img className="img" src={url + "?grayscale"} /> */}
    <Lists />
  </div>,
  document.getElementById("root")
);

//render will take only one html element
