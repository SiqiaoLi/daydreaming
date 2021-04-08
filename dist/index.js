'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var React = require('react');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var React__default = /*#__PURE__*/_interopDefaultLegacy(React);

var styles = {
    border: "1px solid black",
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    fontSize: 15,
    padding: "3px 10px",
    margin: 10
};
var Button = function (props) { return (React__default['default'].createElement("button", { onClick: props.onClick, style: styles, type: "button" }, props.children)); };
Button.defaultProps = {
    children: null,
    onClick: function () { }
};

exports.Button = Button;
//# sourceMappingURL=index.js.map
