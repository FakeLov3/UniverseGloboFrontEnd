import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";

// import { Container } from './styles';

function Genero() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/jornal");
  };
  const handleClickNao = () => {
    history.push("/jornal");
  };
  return (
    <Wizard
      titulo="GShow"
      descricao="Qual genero de Novelas?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Genero;
