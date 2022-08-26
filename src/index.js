import React from "react";
import ReactDOM from "react-dom";
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
  inline.color = "green";
}

ReactDOM.render(
  <div>
    <h1 className="heading" style={inline}>
      {greet}
    </h1>

    <h1 style={{ color: "red" }}>Inline css</h1>

    <img className="img" src={url + "?grayscale"} />
  </div>,
  document.getElementById("root")
);

//render will take only one html element

