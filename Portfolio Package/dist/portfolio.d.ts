/// <reference types="react" />
import "./portfolio.css";
declare type PortfolioProps = {
    profileImage?: string;
    profileName?: string;
    professiomName?: string;
    footercredits?: string;
    cv?: string;
    instaDetails?: string;
    linkedinDetails?: string;
    githubDetails?: string;
    portfolioArray?: any;
    whatsappInfo?: string;
    emailInfo?: string;
    skillsArray?: any;
};
export declare function Portfolio(props: PortfolioProps): JSX.Element;
export {};
