import React from "react";
import api from "../../services/api";
import useFetch from "../../hooks/useFetch";
import {ButtonDelete} from './style';

export const PostDelete = ({ id }) => {
  const { loading, request } = useFetch();

  async function handleClick() {
    const confirm = window.confirm("Tem certeza que deseja excluir?");
    if (confirm) {
      const req = api.delete(`/${id}`);
      const response = await request(req);
      if (response.data === 1) window.location.reload();
    }
  }
  return (
    <>
      {loading ? (
        <ButtonDelete disabled>Excluindo...</ButtonDelete>
      ) : (
        <ButtonDelete onClick={handleClick}>Excluir</ButtonDelete>
      )}
    </>
  );
};
