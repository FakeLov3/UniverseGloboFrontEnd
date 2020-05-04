import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";

// import { Container } from './styles';

function EpocaAtual() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/genero");
  };
  const handleClickNao = () => {
    history.push("/jornal");
  };
  return (
    <Wizard
      titulo="GShow"
      descricao="Você gosta de Novelas de Época ou Atuais?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default EpocaAtual;
