import { useAppDispatch } from "../../../redux/hooks/hooks";
import { Typography } from "antd";
import { updateShift } from "../../../redux/slices/demoSlice";

type props = {
  blockIndex: number;
  startTime: number;
  endTime: number;
  colour: string;
  shiftName: string;
  shift: string;
};

const CalendarShiftBlock = ({
  blockIndex,
  startTime,
  endTime,
  colour,
  shiftName,
  shift,
}: props) => {
  const heightPerHour = 41.25;
  const blockWidth = 52;
  const skipWidth = 64;

  const dispatch = useAppDispatch();

  const shiftSelect = () => {
    dispatch(updateShift(shift));
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
