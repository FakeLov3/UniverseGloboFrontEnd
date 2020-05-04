import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";

// import { Container } from './styles';

function Nacional() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/regional");
  };
  const handleClickNao = () => {
    history.push("/videoshow");
  };
  return (
    <Wizard
      titulo="G1"
      descricao="Gostaria de receber noticias nacionais?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Nacional;
