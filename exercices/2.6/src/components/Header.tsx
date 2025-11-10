import type React from "react";
import "./Header.css";


interface HeaderProps {
    urlLogo : string;
    children:React.ReactNode;
}

const Header = ({urlLogo,children}:HeaderProps) =>{
    return(
        <header className="header">
            <img src={urlLogo} alt="logo" className="logo"/>
            <div>
                {children}
            </div>
        </header>
    );
};

export default Header;