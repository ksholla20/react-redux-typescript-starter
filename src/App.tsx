import * as React from "react";
import { Route, Switch } from "react-router-dom";
import Calculator from './containers/calculator'

export const App = (): JSX.Element => {
  return (
    <div>
      <Route exact={true} path="/" component={Calculator} />
    </div>
  );
};
export default App;
