import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";
// import { Container } from './styles';

function Futebol() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/time");
  };
  const handleClickNao = () => {
    history.push("/novela");
  };
  return (
    <Wizard
      titulo="GloboEsporte"
      descricao="Gosta de Futebol?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Futebol;
