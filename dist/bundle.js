(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _HelloJsx = require('./Hello.jsx');

var _HelloJsx2 = _interopRequireDefault(_HelloJsx);

React.render(React.createElement(_HelloJsx2['default'], null), document.getElementById('app'));

},{"./Hello.jsx":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = React.createClass({
  displayName: "Hello",

  getInitialState: function getInitialState() {
    return { name: "world" };
  },
  handleChange: function handleChange(event) {
    this.setState({ name: event.target.value });
  },
  render: function render() {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "h1",
        null,
        "Hello, ",
        this.state.name,
        "!"
      ),
      React.createElement("input", { type: "text", value: this.state.name, onChange: this.handleChange })
    );
  }
});
module.exports = exports["default"];

},{}]},{},[1])
//# sourceMappingURL=bundle.js.map
