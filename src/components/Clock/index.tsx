import * as React from "react";
import { Maybe } from "common-types";
import { Button, Clock } from "grommet";
import { FaTrash } from "react-icons/fa";
import { duration } from "moment";
import { StyledContainer } from "./styles";
import TimeSelector from "../../containers/TimeSelector";
import { Time, SetTime } from "../../containers/clock";

interface Props {
  setTime: SetTime;
  clearTime: () => void;
  time: Maybe<Time>;
}

const getDuration = (time: Time) => {
  const hMs = time.hours * 60 * 60 * 1000;
  const mMs = time.minutes * 60 * 1000;
  const sMs = time.seconds * 1000;

  return hMs + mMs + sMs;
};

export default ({ time, setTime, clearTime }: Props) => {
  const dur = time ? duration(time.duration) : null;

  return (
    <StyledContainer>
      <h1 style={{ marginBottom: "auto" }}>{time ? "Timer" : "Set Time"}</h1>
      {time && dur ? (
        <div>
          <div style={{ fontSize: "2rem" }}>
            {`${dur.hours()}`.padStart(2, "0")} :{" "}
            {`${dur.minutes()}`.padStart(2, "0")} :{" "}
            {`${dur.seconds()}`.padStart(2, "0")}
          </div>
          <Button
            icon={<FaTrash />}
            color="#da2828"
            style={{
              display: "flex",
              justifyContent: "center",
              marginTop: "30px"
            }}
            onClick={clearTime}
            primary
            fill
          />
        </div>
      ) : (
        <TimeSelector setTime={setTime} />
      )}

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "auto",
          marginBottom: "20px",
          width: "100%"
        }}
      />
    </StyledContainer>
  );
};
