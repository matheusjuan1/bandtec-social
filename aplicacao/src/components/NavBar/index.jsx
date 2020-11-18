import React from "react";
import { NavLink } from "react-router-dom";
import * as S from "./style";

const NavBar = () => {
    return (
        <S.NavBar>
          <S.Items>
            <NavLink to="/">
              <li >
                <i className="fas fa-home"></i>
              </li>
            </NavLink>
            <NavLink to="local">
              <li>
                <i className="fas fa-plus-square"></i>
              </li>
            </NavLink>
            <NavLink to="perfil">
              <li>
                <i className="fas fa-user-alt"></i>
              </li>
            </NavLink>
          </S.Items>
        </S.NavBar>
    );
}

export default NavBar;