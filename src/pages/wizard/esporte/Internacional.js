import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";
// import { Container } from './styles';

function Internacional() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/cartola");
  };
  const handleClickNao = () => {
    history.push("/novela");
  };
  return (
    <Wizard
      titulo="GloboEsporte"
      descricao="Torce para algum time internacional?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Internacional;
