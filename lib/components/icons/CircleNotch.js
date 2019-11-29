"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SvgCircleNotch = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var SvgCircleNotch = function SvgCircleNotch(props) {
  return React.createElement("svg", _extends({
    viewBox: "0 0 512 512"
  }, props), React.createElement("path", {
    d: "M288 39.056v16.659c0 10.804 7.281 20.159 17.686 23.066C383.204 100.434 440 171.518 440 256c0 101.689-82.295 184-184 184-101.689 0-184-82.295-184-184 0-84.47 56.786-155.564 134.312-177.219C216.719 75.874 224 66.517 224 55.712V39.064c0-15.709-14.834-27.153-30.046-23.234C86.603 43.482 7.394 141.206 8.003 257.332c.72 137.052 111.477 246.956 248.531 246.667C393.255 503.711 504 392.788 504 256c0-115.633-79.14-212.779-186.211-240.236C302.678 11.889 288 23.456 288 39.056z"
  }));
};

exports.SvgCircleNotch = SvgCircleNotch;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2ljb25zL0NpcmNsZU5vdGNoLnRzeCJdLCJuYW1lcyI6WyJTdmdDaXJjbGVOb3RjaCIsInByb3BzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7Ozs7QUFFTyxJQUFNQSxjQUFjLEdBQUcsU0FBakJBLGNBQWlCLENBQUNDLEtBQUQ7QUFBQSxTQUM1QjtBQUFLLElBQUEsT0FBTyxFQUFDO0FBQWIsS0FBK0JBLEtBQS9CLEdBQ0U7QUFBTSxJQUFBLENBQUMsRUFBQztBQUFSLElBREYsQ0FENEI7QUFBQSxDQUF2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5leHBvcnQgY29uc3QgU3ZnQ2lyY2xlTm90Y2ggPSAocHJvcHM6IFJlYWN0LlNWR1Byb3BzPFNWR1NWR0VsZW1lbnQ+KSA9PiAoXG4gIDxzdmcgdmlld0JveD1cIjAgMCA1MTIgNTEyXCIgey4uLnByb3BzfT5cbiAgICA8cGF0aCBkPVwiTTI4OCAzOS4wNTZ2MTYuNjU5YzAgMTAuODA0IDcuMjgxIDIwLjE1OSAxNy42ODYgMjMuMDY2QzM4My4yMDQgMTAwLjQzNCA0NDAgMTcxLjUxOCA0NDAgMjU2YzAgMTAxLjY4OS04Mi4yOTUgMTg0LTE4NCAxODQtMTAxLjY4OSAwLTE4NC04Mi4yOTUtMTg0LTE4NCAwLTg0LjQ3IDU2Ljc4Ni0xNTUuNTY0IDEzNC4zMTItMTc3LjIxOUMyMTYuNzE5IDc1Ljg3NCAyMjQgNjYuNTE3IDIyNCA1NS43MTJWMzkuMDY0YzAtMTUuNzA5LTE0LjgzNC0yNy4xNTMtMzAuMDQ2LTIzLjIzNEM4Ni42MDMgNDMuNDgyIDcuMzk0IDE0MS4yMDYgOC4wMDMgMjU3LjMzMmMuNzIgMTM3LjA1MiAxMTEuNDc3IDI0Ni45NTYgMjQ4LjUzMSAyNDYuNjY3QzM5My4yNTUgNTAzLjcxMSA1MDQgMzkyLjc4OCA1MDQgMjU2YzAtMTE1LjYzMy03OS4xNC0yMTIuNzc5LTE4Ni4yMTEtMjQwLjIzNkMzMDIuNjc4IDExLjg4OSAyODggMjMuNDU2IDI4OCAzOS4wNTZ6XCIgLz5cbiAgPC9zdmc+XG4pO1xuIl19