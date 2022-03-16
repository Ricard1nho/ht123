
import React from "react";
import { Navbar, Container, Nav, Button } from "react-bootstrap";
import { TiThMenu } from 'react-icons/ti';

interface navbarProps {
    links: {label: string, path: string}[];
    other: string;
}

const Navbar2:React.FC<navbarProps> = ({links, other, children}) => {
    const getBrandText = () => {
      return "Brand";
    };
    return (
      <nav>
        <div className="nav-wrapper">
          <ul id="nav-mobile" className="right">
            <li><a href="https://www.rottamobile.com.br/admin/forca-vendas">Painel Administrativo</a></li>
          </ul>
        </div>
      </nav>
    )
}

export default Navbar2
