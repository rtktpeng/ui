"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.useAfterMountEffect = void 0;

var React = _interopRequireWildcard(require("react"));

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

/**
 * Will ensure that affect is not called until at least the second render
 * of the component
 */
var useAfterMountEffect = function useAfterMountEffect(cb, deps) {
  var didMount = React.useRef(false);
  React.useEffect(function () {
    if (didMount.current) {
      cb();
    } else {
      didMount.current = true;
    }
  }, [cb].concat(_toConsumableArray(deps))); // eslint-disable-line
};

exports.useAfterMountEffect = useAfterMountEffect;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9ob29rcy91c2VBZnRlck1vdW50RWZmZWN0LnRzIl0sIm5hbWVzIjpbInVzZUFmdGVyTW91bnRFZmZlY3QiLCJjYiIsImRlcHMiLCJkaWRNb3VudCIsIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiY3VycmVudCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUE7Ozs7Ozs7Ozs7Ozs7O0FBRUE7Ozs7QUFJTyxJQUFNQSxtQkFBbUIsR0FBRyxTQUF0QkEsbUJBQXNCLENBQUNDLEVBQUQsRUFBaUJDLElBQWpCLEVBQWlDO0FBQ2xFLE1BQU1DLFFBQVEsR0FBR0MsS0FBSyxDQUFDQyxNQUFOLENBQWEsS0FBYixDQUFqQjtBQUVBRCxFQUFBQSxLQUFLLENBQUNFLFNBQU4sQ0FBZ0IsWUFBTTtBQUNwQixRQUFJSCxRQUFRLENBQUNJLE9BQWIsRUFBc0I7QUFDcEJOLE1BQUFBLEVBQUU7QUFDSCxLQUZELE1BRU87QUFDTEUsTUFBQUEsUUFBUSxDQUFDSSxPQUFULEdBQW1CLElBQW5CO0FBQ0Q7QUFDRixHQU5ELEdBTUlOLEVBTkosNEJBTVdDLElBTlgsSUFIa0UsQ0FTL0M7QUFDcEIsQ0FWTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIFJlYWN0IGZyb20gJ3JlYWN0JztcblxuLyoqXG4gKiBXaWxsIGVuc3VyZSB0aGF0IGFmZmVjdCBpcyBub3QgY2FsbGVkIHVudGlsIGF0IGxlYXN0IHRoZSBzZWNvbmQgcmVuZGVyXG4gKiBvZiB0aGUgY29tcG9uZW50XG4gKi9cbmV4cG9ydCBjb25zdCB1c2VBZnRlck1vdW50RWZmZWN0ID0gKGNiOiAoKSA9PiB2b2lkLCBkZXBzOiBhbnlbXSkgPT4ge1xuICBjb25zdCBkaWRNb3VudCA9IFJlYWN0LnVzZVJlZihmYWxzZSk7XG5cbiAgUmVhY3QudXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoZGlkTW91bnQuY3VycmVudCkge1xuICAgICAgY2IoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZGlkTW91bnQuY3VycmVudCA9IHRydWU7XG4gICAgfVxuICB9LCBbY2IsIC4uLmRlcHNdKTsgLy8gZXNsaW50LWRpc2FibGUtbGluZVxufTtcbiJdfQ==