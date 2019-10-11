import * as React from "react";
import { Grommet } from "grommet";
import Clock from "./containers/clock";

export class App extends React.Component<undefined, undefined> {
  render() {
    return (
      <Grommet>
        <Clock />
      </Grommet>
    );
  }
}
