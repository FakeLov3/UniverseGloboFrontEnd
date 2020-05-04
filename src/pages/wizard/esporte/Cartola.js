import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";
// import { Container } from './styles';

function Cartola() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/novela");
  };
  const handleClickNao = () => {
    history.push("/novela");
  };
  return (
    <Wizard
      titulo="GloboEsporte"
      descricao="Joga Cartola?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Cartola;
