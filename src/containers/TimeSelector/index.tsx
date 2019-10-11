import * as React from "react";
import { Component } from "react";
import { GenericOnChangeHandler, GenericFocusEventHandler } from "common-types";
import TimeSelector from "../../components/TimeSelector";
import { SetTime } from "../clock";

interface Props {
  setTime: SetTime;
}

interface State {
  hours: number;
  minutes: number;
  seconds: number;
}

export default class TimeSelectorContainer extends Component<Props, State> {
  state = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  onHoursChange: GenericOnChangeHandler = ({ target }) => {
    if (
      target.value &&
      !!!parseInt(target.value as string) &&
      parseInt(target.value as string) !== 0
    )
      return;

    if (target.value && !/^[0-9]{1,2}$/.test(target.value)) return;

    const parsedInt = parseInt(target.value as string);

    this.setState({
      hours: parsedInt === 0 ? 0 : parsedInt || target.value
    });
  };

  onMinutesChange: GenericOnChangeHandler = ({ target }) => {
    if (
      target.value &&
      !!!parseInt(target.value as string) &&
      parseInt(target.value as string) !== 0
    )
      return;

    if (target.value && !/^[0-9]{1,2}$/.test(target.value)) return;

    const parsedInt = parseInt(target.value as string);

    this.setState({
      minutes: parsedInt === 0 ? 0 : parsedInt || target.value
    });
  };

  onSecondsChange: GenericOnChangeHandler = ({ target }) => {
    if (
      target.value &&
      !!!parseInt(target.value as string) &&
      parseInt(target.value as string) !== 0
    )
      return;

    if (target.value && !/^[0-9]{1,2}$/.test(target.value)) return;

    const parsedInt = parseInt(target.value as string);

    this.setState({
      seconds: parsedInt === 0 ? 0 : parsedInt || target.value
    });
  };

  onHoursBlur: GenericFocusEventHandler = event => {
    const val = parseInt((event.target as HTMLInputElement).value);
    if (!!val || val === 0) return;

    this.setState({
      hours: 0
    });
  };

  onSecondsBlur: GenericFocusEventHandler = event => {
    const val = parseInt((event.target as HTMLInputElement).value);
    if (!!val || val === 0) return;

    this.setState({
      seconds: 0
    });
  };

  onMinutesBlur: GenericFocusEventHandler = event => {
    const val = parseInt((event.target as HTMLInputElement).value);
    if (!!val || val === 0) return;

    this.setState({
      minutes: 0
    });
  };

  render() {
    const { hours, minutes, seconds } = this.state;

    return (
      <TimeSelector
        hours={hours}
        minutes={minutes}
        seconds={seconds}
        onHoursChange={this.onHoursChange}
        onMinutesChange={this.onMinutesChange}
        onSecondsChange={this.onSecondsChange}
        onHoursBlur={this.onHoursBlur}
        onSecondsBlur={this.onSecondsBlur}
        onMinutesBlur={this.onMinutesBlur}
        setTime={this.props.setTime}
      />
    );
  }
}
