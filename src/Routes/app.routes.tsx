import { Route, Switch } from "react-router-dom";
import { SingIn } from "../pages/Singin";
import { SingUp } from "../pages/SingUp";

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={SingIn} />
      <Route path="/register" component={SingUp} />
    </Switch>
  );
}
