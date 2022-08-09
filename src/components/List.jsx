import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/NavItem";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import styled from "styled-components";
const Linka = styled.div`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1;
  background-color li {
    list-style: none;
  }
  a {
    color: #edf2ee;
    text-decoration: none;
    margin-left: 1rem;
    font-size: 1.4rem;
    font-family: "Open Sans", sans-serif;
    /* font-family: "Roboto", sans-serif; */
    &.active {
      color: #198754;
    }
    &:hover {
      color: #198754;
    }
  }
`;
function List() {
  return (
    <>
      <Linka>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Nav className="justify-content-md-center">
              <Nav-Item>
                <Link to="/" className="active">
                  Inicio
                </Link>
              </Nav-Item>
              <Nav-Item>
                <Link to="/jod">Mi trabajo</Link>
              </Nav-Item>
              <Nav-Item>
                <Link to="/aboutme">Quien soy</Link>
              </Nav-Item>
            </Nav>
          </Container>
        </Navbar>
      </Linka>
    </>
  );
}

export { List };
