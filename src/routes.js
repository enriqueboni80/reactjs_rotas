import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Produto from "./pages/Produto"

import Header from "./pages/Header";
import PaginaErro from "./pages/Erro";

const Routes = () => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/sobre" component={Sobre}></Route>
        <Route exact path="/contato" component={Contato}></Route>
        <Route exact path="/produto/:id" component={Produto}></Route>
        <Route exact path="*" component={PaginaErro}></Route>
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;
