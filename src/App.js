/* eslint-disable no-lone-blocks */
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home";
import Esporte from "./pages/wizard/esporte/Esporte";
import Futebol from "./pages/wizard/esporte/Futebol";
import Time from "./pages/wizard/esporte/Time";
import Internacional from "./pages/wizard/esporte/Internacional";
import Cartola from "./pages/wizard/esporte/Cartola";
import Jornal from "./pages/wizard/jornal/Jornal";
import Nacional from "./pages/wizard/jornal/Nacional";
import Internacionais from "./pages/wizard/jornal/Internacionais";
import Regional from "./pages/wizard/jornal/Regional";
import Negocios from "./pages/wizard/jornal/Negocios";
import Novela from "./pages/wizard/novela/novela";
import Genero from "./pages/wizard/novela/Genero";
import EpocaAtual from "./pages/wizard/novela/EpocaAtual";
import VideoShow from "./pages/wizard/VideoShow";
import BBB from "./pages/wizard/BBB";
import Blocos from "./pages/blocos";
import { ContainerHome } from "./pages/wizard/styled";
import "./app.css";

function App() {
  return (
    <ContainerHome>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Blocos} />
          <Route path="/esporte" component={Esporte} />
          <Route path="/futebol" component={Futebol} />
          <Route path="/time" component={Time} />
          <Route path="/internacional" component={Internacional} />
          <Route path="/cartola" component={Cartola} />
          <Route path="/jornal" component={Jornal} />
          <Route path="/nacional" component={Nacional} />
          <Route path="/internacionais" component={Internacionais} />
          <Route path="/regional" component={Regional} />
          <Route path="/negocios" component={Negocios} />
          <Route path="/novela" component={Novela} />
          <Route path="/genero" component={Genero} />
          <Route path="/epoca_atual" component={EpocaAtual} />
          <Route path="/videoshow" component={VideoShow} />
          <Route path="/bbb" component={BBB} />
        </Switch>
      </BrowserRouter>
    </ContainerHome>
  );
}
export default App;
