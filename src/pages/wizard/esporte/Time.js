import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";
// import { Container } from './styles';

function Time() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/internacional");
  };
  const handleClickNao = () => {
    history.push("/novela");
  };
  return (
    <Wizard
      titulo="GloboEsporte"
      descricao="Torce para qual time?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Time;
