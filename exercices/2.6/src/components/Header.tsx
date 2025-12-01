import type React from "react";
import "./Header.css";


interface HeaderProps {
    urlLogo : string;
    children:React.ReactNode;
}

//src car cest mieux de stocker l'url dans une variable et alt = logo sert a afficher le texte logo si limage ne saffiche pas. C'est un texte alternatif

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