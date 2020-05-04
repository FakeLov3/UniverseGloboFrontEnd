import React from "react";
import { useHistory } from "react-router-dom";
import Wizard from "./styled";
// import { Container } from './styles';

function VideoShow() {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/bbb");
  };
  const handleClickNao = () => {
    history.push("/bbb");
  };
  return (
    <Wizard
      titulo="VideoShow"
      descricao="Gostaria de receber conteudos do VideoShow?"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
}

export default VideoShow;
