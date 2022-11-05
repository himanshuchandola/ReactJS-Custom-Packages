import React from 'react';
import "./Footer.css";
declare type FooterProps = {
    newsletterText?: string;
    newsletterDesc?: string;
    newsletterPlaceholder?: string;
    newsletterbutton?: string;
    footerCopyrightDetails?: string;
    children?: React.ReactNode;
    footerItem?: any;
};
export declare function Footer(props: FooterProps): JSX.Element;
export {};
