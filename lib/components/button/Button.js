"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Button = void 0;

var React = _interopRequireWildcard(require("react"));

var _StyledButton = require("./StyledButton");

var _framerMotion = require("framer-motion");

var _CircleNotch = require("../icons/CircleNotch");

var _useTheme = require("../../hooks/useTheme");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Button = React.forwardRef(function (props, ref) {
  var children = props.children,
      className = props.className,
      loading = props.loading,
      loadingIcon = props.loadingIcon,
      motionConfig = props.motionConfig,
      type = props.type,
      rest = _objectWithoutProperties(props, ["children", "className", "loading", "loadingIcon", "motionConfig", "type"]);

  var theme = (0, _useTheme.useTheme)();
  var button = theme.button,
      time = theme.animations.time;
  var iconToShow = loadingIcon || React.createElement(_CircleNotch.SvgCircleNotch, {
    fill: button[type || 'primary'].color
  });
  var motionConfigToUse = motionConfig || {
    style: {
      height: button.fontSize,
      width: button.fontSize,
      transformOrigin: 'center center'
    },
    animate: {
      rotate: 360
    },
    transition: {
      duration: time.slow,
      loop: Infinity,
      ease: 'linear'
    }
  };
  return React.createElement(_StyledButton.StyledButton, _extends({
    ref: ref,
    buttonType: type,
    className: "".concat(className, " rtk-button"),
    loading: loading,
    theme: theme
  }, rest), React.createElement(_framerMotion.motion.div, {
    variants: {
      loading: {
        width: button.fontSize,
        marginRight: 5,
        transition: {
          type: 'tween'
        }
      },
      notLoading: {
        width: 0,
        marginRight: 0
      }
    },
    animate: loading ? 'loading' : 'notLoading',
    layoutTransition: {
      type: 'tween',
      duration: time.veryFast,
      delay: time.veryFast
    }
  }, loading && React.createElement(_framerMotion.motion.div, motionConfigToUse, iconToShow)), React.createElement("span", null, children));
});
exports.Button = Button;
Button.defaultProps = {
  type: 'primary',
  children: '',
  className: '',
  disabled: false,
  loading: false,
  onClick: undefined
};
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9jb21wb25lbnRzL2J1dHRvbi9CdXR0b24udHN4Il0sIm5hbWVzIjpbIkJ1dHRvbiIsIlJlYWN0IiwiZm9yd2FyZFJlZiIsInByb3BzIiwicmVmIiwiY2hpbGRyZW4iLCJjbGFzc05hbWUiLCJsb2FkaW5nIiwibG9hZGluZ0ljb24iLCJtb3Rpb25Db25maWciLCJ0eXBlIiwicmVzdCIsInRoZW1lIiwiYnV0dG9uIiwidGltZSIsImFuaW1hdGlvbnMiLCJpY29uVG9TaG93IiwiY29sb3IiLCJtb3Rpb25Db25maWdUb1VzZSIsInN0eWxlIiwiaGVpZ2h0IiwiZm9udFNpemUiLCJ3aWR0aCIsInRyYW5zZm9ybU9yaWdpbiIsImFuaW1hdGUiLCJyb3RhdGUiLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJzbG93IiwibG9vcCIsIkluZmluaXR5IiwiZWFzZSIsIm1hcmdpblJpZ2h0Iiwibm90TG9hZGluZyIsInZlcnlGYXN0IiwiZGVsYXkiLCJkZWZhdWx0UHJvcHMiLCJkaXNhYmxlZCIsIm9uQ2xpY2siLCJ1bmRlZmluZWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBOztBQUVBOztBQUlBOztBQUlBOztBQVFBOzs7Ozs7Ozs7Ozs7QUFzQ08sSUFBTUEsTUFBNEMsR0FBR0MsS0FBSyxDQUFDQyxVQUFOLENBQWlELFVBQUNDLEtBQUQsRUFBUUMsR0FBUixFQUFnQjtBQUFBLE1BRXpIQyxRQUZ5SCxHQVN2SEYsS0FUdUgsQ0FFekhFLFFBRnlIO0FBQUEsTUFHekhDLFNBSHlILEdBU3ZISCxLQVR1SCxDQUd6SEcsU0FIeUg7QUFBQSxNQUl6SEMsT0FKeUgsR0FTdkhKLEtBVHVILENBSXpISSxPQUp5SDtBQUFBLE1BS3pIQyxXQUx5SCxHQVN2SEwsS0FUdUgsQ0FLekhLLFdBTHlIO0FBQUEsTUFNekhDLFlBTnlILEdBU3ZITixLQVR1SCxDQU16SE0sWUFOeUg7QUFBQSxNQU96SEMsSUFQeUgsR0FTdkhQLEtBVHVILENBT3pITyxJQVB5SDtBQUFBLE1BUXRIQyxJQVJzSCw0QkFTdkhSLEtBVHVIOztBQVczSCxNQUFNUyxLQUFLLEdBQUcseUJBQWQ7QUFYMkgsTUFjekhDLE1BZHlILEdBa0J2SEQsS0FsQnVILENBY3pIQyxNQWR5SDtBQUFBLE1BZ0J2SEMsSUFoQnVILEdBa0J2SEYsS0FsQnVILENBZXpIRyxVQWZ5SCxDQWdCdkhELElBaEJ1SDtBQW9CM0gsTUFBTUUsVUFBVSxHQUFHUixXQUFXLElBQUksb0JBQUMsMkJBQUQ7QUFBZ0IsSUFBQSxJQUFJLEVBQUVLLE1BQU0sQ0FBQ0gsSUFBSSxJQUFJLFNBQVQsQ0FBTixDQUEwQk87QUFBaEQsSUFBbEM7QUFFQSxNQUFNQyxpQkFBOEIsR0FBR1QsWUFBWSxJQUFLO0FBQ3REVSxJQUFBQSxLQUFLLEVBQUU7QUFBRUMsTUFBQUEsTUFBTSxFQUFFUCxNQUFNLENBQUNRLFFBQWpCO0FBQTJCQyxNQUFBQSxLQUFLLEVBQUVULE1BQU0sQ0FBQ1EsUUFBekM7QUFBbURFLE1BQUFBLGVBQWUsRUFBRTtBQUFwRSxLQUQrQztBQUV0REMsSUFBQUEsT0FBTyxFQUFFO0FBQUNDLE1BQUFBLE1BQU0sRUFBRTtBQUFULEtBRjZDO0FBR3REQyxJQUFBQSxVQUFVLEVBQUU7QUFBRUMsTUFBQUEsUUFBUSxFQUFFYixJQUFJLENBQUNjLElBQWpCO0FBQXVCQyxNQUFBQSxJQUFJLEVBQUVDLFFBQTdCO0FBQXVDQyxNQUFBQSxJQUFJLEVBQUU7QUFBN0M7QUFIMEMsR0FBeEQ7QUFNQSxTQUNFLG9CQUFDLDBCQUFEO0FBQ0UsSUFBQSxHQUFHLEVBQUUzQixHQURQO0FBRUUsSUFBQSxVQUFVLEVBQUVNLElBRmQ7QUFHRSxJQUFBLFNBQVMsWUFBS0osU0FBTCxnQkFIWDtBQUlFLElBQUEsT0FBTyxFQUFFQyxPQUpYO0FBS0UsSUFBQSxLQUFLLEVBQUVLO0FBTFQsS0FNTUQsSUFOTixHQVFFLG9CQUFDLG9CQUFELENBQVEsR0FBUjtBQUNFLElBQUEsUUFBUSxFQUFFO0FBQ1JKLE1BQUFBLE9BQU8sRUFBRTtBQUNQZSxRQUFBQSxLQUFLLEVBQUVULE1BQU0sQ0FBQ1EsUUFEUDtBQUVQVyxRQUFBQSxXQUFXLEVBQUUsQ0FGTjtBQUdQTixRQUFBQSxVQUFVLEVBQUU7QUFBRWhCLFVBQUFBLElBQUksRUFBRTtBQUFSO0FBSEwsT0FERDtBQU1SdUIsTUFBQUEsVUFBVSxFQUFFO0FBQUVYLFFBQUFBLEtBQUssRUFBRSxDQUFUO0FBQVlVLFFBQUFBLFdBQVcsRUFBRTtBQUF6QjtBQU5KLEtBRFo7QUFTRSxJQUFBLE9BQU8sRUFBRXpCLE9BQU8sR0FBRyxTQUFILEdBQWUsWUFUakM7QUFVRSxJQUFBLGdCQUFnQixFQUFFO0FBQUVHLE1BQUFBLElBQUksRUFBRSxPQUFSO0FBQWlCaUIsTUFBQUEsUUFBUSxFQUFFYixJQUFJLENBQUNvQixRQUFoQztBQUEwQ0MsTUFBQUEsS0FBSyxFQUFFckIsSUFBSSxDQUFDb0I7QUFBdEQ7QUFWcEIsS0FZRzNCLE9BQU8sSUFDTixvQkFBQyxvQkFBRCxDQUFRLEdBQVIsRUFDTVcsaUJBRE4sRUFHR0YsVUFISCxDQWJKLENBUkYsRUE0QkUsa0NBQU9YLFFBQVAsQ0E1QkYsQ0FERjtBQWdDRCxDQTVEMkQsQ0FBckQ7O0FBOERQTCxNQUFNLENBQUNvQyxZQUFQLEdBQXNCO0FBQ3BCMUIsRUFBQUEsSUFBSSxFQUFFLFNBRGM7QUFFcEJMLEVBQUFBLFFBQVEsRUFBRSxFQUZVO0FBR3BCQyxFQUFBQSxTQUFTLEVBQUUsRUFIUztBQUlwQitCLEVBQUFBLFFBQVEsRUFBRSxLQUpVO0FBS3BCOUIsRUFBQUEsT0FBTyxFQUFFLEtBTFc7QUFNcEIrQixFQUFBQSxPQUFPLEVBQUVDO0FBTlcsQ0FBdEIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmltcG9ydCB7XG4gIFN0eWxlZEJ1dHRvblxufSBmcm9tIFwiLi9TdHlsZWRCdXR0b25cIjtcblxuaW1wb3J0IHtcbiAgbW90aW9uLCBNb3Rpb25Qcm9wc1xufSBmcm9tIFwiZnJhbWVyLW1vdGlvblwiO1xuXG5pbXBvcnQge1xuICBTdmdDaXJjbGVOb3RjaFxufSBmcm9tICcuLi9pY29ucy9DaXJjbGVOb3RjaCc7XG5cbmltcG9ydCB7XG4gIE1vdXNlRXZlbnRIYW5kbGVyXG59IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQge1xuICB1c2VUaGVtZVxufSBmcm9tIFwiLi4vLi4vaG9va3MvdXNlVGhlbWVcIjtcblxuZXhwb3J0IHR5cGUgQnV0dG9uVHlwZSA9ICdwcmltYXJ5JyB8ICdnaG9zdCcgfCAnbGluayc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgQnV0dG9uUHJvcHMge1xuICAvKiogVHlwZSBvZiB0aGUgYnV0dG9uICovXG4gIHR5cGU/OiBCdXR0b25UeXBlO1xuXG4gIC8qKiBDb250ZW50IHRvIHNob3cgaW4gdGhlIGJ1dHRvbiAqL1xuICBjaGlsZHJlbj86IFJlYWN0LlJlYWN0Tm9kZTtcblxuICAvKiogY2xhc3NuYW1lIGZvciB0aGUgYnV0dG9uICovXG4gIGNsYXNzTmFtZT86IHN0cmluZztcblxuICAvKiogRGlzYWJsZWQgc3RhdGUgb2YgdGhlIGJ1dHRvbiAqL1xuICBkaXNhYmxlZD86IGJvb2xlYW47XG5cbiAgLyoqIEhUTUwgVHlwZSBvZiB0aGUgYnV0dG9uICovXG4gIGh0bWxUeXBlPzogc3RyaW5nO1xuXG4gIC8qKiBMb2FkaW5nIHN0YXRlIG9mIHRoZSBidXR0b24gKi9cbiAgbG9hZGluZz86IGJvb2xlYW47XG5cbiAgLyoqIExvYWRpbmcgaWNvbiBvZiB0aGUgYnV0dG9uICovXG4gIGxvYWRpbmdJY29uPzogUmVhY3QuUmVhY3ROb2RlO1xuXG4gIC8qKiBNb3Rpb24gY29uZmlndXJhdGlvbiBmb3IgbG9hZGluZyBpY29uICovXG4gIG1vdGlvbkNvbmZpZz86IE1vdGlvblByb3BzO1xuXG4gIC8qKiBGdW5jdGlvbiB0byBoYW5kbGUgY2xpY2sgZXZlbnQgKi9cbiAgb25DbGljaz86IE1vdXNlRXZlbnRIYW5kbGVyPEhUTUxCdXR0b25FbGVtZW50PjtcblxuICAvKiogUmVmIHRvIGJlIHBhc3NlZCB0byB0aGUgYnV0dG9uICovXG4gIHJlZj86IFJlYWN0LlJlZjxIVE1MQnV0dG9uRWxlbWVudD47XG59XG5cbmV4cG9ydCBjb25zdCBCdXR0b246IFJlYWN0LkZ1bmN0aW9uQ29tcG9uZW50PEJ1dHRvblByb3BzPiA9IFJlYWN0LmZvcndhcmRSZWY8SFRNTEJ1dHRvbkVsZW1lbnQsIEJ1dHRvblByb3BzPigocHJvcHMsIHJlZikgPT4ge1xuICBjb25zdCB7XG4gICAgY2hpbGRyZW4sXG4gICAgY2xhc3NOYW1lLFxuICAgIGxvYWRpbmcsXG4gICAgbG9hZGluZ0ljb24sXG4gICAgbW90aW9uQ29uZmlnLFxuICAgIHR5cGUsXG4gICAgLi4ucmVzdFxuICB9ID0gcHJvcHM7XG5cbiAgY29uc3QgdGhlbWUgPSB1c2VUaGVtZSgpO1xuXG4gIGNvbnN0IHtcbiAgICBidXR0b24sXG4gICAgYW5pbWF0aW9uczoge1xuICAgICAgdGltZVxuICAgIH1cbiAgfSA9IHRoZW1lO1xuXG4gIGNvbnN0IGljb25Ub1Nob3cgPSBsb2FkaW5nSWNvbiB8fCA8U3ZnQ2lyY2xlTm90Y2ggZmlsbD17YnV0dG9uW3R5cGUgfHwgJ3ByaW1hcnknXS5jb2xvcn0gLz47XG5cbiAgY29uc3QgbW90aW9uQ29uZmlnVG9Vc2U6IE1vdGlvblByb3BzID0gbW90aW9uQ29uZmlnIHx8ICB7XG4gICAgc3R5bGU6IHsgaGVpZ2h0OiBidXR0b24uZm9udFNpemUsIHdpZHRoOiBidXR0b24uZm9udFNpemUsIHRyYW5zZm9ybU9yaWdpbjogJ2NlbnRlciBjZW50ZXInIH0sXG4gICAgYW5pbWF0ZToge3JvdGF0ZTogMzYwfSxcbiAgICB0cmFuc2l0aW9uOiB7IGR1cmF0aW9uOiB0aW1lLnNsb3csIGxvb3A6IEluZmluaXR5LCBlYXNlOiAnbGluZWFyJ31cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxTdHlsZWRCdXR0b25cbiAgICAgIHJlZj17cmVmfVxuICAgICAgYnV0dG9uVHlwZT17dHlwZX1cbiAgICAgIGNsYXNzTmFtZT17YCR7Y2xhc3NOYW1lfSBydGstYnV0dG9uYH1cbiAgICAgIGxvYWRpbmc9e2xvYWRpbmd9XG4gICAgICB0aGVtZT17dGhlbWV9XG4gICAgICB7Li4ucmVzdH1cbiAgICA+XG4gICAgICA8bW90aW9uLmRpdlxuICAgICAgICB2YXJpYW50cz17e1xuICAgICAgICAgIGxvYWRpbmc6IHtcbiAgICAgICAgICAgIHdpZHRoOiBidXR0b24uZm9udFNpemUsXG4gICAgICAgICAgICBtYXJnaW5SaWdodDogNSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHsgdHlwZTogJ3R3ZWVuJ31cbiAgICAgICAgICAgfSxcbiAgICAgICAgICBub3RMb2FkaW5nOiB7IHdpZHRoOiAwLCBtYXJnaW5SaWdodDogMH1cbiAgICAgICAgfX1cbiAgICAgICAgYW5pbWF0ZT17bG9hZGluZyA/ICdsb2FkaW5nJyA6ICdub3RMb2FkaW5nJ31cbiAgICAgICAgbGF5b3V0VHJhbnNpdGlvbj17eyB0eXBlOiAndHdlZW4nLCBkdXJhdGlvbjogdGltZS52ZXJ5RmFzdCwgZGVsYXk6IHRpbWUudmVyeUZhc3QgfX1cbiAgICAgID5cbiAgICAgICAge2xvYWRpbmcgJiZcbiAgICAgICAgICA8bW90aW9uLmRpdlxuICAgICAgICAgICAgey4uLm1vdGlvbkNvbmZpZ1RvVXNlfVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtpY29uVG9TaG93fVxuICAgICAgICAgIDwvbW90aW9uLmRpdj5cbiAgICAgICAgfVxuICAgICAgPC9tb3Rpb24uZGl2PlxuICAgICAgPHNwYW4+e2NoaWxkcmVufTwvc3Bhbj5cbiAgICA8L1N0eWxlZEJ1dHRvbj5cbiAgKTtcbn0pO1xuXG5CdXR0b24uZGVmYXVsdFByb3BzID0ge1xuICB0eXBlOiAncHJpbWFyeScsXG4gIGNoaWxkcmVuOiAnJyxcbiAgY2xhc3NOYW1lOiAnJyxcbiAgZGlzYWJsZWQ6IGZhbHNlLFxuICBsb2FkaW5nOiBmYWxzZSxcbiAgb25DbGljazogdW5kZWZpbmVkXG59O1xuIl19