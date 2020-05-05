import React from "react";
import { useHistory } from "react-router-dom";
import { BemVindo } from "./styled";

const Home = () => {
  const history = useHistory();
  const handleClickSim = () => {
    history.push("/esporte");
  };
  const handleClickNao = () => {
    history.push("/home");
  };
  return (
    <BemVindo
      titulo="Bem Vindo!"
      descricao="Notamos que este é o seu primeiro acesso, gostariamos de atualizar as suas preferencias"
      onClickSim={handleClickSim}
      onClickNao={handleClickNao}
    />
  );
};

export default Home;
