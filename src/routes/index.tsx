import { Route, Switch } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import { RouterContainer } from "./styles";

const Router = () => {
  return (
    <RouterContainer>
      <Switch>
        <Route exact path="/">
          <p>Home</p>
        </Route>
        <Route path="/login">
          <p>Login</p>
        </Route>
        <Route path="/signup">
          <p>Registro</p>
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
      </Switch>
    </RouterContainer>
  );
};
export default Router;
