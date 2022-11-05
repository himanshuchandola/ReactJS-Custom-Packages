import React from "react";
import "./Header.css";
declare type HeaderProps = {
    loginButton?: string;
    searchPlaceholderText?: string;
    HeaderDetails?: any;
    children?: React.ReactNode;
    commonOnClick?: any;
};
export declare function Header(props: HeaderProps): JSX.Element;
export {};
