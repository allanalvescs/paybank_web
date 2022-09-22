import { ComponentType } from "react";
import { Route as CommomRoute, RouterProps } from "react-router-dom";

interface Props extends RouterProps {
  isPrivate?: Boolean;
  component: ComponentType;
}

export function Routes({
  isPrivate = false,
  component: Component,
  ...rest
}: Props) {
  return (
    <CommomRoute
      {...rest}
      render={() => {
        return <Component />;
      }}
    />
  );
}
