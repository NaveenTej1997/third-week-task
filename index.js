import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import App from "./App";

import getData from './getData'


    const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        
        <Route path="/getData" component={getData} />
         </Switch>
      </BrowserRouter>,
      rootElement
    );