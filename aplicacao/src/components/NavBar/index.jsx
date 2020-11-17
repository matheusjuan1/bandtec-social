import React, { Component } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";

export default class NavBar extends Component {
  // const { hidden } = () => {

  // }
  render() {
    const ativoH = (props) => {
      if (props.pagina === "home") {
        return true;
      }
      return false;
    };
    const ativoP = (props) => {
      if (props.pagina === "perfil") {
        return true;
      }
      return false;
    };

    return (
      <>
        <S.NavBar>
          <S.Items>
            <Link to="/">
              <li className={ativoH ? "ativo" : ""}>
                <i className="fas fa-home"></i>
              </li>
            </Link>
            <Link to="/">
              <li className={""}>
                <i className="fas fa-plus-square"></i>
              </li>
            </Link>
            <Link to="/perfil">
              <li className={ativoP ? "ativo" : ""}>
                <i className="fas fa-user-alt"></i>
              </li>
            </Link>
          </S.Items>
        </S.NavBar>
      </>
    );
  }
}
