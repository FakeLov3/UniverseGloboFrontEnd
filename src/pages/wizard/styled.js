import React from "react";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: center;
  align-items: center;
  margin-top: 10px;
`;
export const ContainerTop = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  margin-bottom: 5px;
`;
export const Titulo = styled.h3`
  align-self: center;
  margin: 1px;
  color: white;
  font-family: Open Sans, sans-serif;
`;
export const Descricao = styled.p`
  align-self: center;
  margin: 1px;
  text-align: center;
  color: white;
  font-family: Open Sans, sans-serif;
  font-size: 19px;
  line-height: 28px;
`;
export const ContainerBtn = styled.div`
  display: flex;
  align-self: center;
  align-content: center;
  flex-direction: row;
  margin-top: 5px;
`;
export const Botao = styled.button`
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
  align-content: center;

  align-self: center;
  background-color: #1f1f1f;
  height: 100vh;
  margin-top: 10px;
`;
export const Navegacao = ({ titulo, descricao }) => (
  <ContainerTop>
    <Titulo>{titulo}</Titulo>
    <Descricao>{descricao}</Descricao>
  </ContainerTop>
);
export const Bottom = ({ sim, nao, onClickSim, onClickNao }) => (
  <ContainerBtn>
    <Botao onClick={onClickNao}>{nao}</Botao>
    <Botao onClick={onClickSim}>{sim}</Botao>
  </ContainerBtn>
);

export default function Wizard({ titulo, descricao, onClickSim, onClickNao }) {
  return (
    <Container>
      <ContainerTop>
        <Titulo>{titulo}</Titulo>
        <Descricao>{descricao}</Descricao>
      </ContainerTop>
      <ContainerBtn>
        <Botao onClick={onClickNao}>Não</Botao>
        <Botao onClick={onClickSim}>Sim</Botao>
      </ContainerBtn>
    </Container>
  );
}
