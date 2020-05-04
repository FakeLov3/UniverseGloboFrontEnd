import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "./styled";
// import { Container } from './styles';

function BBB() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/inicio");
  };
  const handleClickNao = () => {
    history.push("/inicio");
  };
  return (
    <Wizard
      titulo="BBB"
      descricao="Gostaria de receber noticias relacionadas ao BBB?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default BBB;
