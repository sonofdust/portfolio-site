import React from "react";
import { BrowserRouter, Route, NavLink, Switch } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Portfolio from "../components/Portfolio";
import PortfolioPage from "../components/PortfolioPage";
import Home from "../components/Home";
import Header from "../components/Header";
import Contact from "../components/Contact";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Home} exact={true} />
        <Route path="/contact" component={Contact} />
        <Route path="/portfolio" component={Portfolio} exact={true} />
        <Route path="/portfolio/:id" component={PortfolioPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
