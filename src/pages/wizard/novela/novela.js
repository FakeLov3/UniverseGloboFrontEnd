import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";

// import { Container } from './styles';

function Novela() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/epoca_atual");
  };
  const handleClickNao = () => {
    history.push("/jornal");
  };
  return (
    <Wizard
      titulo="GShow"
      descricao="Gosta de Novelas?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Novela;
