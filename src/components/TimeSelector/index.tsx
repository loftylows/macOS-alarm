import * as React from "react";
import { GenericOnChangeHandler, GenericFocusEventHandler } from "common-types";
import { Button } from "grommet";
import { FaPlay } from "react-icons/Fa";
import {
  StyledContainer,
  StyledInputWrapper,
  StyledInputLabel,
  StyledInput
} from "./styles";
import { SetTime } from "../../containers/clock";

interface Props {
  hours: number;
  minutes: number;
  seconds: number;
  onHoursChange: GenericOnChangeHandler;
  onMinutesChange: GenericOnChangeHandler;
  onSecondsChange: GenericOnChangeHandler;
  onHoursBlur: GenericFocusEventHandler;
  onSecondsBlur: GenericFocusEventHandler;
  onMinutesBlur: GenericFocusEventHandler;
  setTime: SetTime;
}

export default ({
  hours,
  minutes,
  seconds,
  onHoursChange,
  onMinutesChange,
  onSecondsChange,
  setTime,
  onHoursBlur,
  onMinutesBlur,
  onSecondsBlur
}: Props) => (
  <StyledContainer>
    {/*<FormField label="Hours" htmlFor="hours">
      <MaskedInput
        id="hours"
        mask={[
          {
            length: [1, 2],
            regexp: /[0-9]([0-9])?$/,
            placeholder: "Hours..."
          }
        ]}
        value={`${hours}`}
        onChange={onHoursChange}
      />
      </FormField>*/}

    <StyledInputWrapper>
      <StyledInputLabel htmlFor="hours">Hours</StyledInputLabel>
      <StyledInput
        value={`${hours}`}
        onChange={onHoursChange}
        onBlur={onHoursBlur}
        onFocus={event => (event.target as HTMLInputElement).select()}
        pattern="/[0-9]([0-9])?$/"
        id="hours"
        placeholder="0"
      />
    </StyledInputWrapper>

    <StyledInputWrapper>
      <StyledInputLabel htmlFor="minutes">Minutes</StyledInputLabel>
      <StyledInput
        value={`${minutes}`}
        onChange={onMinutesChange}
        onBlur={onMinutesBlur}
        onFocus={event => (event.target as HTMLInputElement).select()}
        pattern="/[0-9]([0-9])?$/"
        id="minutes"
        placeholder="0"
      />
    </StyledInputWrapper>

    <StyledInputWrapper>
      <StyledInputLabel htmlFor="seconds">Seconds</StyledInputLabel>
      <StyledInput
        value={`${seconds}`}
        onChange={onSecondsChange}
        onBlur={onMinutesBlur}
        onFocus={event => (event.target as HTMLInputElement).select()}
        pattern="/[0-9]([0-9])?$/"
        id="seconds"
        placeholder="0"
      />
    </StyledInputWrapper>

    <Button
      plain={false}
      primary
      disabled={!hours && !minutes && !seconds}
      icon={<FaPlay />}
      onClick={() => {
        setTime({
          hours,
          minutes,
          seconds
        });
      }}
      style={{ marginTop: "30px" }}
    />
  </StyledContainer>
);
