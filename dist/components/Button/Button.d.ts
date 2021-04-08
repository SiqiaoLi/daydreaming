import React from "react";
export interface IButtonProps {
    children?: React.ReactNode;
    onClick?: (e: any) => void;
}
export declare const Button: React.FunctionComponent<IButtonProps>;
