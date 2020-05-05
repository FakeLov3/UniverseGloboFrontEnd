import React from "react";
import styled from "styled-components";
import CheckBoxNovela from "./novela/checkbox";
import CheckBoxTime from "./esporte/checkboxtime";
import CheckBoxInternacional from "./esporte/checkboxinternacional";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  align-content: center;
  align-items: center;
  margin-top: 10px;
  color: white;
`;
export const ContainerTop = styled.div`
  display: flex;
  align-content: center;
  flex-direction: column;
  margin-bottom: 5px;
  margin-top: 60px;
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
  display: flex;
  width: 100%;
  flex-direction: column;
  align-content: center;

  align-self: center;

  align-items: center;
  justify-content: center;

  background-color: #1f1f1f;
`;
export const Navegacao = ({ titulo, descricao }) => (
  <ContainerTop>
    <Titulo>{titulo}</Titulo>
    <Descricao>{descricao}</Descricao>
  </ContainerTop>
);
export const NovelaCheck = ({
  titulo,
  descricao,
  onClickSim,
  onClickNao,
  sim = "Sim",
  nao = "Não",
}) => (
  <Container>
    <ContainerTop>
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
    </ContainerTop>
    <CheckBoxNovela />
    <ContainerBtn>
      <Botao onClick={onClickNao}>{nao}</Botao>
      <Botao onClick={onClickSim}>{sim}</Botao>
    </ContainerBtn>
  </Container>
);
export const TimeCheck = ({
  titulo,
  descricao,
  onClickSim,
  onClickNao,
  sim = "Sim",
  nao = "Não",
}) => (
  <Container>
    <ContainerTop>
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
    </ContainerTop>
    <CheckBoxTime />
    <ContainerBtn>
      <Botao onClick={onClickNao}>{nao}</Botao>
      <Botao onClick={onClickSim}>{sim}</Botao>
    </ContainerBtn>
  </Container>
);
export const TimeInternacionalCheck = ({
  titulo,
  descricao,
  onClickSim,
  onClickNao,
  sim = "Sim",
  nao = "Não",
}) => (
  <Container>
    <ContainerTop>
      <Titulo>{titulo}</Titulo>
      <Descricao>{descricao}</Descricao>
    </ContainerTop>
    <CheckBoxInternacional />
    <ContainerBtn>
      <Botao onClick={onClickNao}>{nao}</Botao>
      <Botao onClick={onClickSim}>{sim}</Botao>
    </ContainerBtn>
  </Container>
);

export default function Wizard({
  titulo,
  descricao,
  onClickSim,
  onClickNao,
  sim = "Sim",
  nao = "Não",
}) {
  return (
    <Container>
      <ContainerTop>
        <Titulo>{titulo}</Titulo>
        <Descricao>{descricao}</Descricao>
      </ContainerTop>
      <ContainerBtn>
        <Botao onClick={onClickNao}>{nao}</Botao>
        <Botao onClick={onClickSim}>{sim}</Botao>
      </ContainerBtn>
    </Container>
  );
}
