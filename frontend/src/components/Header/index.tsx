import { useState } from "react";
import { Link } from "react-router-dom";
import { Navbar, Collapse, Nav, NavbarBrand, NavbarToggler, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, NavItem } from "reactstrap";
import { BsChatSquareDots, BsPersonFill } from "react-icons/bs";
import '../../styles/scss/header/style.scss'
import { useAppContext } from "../../contexts/AppContext";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const { usuarioData } = useAppContext();
  
  return (
    <>
      <Navbar color="dark" dark expand="md">
        <NavbarBrand>
          <Link className="nav-item-link" to="/home">
            <BsChatSquareDots className="mr-2" color="white"/>E-Commerce-App
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem className="mr-5 ml-4">
              <Link className="nav-item-link" to="/produtos">Quadrinhos</Link>
            </NavItem>
          </Nav>
          <DropdownItem divider />
          <Nav navbar>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                <BsPersonFill size={20} color="gray" className="avatar-user" />
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>
                  {/* {apiTeste4[0].name} */}
                  <span>
                    {usuarioData.nome}
                  </span>
                </DropdownItem>
                <DropdownItem>
                  {/* <Link className="nav-item-link" to={`/usuario/${apiTeste4[0].id}`}>Perfil</Link> */}
                  <Link className="nav-item-link" to={`/usuario/${usuarioData.id}`}>Perfil</Link>
                </DropdownItem>
                <DropdownItem>
                  {/* <Link className="nav-item-link" to={`/favoritos/${apiTeste4[0].id}`}>Favoritos</Link> */}
                  <Link className="nav-item-link" to={`/favoritos/${usuarioData.id}`}>Favoritos</Link>
                </DropdownItem>
                <DropdownItem divider />
                <DropdownItem>
                  <Link className="nav-item-link" to="/">Sair</Link>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </>
  );
}
