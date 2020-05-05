import React from "react";
import { useHistory } from "react-router-dom";
import { TimeInternacionalCheck } from "../styled";
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
    <TimeInternacionalCheck
      titulo="GloboEsporte"
      descricao="Torce para algum time internacional?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Internacional;
