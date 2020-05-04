import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";

// import { Container } from './styles';

function Negocios() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/videoshow");
  };
  const handleClickNao = () => {
    history.push("/videoshow");
  };
  return (
    <Wizard
      titulo="G1"
      descricao="Gostaria de receber noticias relacionadas a negocios?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Negocios;
