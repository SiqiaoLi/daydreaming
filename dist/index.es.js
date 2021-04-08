import React from 'react';

var styles = {
    border: "1px solid black",
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    fontSize: 15,
    padding: "3px 10px",
    margin: 10
};
var Button = function (props) { return (React.createElement("button", { onClick: props.onClick, style: styles, type: "button" }, props.children)); };
Button.defaultProps = {
    children: null,
    onClick: function () { }
};

export { Button };
//# sourceMappingURL=index.es.js.map
