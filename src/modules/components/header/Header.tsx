import React from "react";
import { Container, Logo } from "./header.style";
import logo from "../../../assets/starwarslogo.png";

const Header = () => {
  return (
    <>
      <Container>
        <Logo src={logo} alt='starwarsLogo' />
      </Container>
    </>
  );
};

export default Header;
