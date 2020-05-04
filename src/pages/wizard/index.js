import React from "react";
import { WithWizard } from "react-albus";
import { ContainerBtn, Botao } from "./styled";
// import { Container } from './styles';

function Navigation() {
  return (
    <WithWizard
      render={({ proximo, anterior, passo, passos }) => (
        <ContainerBtn>
          <Botao onClick={proximo}>Sim</Botao>
          <Botao onClick={anterior}>Não</Botao>
          {/* {passos.indexOf(passo) < passos.length - 1 && (
            <Botao onClick={proximo}>Sim</Botao>
          )}
          {passos.indexOf(passo) > 0 && <Botao onClick={anterior}>Não</Botao>} */}
        </ContainerBtn>
      )}
    />
  );
}

export default Navigation;
