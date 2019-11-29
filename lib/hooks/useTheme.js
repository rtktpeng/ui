"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useTheme = void 0;

var React = _interopRequireWildcard(require("react"));

var _theme = require("../theme");

var _styled = require("../styled");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

// theme hook to get the current theme;
var useTheme = function useTheme() {
  return React.useContext(_styled.ThemeContext) || _theme.theme;
};

exports.useTheme = useTheme;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VUaGVtZS50cyJdLCJuYW1lcyI6WyJ1c2VUaGVtZSIsIlJlYWN0IiwidXNlQ29udGV4dCIsIlRoZW1lQ29udGV4dCIsInRoZW1lIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7QUFFQTs7QUFJQTs7Ozs7O0FBSUE7QUFDTyxJQUFNQSxRQUFRLEdBQUcsU0FBWEEsUUFBVyxHQUFNO0FBQzVCLFNBQU9DLEtBQUssQ0FBQ0MsVUFBTixDQUFpQkMsb0JBQWpCLEtBQWtDQyxZQUF6QztBQUNELENBRk0iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIHRoZW1lXG59IGZyb20gXCIuLi90aGVtZVwiO1xuXG5pbXBvcnQge1xuICBUaGVtZUNvbnRleHRcbn0gZnJvbSBcIi4uL3N0eWxlZFwiO1xuXG4vLyB0aGVtZSBob29rIHRvIGdldCB0aGUgY3VycmVudCB0aGVtZTtcbmV4cG9ydCBjb25zdCB1c2VUaGVtZSA9ICgpID0+IHtcbiAgcmV0dXJuIFJlYWN0LnVzZUNvbnRleHQoVGhlbWVDb250ZXh0KSB8fCB0aGVtZVxufTtcbiJdfQ==