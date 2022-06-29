import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Nav = styled.nav`
  padding: 1.5rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.main};

  ul {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 45px;
  }

  li {
    list-style-type: none;
  }

  .link {
    text-decoration: none;
    color: ${({ theme }) => theme.colors.main};
  }

  .link:hover {
    color: ${({ theme }) => theme.colors.darker};
  }
`;

function NavBar() {
  return (
    <Nav>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="/about">
            About Me
          </Link>
        </li>
        <li>
          <Link className="link" to="/projects">
            Projects
          </Link>
        </li>
        <li>
          <Link className="link" to="/contacts">
            Contact Me
          </Link>
        </li>
      </ul>
    </Nav>
  );
}

export default NavBar;
