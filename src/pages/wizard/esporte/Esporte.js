import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";

function Esporte() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/futebol");
  };
  const handleClickNao = () => {
    history.push("/novela");
  };
  return (
    <Wizard
      titulo="GloboEsporte"
      descricao="Gosta de Esportes?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Esporte;
