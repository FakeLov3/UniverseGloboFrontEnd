import React from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
  align-items: center;
`;
const ContainerTop = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  margin-bottom: 5px;
`;
const Titulo = styled.h3`
  align-self: center;
  margin: 1px;
  color: white;
  font-family: Open Sans, sans-serif;
`;
const Descricao = styled.p`
  align-self: center;
  margin: 1px;
  text-align: center;
  color: white;
  font-family: Open Sans, sans-serif;
  font-size: 19px;
  line-height: 28px;
`;
const ContainerBtn = styled.div`
  display: flex;
  align-content: center;
  flex-direction: row;
  margin-top: 5px;
`;
const Botao = styled.button`
  margin: 5px;
  border-color: rgb(243, 29, 29);
  background-color: rgb(243, 29, 29);
  height: 40px;
  width: 100px;
  appearance: none;
  border: none;
  border-radius: 3px;
  color: white;
`;

export const ContainerHome = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-self: center;
  background-color: #1f1f1f;
  height: 100vh;
  margin-top: 10px;
`;

export function BemVindo({ titulo, descricao, onClickSim, onClickNao }) {
  return (
    <Container>
      <ContainerTop>
        <Titulo>{titulo}</Titulo>
        <Descricao>{descricao}</Descricao>
      </ContainerTop>
      <ContainerBtn>
        <Botao onClick={onClickNao}>Sair</Botao>
        <Botao onClick={onClickSim}>Continuar</Botao>
      </ContainerBtn>
    </Container>
  );
}
