import { ComponentType } from "react";
import {
  Redirect,
  Route as CommomRoute,
  RouterProps as ReactRouterProps,
} from "react-router-dom";
import { useUser } from "../Providers/User/Auth";

interface RouterProps extends ReactRouterProps {
  isPrivate?: Boolean;
  component: ComponentType;
}

export function Route({
  isPrivate,
  component: Component,
  ...rest
}: RouterProps) {
  const { token } = useUser();
  return (
    <CommomRoute
      {...rest}
      render={() => {
        return !!isPrivate === !!token ? (
          <Component />
        ) : (
          <Redirect to={isPrivate ? "/" : "/dashboard"} />
        );
      }}
    />
  );
}
