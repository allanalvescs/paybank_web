import { Route, Switch } from "react-router-dom";
import { Dashboard } from "../pages/Dashboard";
import { SingIn } from "../pages/Singin";
import { SingUp } from "../pages/SingUp";

export function AppRoutes() {
  return (
    <Switch>
      <Route exact path="/" component={SingIn} />
      <Route path="/register" component={SingUp} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  );
}
