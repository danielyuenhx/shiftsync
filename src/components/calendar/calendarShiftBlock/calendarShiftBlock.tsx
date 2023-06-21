import React from "react";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks/hooks";
import {
  step,
  updateCalendarShift,
  updateShiftId,
  updateState,
} from "../../../redux/slices/shiftSlice";
import { Typography } from "antd";

type props = {
  blockIndex: number;
  startTime: number;
  endTime: number;
  colour: string;
  shiftName: string;
  shiftId: number;
  selectedState: string;
};

const CalendarShiftBlock = ({
  blockIndex,
  startTime,
  endTime,
  colour,
  shiftName,
  shiftId,
  selectedState,
}: props) => {
  const heightPerHour = 41.25;
  const blockWidth = 52;
  const skipWidth = 64;

  const dispatch = useAppDispatch();
  const stepDetail = useAppSelector(step);

  const shiftSelect = () => {
    if (
      stepDetail === "REQUEST EMPLOYEE" ||
      stepDetail === "FIND REPLACEMENT"
    ) {
      dispatch(updateState("Pending"));
      dispatch(updateShiftId(shiftId));
    } else {
      dispatch(updateState("Request"));
    }
  };

  return (
    <div
      onClick={shiftSelect}
      style={{
        position: "absolute",
        height: `${heightPerHour * (endTime - startTime)}px`,
        width: blockWidth,
        top: "28px",
        marginTop: `${heightPerHour * startTime}px`,
        left: "96px",
        marginLeft: `${blockIndex * skipWidth}px`,
        backgroundColor: `${colour}`,
        borderRadius: "6px",
        cursor: "pointer",
      }}
    >
      <p
        style={{
          position: "absolute",
          bottom: 0,
          transformOrigin: "bottom left",
          rotate: "-90deg",
          width: `${heightPerHour * (endTime - startTime) - 10}px`,
          transform: `translate(5px, ${blockWidth - 5}px)`,
          fontWeight: 500,
        }}
      >
        <div className="tw-flex tw-justify-center tw-align-middle ">
          <Typography className="tw-font-bold">{shiftName}</Typography>
        </div>
      </p>
    </div>
  );
};

export default CalendarShiftBlock;
