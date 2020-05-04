import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";

// import { Container } from './styles';

function Regional() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/internacionais");
  };
  const handleClickNao = () => {
    history.push("/videoshow");
  };
  return (
    <Wizard
      titulo="G1"
      descricao="Gostaria de receber noticias regionais?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Regional;
