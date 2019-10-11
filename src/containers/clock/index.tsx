import * as React from "react";
import { Component } from "react";
import * as notifier from "node-notifier";
import Clock from "../../components/Clock";
import { Maybe } from "common-types";

const getDuration = (time: TimeArg) => {
  const hMs = time.hours * 60 * 60 * 1000;
  const mMs = time.minutes * 60 * 1000;
  const sMs = time.seconds * 1000;

  return hMs + mMs + sMs;
};

export type SetTime = (time: Time) => void;

export interface Time {
  hours: number;
  minutes: number;
  seconds: number;
  duration: number;
}

export interface TimeArg {
  hours: number;
  minutes: number;
  seconds: number;
}

interface State {
  time: Time | null;
}

export default class ClockContainer extends Component<{}, State> {
  clockInterval: Maybe<number>;
  state = {
    time: null
  };

  setTime = (time: TimeArg) => {
    this.setState(
      {
        time: {
          hours: time.hours || 0,
          minutes: time.minutes || 0,
          seconds: time.seconds || 0,
          duration: getDuration(time)
        }
      },
      () => {
        this.clockInterval = setInterval(() => {
          this.setState(({ time }) => {
            const newDuration =
              time && time.duration! >= 1000 ? time!.duration - 1000 : 0;

            if (!time) {
              clearInterval(this.clockInterval!);
              this.clockInterval = null;
              return {};
            } else if (!newDuration) {
              clearInterval(this.clockInterval!);
              this.clockInterval = null;
              notifier.notify({
                title: "Alarm",
                message: "Time is up!",
                sound: "Glass",
                wait: true,
                timeout: 60,
                closeLabel: "Close this"
              });

              return {
                time: {
                  ...time,
                  duration: newDuration
                }
              };
            }

            return {
              time: {
                ...time,
                duration: newDuration
              }
            };
          });
        }, 1000);
      }
    );
  };

  clearTime = () => {
    if (this.clockInterval) {
      clearInterval(this.clockInterval);
      this.clockInterval = null;
    }

    this.setState({
      time: null
    });
  };

  render() {
    const { time } = this.state;
    return (
      <Clock setTime={this.setTime} clearTime={this.clearTime} time={time} />
    );
  }
}
