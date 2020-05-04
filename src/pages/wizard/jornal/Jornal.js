import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "../styled";

// import { Container } from './styles';

function Jornal() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/nacional");
  };
  const handleClickNao = () => {
    history.push("/videoshow");
  };
  return (
    <Wizard
      titulo="G1"
      descricao="Gostaria de receber noticias?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default Jornal;
