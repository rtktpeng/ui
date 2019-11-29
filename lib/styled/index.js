"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ServerStyleSheet = exports.ThemeContext = exports.ThemeConsumer = exports.ThemeProvider = exports.keyframes = exports.createGlobalStyle = exports.css = exports.styled = void 0;

var styledComponents = _interopRequireWildcard(require("styled-components"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

var _ref = styledComponents,
    styled = _ref["default"],
    css = _ref.css,
    createGlobalStyle = _ref.createGlobalStyle,
    keyframes = _ref.keyframes,
    ThemeProvider = _ref.ThemeProvider,
    ThemeConsumer = _ref.ThemeConsumer,
    ThemeContext = _ref.ThemeContext,
    ServerStyleSheet = _ref.ServerStyleSheet;
exports.ServerStyleSheet = ServerStyleSheet;
exports.ThemeContext = ThemeContext;
exports.ThemeConsumer = ThemeConsumer;
exports.ThemeProvider = ThemeProvider;
exports.keyframes = keyframes;
exports.createGlobalStyle = createGlobalStyle;
exports.css = css;
exports.styled = styled;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9zdHlsZWQvaW5kZXgudHMiXSwibmFtZXMiOlsic3R5bGVkQ29tcG9uZW50cyIsInN0eWxlZCIsImNzcyIsImNyZWF0ZUdsb2JhbFN0eWxlIiwia2V5ZnJhbWVzIiwiVGhlbWVQcm92aWRlciIsIlRoZW1lQ29uc3VtZXIiLCJUaGVtZUNvbnRleHQiLCJTZXJ2ZXJTdHlsZVNoZWV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQTs7Ozs7O1dBZUlBLGdCO0lBUk9DLE07SUFDVEMsRyxRQUFBQSxHO0lBQ0FDLGlCLFFBQUFBLGlCO0lBQ0FDLFMsUUFBQUEsUztJQUNBQyxhLFFBQUFBLGE7SUFDQUMsYSxRQUFBQSxhO0lBQ0FDLFksUUFBQUEsWTtJQUNBQyxnQixRQUFBQSxnQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHN0eWxlZENvbXBvbmVudHMgZnJvbSAnc3R5bGVkLWNvbXBvbmVudHMnO1xuXG5pbXBvcnQge1xuICBHbG9iYWxUaGVtZVxufSBmcm9tIFwiLi4vdGhlbWUvdHlwZXNcIjtcblxuY29uc3Qge1xuICBkZWZhdWx0OiBzdHlsZWQsXG4gIGNzcyxcbiAgY3JlYXRlR2xvYmFsU3R5bGUsXG4gIGtleWZyYW1lcyxcbiAgVGhlbWVQcm92aWRlcixcbiAgVGhlbWVDb25zdW1lcixcbiAgVGhlbWVDb250ZXh0LFxuICBTZXJ2ZXJTdHlsZVNoZWV0XG59ID0gc3R5bGVkQ29tcG9uZW50cyBhcyBzdHlsZWRDb21wb25lbnRzLlRoZW1lZFN0eWxlZENvbXBvbmVudHNNb2R1bGU8R2xvYmFsVGhlbWU+O1xuXG5leHBvcnQgeyBzdHlsZWQsIGNzcywgY3JlYXRlR2xvYmFsU3R5bGUsIGtleWZyYW1lcywgVGhlbWVQcm92aWRlciwgVGhlbWVDb25zdW1lciwgVGhlbWVDb250ZXh0LCBTZXJ2ZXJTdHlsZVNoZWV0IH07XG4iXX0=