import { Route, Switch } from "react-router-dom";

const Router = () => {
  return (
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
        <p>Dashboard</p>
      </Route>
    </Switch>
  );
};
export default Router;
