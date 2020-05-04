import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";

// import { Container } from './styles';

function Internacionais() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/negocios");
  };
  const handleClickNao = () => {
    history.push("/videoshow");
  };
  return (
    <Wizard
      titulo="G1"
      descricao="Gostaria de receber noticias internacionais?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Internacionais;
