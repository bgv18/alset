import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "../src/store";
import Auth from "./components/auth";
import Login from "./pages/Login";
import CadastrarProfessor from "./pages/CadastroProfessor";
import HomePage from "./pages/Home";
import dashboard from "./pages/DashboardHome";


function Routes() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Router>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/cadastrarProfessor" component={CadastrarProfessor} />
          <Route
            exact
            path="/dashboard"
            component={() => <Auth component={dashboard} redirect={Login} />}
          />
        </Router>
      </PersistGate>
    </Provider>
  );
}
export default Routes;