import React from "react";

export interface IButtonProps {
    children?: React.ReactNode;
    onClick?: (e: any) => void;
}
const styles = {
    border: "1px solid black",
    borderRadius: 3,
    backgroundColor: "#FFFFFF",
    cursor: "pointer",
    fontSize: 15,
    padding: "3px 10px",
    margin: 10
};

export const Button: React.FunctionComponent<IButtonProps> = (props) => (
    <button onClick={props.onClick} style={styles} type="button">
        {props.children}
    </button>
);

Button.defaultProps = {
    children: null,
    onClick: () => {}
};
