import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import { RouterContainer } from "./styles";
import Home from "../pages/home";
import Login from "../pages/login";
import Register from "../pages/register";
const Router = () => {
  return (
      <RouterContainer>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </RouterContainer>
  );
};
export default Router;
