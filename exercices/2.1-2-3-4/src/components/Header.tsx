import type React from "react";
import "./Header.css";


interface HeaderProps {
    urlLgog : string;
    children:React.ReactNode;
}

const Header = (props:HeaderProps) =>{
    return(
        <header className="header">
            <img src={props.urlLgog} alt="logo" className="logo"/>
            <div>
                {props.children}
            </div>
        </header>
    );
};

export default Header;