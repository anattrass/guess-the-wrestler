var React = require("react");
var ReactDOM = require("react-dom");


var MainBox = require("./container/MainBox");

window.onload = function () {
  ReactDOM.render(
    <MainBox/>,
    document.getElementById("app")
  );
}
