/// <reference types="react" />
import "./Payment.css";
declare type PaymentProps = {
    itemImage?: string;
    oldPrice?: string;
    newPrice?: string;
    oldFees?: string;
    newFees?: string;
    oldTotal?: string;
    newTotal?: string;
    heading?: string;
    subtotal?: string;
    fee?: string;
    total?: string;
};
export declare function Payment(props: PaymentProps): JSX.Element;
export {};
