import * as React from "react";
import "./Header.css";
declare type HeaderProps = {
    infoText?: string;
    phone?: string;
    login?: string;
    signup?: string;
    HeaderDetails?: any;
    Link?: any;
    SearchImage?: string;
    CartImage?: string;
    children?: React.ReactNode;
    logo?: string;
};
export declare function MyHeader(props: HeaderProps): JSX.Element;
export {};
