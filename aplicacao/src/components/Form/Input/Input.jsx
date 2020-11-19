import React from "react";
import * as S from "./style";

export const Input = ({ id, label, value, onChange, erro, ...props }) => {
  return (
    <S.Wrapper>
      <S.Label htmlFor={id}>
        {label}
      </S.Label>
      <S.Input
          id={id}
          type="text"
          value={value}
          onChange={onChange}
          {...props}
        />
        {erro && <p>{erro}</p>}
    </S.Wrapper>
  );
};
